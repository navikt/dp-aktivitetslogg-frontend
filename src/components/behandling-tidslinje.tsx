"use client";

import React, { useState } from "react";
import { Aktivitetslogg } from "@/lib/aktivitetslogg-api";
import {
  grupperAktiviteter,
  ParsetAktivitet,
  TidslinjeGruppe,
  TilstandsendringMeta,
  OppsummeringMeta,
  VentepunktMeta,
  BeslutningMeta,
} from "@/lib/aktivitet-parser";
import { BodyShort, Detail, Heading, Tag } from "@navikt/ds-react";
import styles from "./behandling-tidslinje.module.css";

interface Props {
  data: Aktivitetslogg[];
}

export default function BehandlingTidslinje({ data }: Props) {
  const alleAktiviteter = data.flatMap((logg) => logg.aktiviteter);
  const grupper = grupperAktiviteter(alleAktiviteter);

  if (grupper.length === 0) {
    return <BodyShort>Ingen aktiviteter å vise.</BodyShort>;
  }

  return (
    <div className={styles.tidslinje}>
      {grupper.map((gruppe, index) => (
        <TidslinjeGruppeVisning key={index} gruppe={gruppe} />
      ))}
    </div>
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
          <Detail>fra {meta.fra}</Detail>
        </div>
      )}

      {regelkjøringer.length > 0 && <RegelGruppe regler={regelkjøringer} />}

      <ul className={styles.aktivitetListe}>
        {øvrige.map((aktivitet, index) => (
          <AktivitetVisning key={index} aktivitet={aktivitet} />
        ))}
      </ul>
    </div>
  );
}

function RegelGruppe({ regler }: { regler: ParsetAktivitet[] }) {
  const [åpen, setÅpen] = useState(false);

  return (
    <div className={styles.regelGruppe} onClick={() => setÅpen(!åpen)}>
      <BodyShort size="small">
        {åpen ? "▾" : "▸"} {regler.length} regler kjørt
      </BodyShort>
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

function AktivitetVisning({ aktivitet }: { aktivitet: ParsetAktivitet }) {
  const { kategori, original, metadata } = aktivitet;

  switch (kategori) {
    case "oppsummering": {
      const meta = metadata as OppsummeringMeta;
      return (
        <li className={`${styles.aktivitetItem} ${styles.oppsummering}`}>
          ✓ {meta.antallKjørt} regler kjørt
          {meta.antallMangler > 0 && (
            <Tag variant="warning" size="xsmall" style={{ marginLeft: 8 }}>
              {meta.antallMangler} mangler
            </Tag>
          )}
        </li>
      );
    }
    case "ventepunkt": {
      const meta = metadata as VentepunktMeta;
      return (
        <li className={`${styles.aktivitetItem} ${styles.ventepunkt}`}>
          ⏳ Venter på: {meta.opplysninger.join(", ")}
        </li>
      );
    }
    case "beslutning": {
      const meta = metadata as BeslutningMeta;
      return (
        <li className={`${styles.aktivitetItem} ${styles.beslutning}`}>
          🔀 {meta.resultat}
        </li>
      );
    }
    default:
      return <li className={styles.aktivitetItem}>{original.melding}</li>;
  }
}
