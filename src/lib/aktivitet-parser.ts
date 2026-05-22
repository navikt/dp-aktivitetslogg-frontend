import { Aktivitet, Aktivitetslogg } from "@/lib/aktivitetslogg-api";

export type AktivitetKategori =
  | "tilstandsendring"
  | "regelkjøring"
  | "oppsummering"
  | "informasjonsinnhenting"
  | "mottok_svar"
  | "beslutning"
  | "info";

export interface ParsetAktivitet {
  original: Aktivitet;
  kategori: AktivitetKategori;
  metadata:
    | TilstandsendringMeta
    | RegelkjøringMeta
    | OppsummeringMeta
    | VentepunktMeta
    | MottokSvarMeta
    | BeslutningMeta
    | null;
}

export interface TilstandsendringMeta {
  fra: string;
  til: string;
}

export interface RegelkjøringMeta {
  beskrivelse: string;
  type:
    | "beregner"
    | "sjekker"
    | "fastsetter"
    | "henter"
    | "finner"
    | "venter"
    | "slår_opp";
}

export interface OppsummeringMeta {
  antallKjørt: number;
  antallMangler: number;
}

export interface VentepunktMeta {
  opplysninger: string[];
}

export interface BeslutningMeta {
  grunn: string;
  resultat: string;
}

export interface MottokSvarMeta {
  opplysning: string;
}

const TILSTANDSENDRING_REGEX = /^Tilstandsendring: (.+) → (.+)$/;
const OPPSUMMERING_REGEX =
  /^Regelkjøring: (\d+) regler kjørt, (\d+) mangler gjenstår$/;
const VENTEPUNKT_REGEX = /^Trenger ekstern informasjon: (.+)$/;
const BESLUTNING_REGEXES = [
  {
    regex: /^Har (\d+) aktive avklaringer, går til (.+)$/,
    grunn: "aktive avklaringer",
  },
  {
    regex: /^Behandlingen er ikke automatisk behandlet, krever godkjenning$/,
    grunn: "manuell behandling",
  },
  {
    regex: /^Behandlingen krever totrinnskontroll$/,
    grunn: "totrinnskontroll",
  },
  {
    regex: /^Alle vilkår er oppfylt for automatisk vedtak$/,
    grunn: "automatisk vedtak",
  },
];
const REGELKJØRING_REGEX =
  /^(Beregner|Sjekker|Fastsetter|Henter|Finner|Venter|Slår opp)\b/;
const MOTTOK_SVAR_REGEX = /^Mottok svar på opplysning om (.+)$/;

export function parseAktivitet(aktivitet: Aktivitet): ParsetAktivitet {
  const melding = aktivitet.melding;

  // Sjekk kontekst-basert fase først
  const faseKontekst = aktivitet.kontekster.find(
    (k) => k.kontekstType === "Fase",
  );
  const fase = faseKontekst?.kontekstMap["fase"] as
    | AktivitetKategori
    | undefined;

  // Tilstandsendring
  const tilstandMatch = melding.match(TILSTANDSENDRING_REGEX);
  if (tilstandMatch) {
    return {
      original: aktivitet,
      kategori: "tilstandsendring",
      metadata: { fra: tilstandMatch[1], til: tilstandMatch[2] },
    };
  }

  // Oppsummering
  const oppsummeringMatch = melding.match(OPPSUMMERING_REGEX);
  if (oppsummeringMatch) {
    return {
      original: aktivitet,
      kategori: "oppsummering",
      metadata: {
        antallKjørt: parseInt(oppsummeringMatch[1], 10),
        antallMangler: parseInt(oppsummeringMatch[2], 10),
      },
    };
  }

  // Ventepunkt / informasjonsinnhenting
  const ventepunktMatch = melding.match(VENTEPUNKT_REGEX);
  if (ventepunktMatch) {
    return {
      original: aktivitet,
      kategori: "informasjonsinnhenting",
      metadata: { opplysninger: ventepunktMatch[1].split(", ") },
    };
  }

  // Beslutning
  for (const { regex, grunn } of BESLUTNING_REGEXES) {
    const match = melding.match(regex);
    if (match) {
      return {
        original: aktivitet,
        kategori: "beslutning",
        metadata: { grunn, resultat: melding },
      };
    }
  }

  // Mottok svar
  const mottokSvarMatch = melding.match(MOTTOK_SVAR_REGEX);
  if (mottokSvarMatch) {
    return {
      original: aktivitet,
      kategori: "mottok_svar",
      metadata: { opplysning: mottokSvarMatch[1] },
    };
  }

  // Regelkjøring
  const regelMatch = melding.match(REGELKJØRING_REGEX);
  if (regelMatch) {
    const typeMap: Record<string, RegelkjøringMeta["type"]> = {
      Beregner: "beregner",
      Sjekker: "sjekker",
      Fastsetter: "fastsetter",
      Henter: "henter",
      Finner: "finner",
      Venter: "venter",
      "Slår opp": "slår_opp",
    };
    return {
      original: aktivitet,
      kategori: "regelkjøring",
      metadata: { beskrivelse: melding, type: typeMap[regelMatch[1]] },
    };
  }

  // Bruk fase fra kontekst som fallback-kategori
  if (fase) {
    return { original: aktivitet, kategori: fase, metadata: null };
  }

  // Alt annet
  return { original: aktivitet, kategori: "info", metadata: null };
}

export interface TidslinjeGruppe {
  behandlingId: string | null;
  tilstand: string | null;
  aktiviteter: ParsetAktivitet[];
}

export function grupperAktiviteter(
  aktiviteter: Aktivitet[],
): TidslinjeGruppe[] {
  const parsede = aktiviteter.map(parseAktivitet);
  const grupper: TidslinjeGruppe[] = [];
  let gjeldendeTilstand: string | null = null;
  let gjeldendeGruppe: TidslinjeGruppe | null = null;
  let venterPåSvar = false;

  for (const aktivitet of parsede) {
    const behandlingId = finnBehandlingId(aktivitet.original);

    if (aktivitet.kategori === "tilstandsendring") {
      const meta = aktivitet.metadata as TilstandsendringMeta;
      gjeldendeTilstand = meta.til;
      venterPåSvar = false;

      gjeldendeGruppe = {
        behandlingId,
        tilstand: gjeldendeTilstand,
        aktiviteter: [aktivitet],
      };
      grupper.push(gjeldendeGruppe);
    } else if (aktivitet.kategori === "informasjonsinnhenting") {
      // Ventepunkt markerer en pause
      if (gjeldendeGruppe) {
        gjeldendeGruppe.aktiviteter.push(aktivitet);
      }
      venterPåSvar = true;
    } else if (venterPåSvar && aktivitet.kategori === "mottok_svar") {
      // Første mottok_svar etter ventepunkt — start ny gruppe
      if (
        venterPåSvar &&
        !gjeldendeGruppe?.aktiviteter.some((a) => a.kategori === "mottok_svar")
      ) {
        gjeldendeGruppe = {
          behandlingId,
          tilstand: gjeldendeTilstand,
          aktiviteter: [aktivitet],
        };
        grupper.push(gjeldendeGruppe);
      } else {
        gjeldendeGruppe!.aktiviteter.push(aktivitet);
      }
    } else {
      // Regelkjøring etter mottok_svar = ny runde
      if (venterPåSvar && aktivitet.kategori === "regelkjøring") {
        venterPåSvar = false;
        gjeldendeGruppe = {
          behandlingId,
          tilstand: gjeldendeTilstand,
          aktiviteter: [aktivitet],
        };
        grupper.push(gjeldendeGruppe);
      } else {
        if (!gjeldendeGruppe) {
          gjeldendeGruppe = {
            behandlingId,
            tilstand: gjeldendeTilstand,
            aktiviteter: [],
          };
          grupper.push(gjeldendeGruppe);
        }
        gjeldendeGruppe.aktiviteter.push(aktivitet);
      }
    }
  }

  return grupper;
}

function finnBehandlingId(aktivitet: Aktivitet): string | null {
  for (const kontekst of aktivitet.kontekster) {
    if (kontekst.kontekstMap["behandlingId"]) {
      return kontekst.kontekstMap["behandlingId"];
    }
  }
  return null;
}

export interface BehandlingGruppe {
  behandlingId: string;
  hendelser: string[];
  førsteTidsstempel: string | null;
  sisteTidsstempel: string | null;
  tidslinjeGrupper: TidslinjeGruppe[];
}

/**
 * Grupperer aktivitetslogger per behandlingId.
 * Aktiviteter uten behandlingId havner i en "Ukjent"-gruppe.
 */
const IGNORERTE_HENDELSER = new Set([
  "audit_logg",
  "auditlogg",
  "aktivitetslogg",
]);

const IGNORERTE_MELDINGER = [/^Trenger en opplysning \(/];

const NOISE_PATTERN =
  /^Kan ikke starte behandling av .+: Hendelse av type .+ kan ikke starte/;

export function grupperPerBehandling(
  aktivitetslogger: Aktivitetslogg[],
): BehandlingGruppe[] {
  const behandlingMap = new Map<
    string,
    { aktiviteter: Aktivitet[]; hendelser: Set<string> }
  >();

  for (const logg of aktivitetslogger) {
    if (IGNORERTE_HENDELSER.has(logg.hendelse.type.toLowerCase())) continue;
    for (const aktivitet of logg.aktiviteter) {
      if (IGNORERTE_MELDINGER.some((re) => re.test(aktivitet.melding)))
        continue;
      if (NOISE_PATTERN.test(aktivitet.melding)) continue;
      const behandlingId = finnBehandlingId(aktivitet) ?? "ukjent";

      if (!behandlingMap.has(behandlingId)) {
        behandlingMap.set(behandlingId, {
          aktiviteter: [],
          hendelser: new Set(),
        });
      }

      const entry = behandlingMap.get(behandlingId)!;
      entry.aktiviteter.push(aktivitet);
      entry.hendelser.add(logg.hendelse.type);
    }
  }

  const grupper: BehandlingGruppe[] = [];

  for (const [behandlingId, { aktiviteter, hendelser }] of behandlingMap) {
    if (aktiviteter.length === 0) continue;
    // Sorter aktiviteter kronologisk
    const sortert = [...aktiviteter].sort((a, b) =>
      a.tidsstempel.localeCompare(b.tidsstempel),
    );

    grupper.push({
      behandlingId,
      hendelser: [...hendelser],
      førsteTidsstempel: sortert[0]?.tidsstempel ?? null,
      sisteTidsstempel: sortert[sortert.length - 1]?.tidsstempel ?? null,
      tidslinjeGrupper: grupperAktiviteter(sortert),
    });
  }

  // Sorter behandlinger med nyeste først
  grupper.sort((a, b) =>
    (b.sisteTidsstempel ?? "").localeCompare(a.sisteTidsstempel ?? ""),
  );

  // Filtrer bort "ukjent" grupper som bare inneholder støy
  return grupper.filter(
    (g) => g.behandlingId !== "ukjent" || g.tidslinjeGrupper.length > 0,
  );
}
