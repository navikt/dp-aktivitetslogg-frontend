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
  Box,
  List,
  InlineMessage,
} from "@navikt/ds-react";
import styles from "./behandling-tidslinje.module.css";

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
      : behandling.behandlingId.substring(0, 8);

  const tidsrom = [
    behandling.førsteTidsstempel?.substring(0, 16),
    behandling.sisteTidsstempel?.substring(0, 16),
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
                {hendelse}
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
        <div className={styles.tidslinje}>
          {behandling.tidslinjeGrupper.map((gruppe, index) => (
            <TidslinjeGruppeVisning key={index} gruppe={gruppe} />
          ))}
        </div>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
}

function TidslinjeGruppeVisning({ gruppe }: { gruppe: TidslinjeGruppe }) {
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

  return (
    <div className={styles.gruppe}>
      {meta && (
        <div className={styles.milepæl}>
          <BodyShort size="small" weight="semibold">
            {meta.til}
          </BodyShort>
          <Detail>← {meta.fra}</Detail>
        </div>
      )}

      <VStack gap="space-2" className={styles.gruppeInnhold}>
        {regelkjøringer.length > 0 && <RegelGruppe regler={regelkjøringer} />}
        {øvrige.map((aktivitet, index) => (
          <AktivitetKort key={index} aktivitet={aktivitet} />
        ))}
      </VStack>
    </div>
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
            <span>Venter på ekstern informasjon</span>
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
          <HStack gap="space-2" align="center">
            <span>{meta.resultat}</span>
            <Tag variant="success" size="xsmall">
              {meta.grunn}
            </Tag>
          </HStack>
        </InlineMessage>
      );
    }
    default:
      return (
        <Box paddingInline="space-6">
          <Detail textColor="subtle">{original.melding}</Detail>
        </Box>
      );
  }
}
