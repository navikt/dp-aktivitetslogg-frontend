import { describe, expect, it } from "vitest";
import {
  grupperAktiviteter,
  grupperPerBehandling,
  parseAktivitet,
  RegelkjøringMeta,
  TilstandsendringMeta,
  VilkårsvurderingMeta,
} from "@/lib/aktivitet-parser";
import type { Aktivitet, Aktivitetslogg } from "@/lib/aktivitetslogg-api";

function aktivitet(
  melding: string,
  overrides: Partial<Aktivitet> = {},
): Aktivitet {
  return {
    kontekster: [
      {
        kontekstType: "Behandling",
        kontekstMap: { behandlingId: "b1" },
      },
    ],
    alvorlighetsgrad: "INFO",
    melding,
    detaljer: {},
    tidsstempel: "2024-01-15 10:00:00.000",
    ...overrides,
  };
}

function aktivitetslogg(
  aktiviteter: Aktivitet[],
  overrides: Partial<Aktivitetslogg> = {},
): Aktivitetslogg {
  return {
    eventName: "aktivitetslogg",
    hendelse: { type: "SøknadInnsendtHendelse", meldingsreferanseId: "ref" },
    ident: "12345678901",
    aktiviteter,
    id: "id",
    opprettet: new Date("2024-01-15T10:00:00.000Z"),
    systemReadCount: 0,
    systemParticipatingServices: [],
    ...overrides,
  };
}

describe("parseAktivitet", () => {
  it("gjenkjenner tilstandsendring", () => {
    const result = parseAktivitet(
      aktivitet("Tilstandsendring: UnderOpprettelse → UnderBehandling"),
    );
    expect(result.kategori).toBe("tilstandsendring");
    expect(result.metadata).toEqual({
      fra: "UnderOpprettelse",
      til: "UnderBehandling",
    } satisfies TilstandsendringMeta);
  });

  it("gjenkjenner oppsummering av regelkjøring", () => {
    const result = parseAktivitet(
      aktivitet("Regelkjøring: 5 regler kjørt, 2 mangler gjenstår"),
    );
    expect(result.kategori).toBe("oppsummering");
    expect(result.metadata).toEqual({ antallKjørt: 5, antallMangler: 2 });
  });

  it("gjenkjenner ventepunkt/informasjonsinnhenting", () => {
    const result = parseAktivitet(
      aktivitet("Trenger ekstern informasjon: inntekt, bosted"),
    );
    expect(result.kategori).toBe("informasjonsinnhenting");
    expect(result.metadata).toEqual({ opplysninger: ["inntekt", "bosted"] });
  });

  it("gjenkjenner avgjørelse", () => {
    const result = parseAktivitet(aktivitet("Avgjørelse: Innvilget"));
    expect(result.kategori).toBe("avgjørelse");
    expect(result.metadata).toEqual({ avgjørelse: "Innvilget" });
  });

  it("gjenkjenner rettighetsperiode-oppsummering med alle oppfylt", () => {
    const result = parseAktivitet(
      aktivitet("Rettighetsperiode: 3 vilkår vurdert, alle oppfylt"),
    );
    expect(result.kategori).toBe("vilkårsvurdering");
    expect(result.metadata).toEqual({
      type: "oppsummering",
      antallVilkår: 3,
      alleOppfylt: true,
      antallOppfylt: 3,
      antallIkkeOppfylt: 0,
      antallMangler: 0,
    } satisfies VilkårsvurderingMeta);
  });

  it("gjenkjenner rettighetsperiode-oppsummering med delvis oppfylt", () => {
    const result = parseAktivitet(
      aktivitet(
        "Rettighetsperiode: 4 vilkår vurdert, 2 oppfylt, 1 ikke oppfylt, 1 mangler",
      ),
    );
    expect(result.metadata).toEqual({
      type: "oppsummering",
      antallVilkår: 4,
      alleOppfylt: false,
      antallOppfylt: 2,
      antallIkkeOppfylt: 1,
      antallMangler: 1,
    } satisfies VilkårsvurderingMeta);
  });

  it("gjenkjenner enkelt vilkår som oppfylt", () => {
    const result = parseAktivitet(
      aktivitet("✓ Krav til minsteinntekt (siste 12 mnd)"),
    );
    expect(result.kategori).toBe("vilkårsvurdering");
    expect(result.metadata).toEqual({
      type: "vilkår",
      vilkårNavn: "Krav til minsteinntekt",
      status: "oppfylt",
      gyldighet: "siste 12 mnd",
    } satisfies VilkårsvurderingMeta);
  });

  it("gjenkjenner enkelt vilkår som ikke oppfylt uten gyldighet", () => {
    const result = parseAktivitet(aktivitet("✗ Krav til alder"));
    expect(result.metadata).toEqual({
      type: "vilkår",
      vilkårNavn: "Krav til alder",
      status: "ikke_oppfylt",
      gyldighet: undefined,
    } satisfies VilkårsvurderingMeta);
  });

  it("gjenkjenner beslutning om manuell behandling", () => {
    const result = parseAktivitet(
      aktivitet(
        "Behandlingen er ikke automatisk behandlet, krever godkjenning",
      ),
    );
    expect(result.kategori).toBe("beslutning");
    expect(result.metadata).toEqual({
      grunn: "manuell behandling",
      resultat: "Behandlingen er ikke automatisk behandlet, krever godkjenning",
    });
  });

  it("gjenkjenner mottok svar", () => {
    const result = parseAktivitet(
      aktivitet("Mottok svar på opplysning om inntekt"),
    );
    expect(result.kategori).toBe("mottok_svar");
    expect(result.metadata).toEqual({ opplysning: "inntekt" });
  });

  it("gjenkjenner regelkjøring med kjent type", () => {
    const result = parseAktivitet(aktivitet("Beregner krav til minsteinntekt"));
    expect(result.kategori).toBe("regelkjøring");
    expect(result.metadata).toEqual({
      beskrivelse: "Beregner krav til minsteinntekt",
      type: "beregner",
    } satisfies RegelkjøringMeta);
  });

  it("faller tilbake på fase fra kontekst når ingen regex matcher", () => {
    const result = parseAktivitet(
      aktivitet("En helt ukjent melding", {
        kontekster: [
          { kontekstType: "Fase", kontekstMap: { fase: "beslutning" } },
        ],
      }),
    );
    expect(result.kategori).toBe("beslutning");
    expect(result.metadata).toBeNull();
  });

  it("faller tilbake på info når hverken regex eller fase matcher", () => {
    const result = parseAktivitet(aktivitet("En helt ukjent melding"));
    expect(result.kategori).toBe("info");
    expect(result.metadata).toBeNull();
  });
});

describe("grupperAktiviteter", () => {
  it("starter en ny gruppe ved hver tilstandsendring", () => {
    const grupper = grupperAktiviteter([
      aktivitet("Tilstandsendring: A → B"),
      aktivitet("Sjekker noe"),
      aktivitet("Tilstandsendring: B → C"),
    ]);
    expect(grupper).toHaveLength(2);
    expect(grupper[0].tilstand).toBe("B");
    expect(grupper[0].aktiviteter).toHaveLength(2);
    expect(grupper[1].tilstand).toBe("C");
  });

  it("starter ny gruppe når svar mottas etter et ventepunkt", () => {
    const grupper = grupperAktiviteter([
      aktivitet("Tilstandsendring: A → B"),
      aktivitet("Trenger ekstern informasjon: inntekt"),
      aktivitet("Mottok svar på opplysning om inntekt"),
      aktivitet("Beregner noe"),
    ]);
    // gruppe 1: tilstandsendring + ventepunkt, gruppe 2: mottok svar, gruppe 3: regelkjøring etter svar
    expect(grupper).toHaveLength(3);
    expect(grupper[1].aktiviteter[0].kategori).toBe("mottok_svar");
    expect(grupper[2].aktiviteter[0].kategori).toBe("regelkjøring");
  });
});

describe("grupperPerBehandling", () => {
  it("grupperer aktiviteter per behandlingId og sorterer nyeste først", () => {
    const eldre = aktivitetslogg(
      [
        aktivitet("Tilstandsendring: A → B", {
          tidsstempel: "2024-01-15 09:00:00.000",
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: "gammel" },
            },
          ],
        }),
      ],
      { id: "eldre" },
    );
    const nyere = aktivitetslogg(
      [
        aktivitet("Tilstandsendring: A → B", {
          tidsstempel: "2024-01-16 09:00:00.000",
          kontekster: [
            { kontekstType: "Behandling", kontekstMap: { behandlingId: "ny" } },
          ],
        }),
      ],
      { id: "nyere" },
    );

    const behandlinger = grupperPerBehandling([eldre, nyere]);
    expect(behandlinger.map((b) => b.behandlingId)).toEqual(["ny", "gammel"]);
  });

  it("filtrerer bort ignorerte hendelsestyper", () => {
    const logg = aktivitetslogg([aktivitet("Tilstandsendring: A → B")], {
      hendelse: { type: "audit_logg", meldingsreferanseId: "ref" },
    });
    expect(grupperPerBehandling([logg])).toHaveLength(0);
  });

  it("filtrerer bort støymeldinger", () => {
    const logg = aktivitetslogg([
      aktivitet(
        "Kan ikke starte behandling av 123: Hendelse av type Foo kan ikke starte",
      ),
    ]);
    expect(grupperPerBehandling([logg])).toHaveLength(0);
  });

  it("plasserer aktiviteter uten behandlingId i en ukjent-gruppe hvis de har innhold", () => {
    const logg = aktivitetslogg([
      aktivitet("Tilstandsendring: A → B", { kontekster: [] }),
    ]);
    const behandlinger = grupperPerBehandling([logg]);
    expect(behandlinger).toHaveLength(1);
    expect(behandlinger[0].behandlingId).toBe("ukjent");
  });
});
