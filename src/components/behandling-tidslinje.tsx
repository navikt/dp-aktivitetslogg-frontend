"use client";

import React from "react";
import { Aktivitetslogg } from "@/lib/aktivitetslogg-api";
import {
  grupperPerBehandling,
  BehandlingGruppe,
  ParsetAktivitet,
  TidslinjeGruppe,
  TilstandsendringMeta,
  OppsummeringMeta,
  VentepunktMeta,
  BeslutningMeta,
} from "@/lib/aktivitet-parser";
import {
  BodyShort,
  Detail,
  ExpansionCard,
  HStack,
  VStack,
  Tag,
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

function formaterHendelsesnavn(hendelse: string): string {
  return hendelse.replace(/_/g, " ").replace(/\b\w/, (c) => c.toUpperCase());
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
    <VStack gap="space-6">
      {behandlinger.map((behandling) => (
        <BehandlingKort key={behandling.behandlingId} behandling={behandling} />
      ))}
    </VStack>
  );
}

function BehandlingKort({ behandling }: { behandling: BehandlingGruppe }) {
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
          Behandling {kortId}
        </ExpansionCard.Title>
        <ExpansionCard.Description>
          <HStack gap="space-2" wrap align="center">
            {behandling.hendelser.slice(0, 4).map((hendelse) => (
              <Tag key={hendelse} variant="neutral" size="xsmall">
                {formaterHendelsesnavn(hendelse)}
              </Tag>
            ))}
            {tidsrom && (
              <Detail as="span" className={styles.tidsrom}>
                {tidsrom}
              </Detail>
            )}
          </HStack>
        </ExpansionCard.Description>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <Process aria-label={`Prosess for behandling ${kortId}`}>
          {behandling.tidslinjeGrupper.map((gruppe, index) => (
            <TidslinjeGruppeVisning
              key={index}
              gruppe={gruppe}
              isLast={index === behandling.tidslinjeGrupper.length - 1}
            />
          ))}
        </Process>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
}

function TidslinjeGruppeVisning({
  gruppe,
  isLast,
}: {
  gruppe: TidslinjeGruppe;
  isLast: boolean;
}) {
  const tilstandsendring = gruppe.aktiviteter.find(
    (a) => a.kategori === "tilstandsendring",
  );
  const meta = tilstandsendring?.metadata as TilstandsendringMeta | undefined;

  const regelkjøringer = gruppe.aktiviteter.filter(
    (a) => a.kategori === "regelkjøring",
  );
  const øvrige = gruppe.aktiviteter.filter(
    (a) => a.kategori !== "tilstandsendring" && a.kategori !== "regelkjøring",
  );

  const title = meta ? meta.til : (gruppe.tilstand ?? "Oppstart");
  const timestamp = formaterTidspunkt(
    (tilstandsendring ?? gruppe.aktiviteter[0])?.original.tidsstempel,
  );
  const status = isLast ? "active" : "completed";

  const hasContent = regelkjøringer.length > 0 || øvrige.length > 0;

  return (
    <Process.Event
      title={title}
      timestamp={timestamp}
      status={status}
      hideContent={!hasContent}
    >
      {hasContent && (
        <VStack gap="space-4">
          {regelkjøringer.length > 0 && <RegelGruppe regler={regelkjøringer} />}
          {øvrige.map((aktivitet, index) => (
            <AktivitetKort key={index} aktivitet={aktivitet} />
          ))}
        </VStack>
      )}
    </Process.Event>
  );
}

function RegelGruppe({ regler }: { regler: ParsetAktivitet[] }) {
  return (
    <ReadMore header={`${regler.length} regler evaluert`} size="small">
      <List size="small">
        {regler.map((regel, index) => (
          <List.Item key={index}>{regel.original.melding}</List.Item>
        ))}
      </List>
    </ReadMore>
  );
}

function AktivitetKort({ aktivitet }: { aktivitet: ParsetAktivitet }) {
  const { kategori, original, metadata } = aktivitet;

  switch (kategori) {
    case "oppsummering": {
      const meta = metadata as OppsummeringMeta;
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
    case "ventepunkt": {
      const meta = metadata as VentepunktMeta;
      return (
        <InlineMessage status="warning" size="small">
          <VStack gap="space-2">
            <span>Venter på opplysninger</span>
            <HStack gap="space-2" wrap>
              {meta.opplysninger.map((opplysning, i) => (
                <Tag key={i} variant="warning" size="xsmall">
                  {opplysning}
                </Tag>
              ))}
            </HStack>
          </VStack>
        </InlineMessage>
      );
    }
    case "beslutning": {
      const meta = metadata as BeslutningMeta;
      return (
        <InlineMessage status="success" size="small">
          <VStack gap="space-1">
            <span>{meta.resultat}</span>
            <Detail textColor="subtle">Årsak: {meta.grunn}</Detail>
          </VStack>
        </InlineMessage>
      );
    }
    default:
      return (
        <BodyShort size="small" textColor="subtle">
          {original.melding}
        </BodyShort>
      );
  }
}
