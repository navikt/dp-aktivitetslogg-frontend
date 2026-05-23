"use client";

import React, { useState } from "react";
import { Aktivitetslogg } from "@/lib/aktivitetslogg-api";
import {
  grupperPerBehandling,
  BehandlingGruppe,
  ParsetAktivitet,
  TidslinjeGruppe,
  TilstandsendringMeta,
  MottokSvarMeta,
  OppsummeringMeta,
  VentepunktMeta,
  BeslutningMeta,
} from "@/lib/aktivitet-parser";
import {
  BodyShort,
  Button,
  CopyButton,
  Detail,
  ExpansionCard,
  HStack,
  VStack,
  ReadMore,
  List,
  InlineMessage,
  Process,
} from "@navikt/ds-react";
import styles from "./behandling-tidslinje.module.css";

function formaterTidspunkt(iso?: string): string | undefined {
  if (!iso) return undefined;
  return new Date(iso).toLocaleString("nb-NO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function formaterKortTidspunkt(iso?: string): string | undefined {
  if (!iso) return undefined;
  return new Date(iso).toLocaleString("nb-NO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

interface Props {
  data: Aktivitetslogg[];
}

export default function BehandlingTidslinje({ data }: Props) {
  const behandlinger = grupperPerBehandling(data);

  if (behandlinger.length === 0) {
    return <BodyShort>Ingen aktiviteter å vise.</BodyShort>;
  }

  return (
    <VStack gap="space-6" className={styles.container}>
      {behandlinger.map((behandling) => (
        <BehandlingKort key={behandling.behandlingId} behandling={behandling} />
      ))}
    </VStack>
  );
}

function BehandlingKort({ behandling }: { behandling: BehandlingGruppe }) {
  const [expandAll, setExpandAll] = useState(false);
  const kortId =
    behandling.behandlingId === "ukjent"
      ? "Uten behandling"
      : behandling.behandlingId;

  const tidsrom = [
    formaterKortTidspunkt(behandling.førsteTidsstempel ?? undefined),
    formaterKortTidspunkt(behandling.sisteTidsstempel ?? undefined),
  ]
    .filter(Boolean)
    .join(" → ");

  return (
    <ExpansionCard aria-label={`Behandling ${kortId}`} defaultOpen size="small">
      <ExpansionCard.Header>
        <ExpansionCard.Title size="small">
          <HStack gap="space-2" align="center">
            Behandling {kortId}
            {behandling.behandlingId !== "ukjent" && (
              <CopyButton
                copyText={behandling.behandlingId}
                size="xsmall"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </HStack>
        </ExpansionCard.Title>
        <ExpansionCard.Description>
          {tidsrom && (
            <Detail as="span" className={styles.tidsrom}>
              {tidsrom}
            </Detail>
          )}
        </ExpansionCard.Description>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <VStack gap="space-4">
          <Button
            variant="tertiary"
            size="xsmall"
            onClick={() => setExpandAll((prev) => !prev)}
          >
            {expandAll ? "Kollaps alt" : "Ekspander alt"}
          </Button>
          <Process aria-label={`Prosess for behandling ${kortId}`}>
            {behandling.tidslinjeGrupper.map((gruppe, index) => (
              <TidslinjeGruppeVisning
                key={index}
                gruppe={gruppe}
                isLast={index === behandling.tidslinjeGrupper.length - 1}
                expandAll={expandAll}
              />
            ))}
          </Process>
        </VStack>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
}

function TidslinjeGruppeVisning({
  gruppe,
  isLast,
  expandAll,
}: {
  gruppe: TidslinjeGruppe;
  isLast: boolean;
  expandAll: boolean;
}) {
  const tilstandsendring = gruppe.aktiviteter.find(
    (a) => a.kategori === "tilstandsendring",
  );
  const meta = tilstandsendring?.metadata as TilstandsendringMeta | undefined;

  const regelkjøringer = gruppe.aktiviteter.filter(
    (a) => a.kategori === "regelkjøring",
  );
  const mottokSvar = gruppe.aktiviteter.filter(
    (a) => a.kategori === "mottok_svar",
  );
  const øvrige = gruppe.aktiviteter.filter(
    (a) =>
      a.kategori !== "tilstandsendring" &&
      a.kategori !== "regelkjøring" &&
      a.kategori !== "mottok_svar" &&
      a.kategori !== "oppsummering" &&
      a.kategori !== "informasjonsinnhenting",
  );

  // Hvis gruppen kun består av mottok_svar, vis "Mottok svar" som tittel
  const isMottokSvarGruppe =
    mottokSvar.length > 0 && !tilstandsendring && regelkjøringer.length === 0;

  const title = isMottokSvarGruppe
    ? "Mottok svar"
    : meta
      ? meta.til
      : (gruppe.tilstand ?? "Oppstart");
  const timestamp = formaterTidspunkt(
    (tilstandsendring ?? gruppe.aktiviteter[0])?.original.tidsstempel,
  );
  const status = isLast ? "active" : "completed";

  const hasContent =
    regelkjøringer.length > 0 || mottokSvar.length > 0 || øvrige.length > 0;

  return (
    <Process.Event
      title={title}
      timestamp={timestamp}
      status={status}
      hideContent={!hasContent}
    >
      {hasContent && (
        <VStack gap="space-4">
          {regelkjøringer.length > 0 && (
            <RegelGruppe
              regler={regelkjøringer}
              informasjonsinnhenting={gruppe.aktiviteter.filter(
                (a) => a.kategori === "informasjonsinnhenting",
              )}
              open={expandAll}
            />
          )}
          {mottokSvar.length > 0 && (
            <MottokSvarGruppe opplysninger={mottokSvar} open={expandAll} />
          )}
          {øvrige.map((aktivitet, index) => (
            <AktivitetKort key={index} aktivitet={aktivitet} />
          ))}
        </VStack>
      )}
    </Process.Event>
  );
}

function RegelGruppe({
  regler,
  informasjonsinnhenting,
  open,
}: {
  regler: ParsetAktivitet[];
  informasjonsinnhenting: ParsetAktivitet[];
  open: boolean;
}) {
  const ventepunkt = informasjonsinnhenting.find((a) => a.metadata !== null);
  const opplysninger = ventepunkt
    ? (ventepunkt.metadata as VentepunktMeta).opplysninger
    : [];

  return (
    <VStack gap="space-2">
      <ReadMore
        header={`Kjørte ${regler.length} regler`}
        size="small"
        open={open || undefined}
      >
        <List size="small">
          {regler.map((regel, index) => (
            <List.Item key={index}>{regel.original.melding}</List.Item>
          ))}
        </List>
      </ReadMore>
      {opplysninger.length > 0 && (
        <ReadMore
          header={`Innhenter ${opplysninger.length} opplysninger`}
          size="small"
          open={open || undefined}
        >
          <List size="small">
            {opplysninger.map((opplysning, i) => (
              <List.Item key={i}>{opplysning}</List.Item>
            ))}
          </List>
        </ReadMore>
      )}
    </VStack>
  );
}

function MottokSvarGruppe({
  opplysninger,
  open,
}: {
  opplysninger: ParsetAktivitet[];
  open: boolean;
}) {
  return (
    <ReadMore
      header={`Mottok svar på ${opplysninger.length} opplysninger`}
      size="small"
      open={open || undefined}
    >
      <List size="small">
        {opplysninger.map((item, index) => (
          <List.Item key={index}>
            {(item.metadata as MottokSvarMeta).opplysning}
          </List.Item>
        ))}
      </List>
    </ReadMore>
  );
}

function AktivitetKort({ aktivitet }: { aktivitet: ParsetAktivitet }) {
  const { kategori, original, metadata } = aktivitet;

  switch (kategori) {
    case "oppsummering": {
      const meta = metadata as OppsummeringMeta | null;
      if (!meta) break;
      return (
        <InlineMessage
          status={meta.antallMangler > 0 ? "warning" : "success"}
          size="small"
        >
          {meta.antallKjørt} regler kjørt
          {meta.antallMangler > 0
            ? ` — ${meta.antallMangler} mangler gjenstår`
            : " — komplett"}
        </InlineMessage>
      );
    }
    case "informasjonsinnhenting": {
      const meta = metadata as VentepunktMeta | null;
      if (!meta) break;
      return (
        <ReadMore
          header={`Innhenter ${meta.opplysninger.length} opplysninger`}
          size="small"
        >
          <List size="small">
            {meta.opplysninger.map((opplysning, i) => (
              <List.Item key={i}>{opplysning}</List.Item>
            ))}
          </List>
        </ReadMore>
      );
    }
    case "beslutning": {
      const meta = metadata as BeslutningMeta | null;
      if (!meta) break;
      return (
        <InlineMessage status="success" size="small">
          {meta.resultat}
        </InlineMessage>
      );
    }
    default: {
      // Avklaring-meldinger skiller seg ut visuelt
      if (original.melding.startsWith("Avklaring")) {
        return (
          <InlineMessage status="info" size="small">
            {original.melding}
          </InlineMessage>
        );
      }
      return (
        <BodyShort size="small" textColor="subtle">
          {original.melding}
        </BodyShort>
      );
    }
  }

  // Fallback når metadata er null (kontekst-basert kategori uten regex-match)
  return (
    <BodyShort size="small" textColor="subtle">
      {original.melding}
    </BodyShort>
  );
}
