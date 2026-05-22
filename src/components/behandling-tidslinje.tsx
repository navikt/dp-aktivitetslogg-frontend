"use client";

import React, { useState } from "react";
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
import { BodyShort, Detail, Heading, Tag, Box } from "@navikt/ds-react";
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
    <div className={styles.behandlinger}>
      {behandlinger.map((behandling) => (
        <BehandlingKort key={behandling.behandlingId} behandling={behandling} />
      ))}
    </div>
  );
}

function BehandlingKort({ behandling }: { behandling: BehandlingGruppe }) {
  const [åpen, setÅpen] = useState(true);
  const kortId =
    behandling.behandlingId === "ukjent"
      ? "Uten behandling"
      : behandling.behandlingId.substring(0, 8);

  return (
    <Box
      padding="space-16"
      borderRadius="8"
      borderWidth="1"
      borderColor="neutral-subtle"
      className={styles.behandlingKort}
    >
      <div className={styles.behandlingHeader} onClick={() => setÅpen(!åpen)}>
        <div className={styles.behandlingTittel}>
          <Heading size="xsmall" as="h2">
            {åpen ? "▾" : "▸"} Behandling {kortId}
          </Heading>
          <div className={styles.behandlingTags}>
            {behandling.hendelser.slice(0, 3).map((hendelse) => (
              <Tag key={hendelse} variant="neutral" size="xsmall">
                {hendelse}
              </Tag>
            ))}
            {behandling.hendelser.length > 3 && (
              <Tag variant="neutral" size="xsmall">
                +{behandling.hendelser.length - 3}
              </Tag>
            )}
          </div>
        </div>
        <Detail>
          {behandling.førsteTidsstempel?.substring(0, 16) ?? ""} →{" "}
          {behandling.sisteTidsstempel?.substring(0, 16) ?? ""}
        </Detail>
      </div>

      {åpen && (
        <div className={styles.tidslinje}>
          {behandling.tidslinjeGrupper.map((gruppe, index) => (
            <TidslinjeGruppeVisning key={index} gruppe={gruppe} />
          ))}
        </div>
      )}
    </Box>
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
          <Heading size="xsmall" as="h3">
            {meta.til}
          </Heading>
          <Detail>← {meta.fra}</Detail>
        </div>
      )}

      <div className={styles.gruppeInnhold}>
        {regelkjøringer.length > 0 && <RegelGruppe regler={regelkjøringer} />}

        {øvrige.map((aktivitet, index) => (
          <AktivitetKort key={index} aktivitet={aktivitet} />
        ))}
      </div>
    </div>
  );
}

function RegelGruppe({ regler }: { regler: ParsetAktivitet[] }) {
  const [åpen, setÅpen] = useState(false);

  return (
    <div className={styles.regelGruppe} onClick={() => setÅpen(!åpen)}>
      <div className={styles.regelGruppeHeader}>
        <BodyShort size="small" weight="semibold">
          {åpen ? "▾" : "▸"} {regler.length} regler evaluert
        </BodyShort>
        <Tag variant="neutral" size="xsmall">
          Regelkjøring
        </Tag>
      </div>
      {åpen && (
        <ul className={styles.regelListe}>
          {regler.map((regel, index) => (
            <li key={index} className={styles.regelItem}>
              {regel.original.melding}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function AktivitetKort({ aktivitet }: { aktivitet: ParsetAktivitet }) {
  const { kategori, original, metadata } = aktivitet;

  switch (kategori) {
    case "oppsummering": {
      const meta = metadata as OppsummeringMeta;
      return (
        <div className={`${styles.kort} ${styles.oppsummering}`}>
          <div className={styles.kortHeader}>
            <BodyShort size="small" weight="semibold">
              ✓ {meta.antallKjørt} regler kjørt
            </BodyShort>
            {meta.antallMangler > 0 && (
              <Tag variant="warning" size="xsmall">
                {meta.antallMangler} mangler gjenstår
              </Tag>
            )}
            {meta.antallMangler === 0 && (
              <Tag variant="success" size="xsmall">
                Komplett
              </Tag>
            )}
          </div>
        </div>
      );
    }
    case "ventepunkt": {
      const meta = metadata as VentepunktMeta;
      return (
        <div className={`${styles.kort} ${styles.ventepunkt}`}>
          <BodyShort size="small" weight="semibold">
            ⏳ Venter på ekstern informasjon
          </BodyShort>
          <div className={styles.ventepunktListe}>
            {meta.opplysninger.map((opplysning, i) => (
              <Tag key={i} variant="warning" size="xsmall">
                {opplysning}
              </Tag>
            ))}
          </div>
        </div>
      );
    }
    case "beslutning": {
      const meta = metadata as BeslutningMeta;
      return (
        <div className={`${styles.kort} ${styles.beslutning}`}>
          <div className={styles.kortHeader}>
            <BodyShort size="small" weight="semibold">
              🔀 Beslutning
            </BodyShort>
            <Tag variant="success" size="xsmall">
              {meta.grunn}
            </Tag>
          </div>
          <Detail>{meta.resultat}</Detail>
        </div>
      );
    }
    default:
      return (
        <div className={`${styles.kort} ${styles.info}`}>
          <BodyShort size="small">{original.melding}</BodyShort>
        </div>
      );
  }
}
