export const BEHANDLING_ID = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";

export const behandlingFixture = [
  {
    eventName: "aktivitetslogg",
    hendelse: {
      type: "SøknadInnsendtHendelse",
      meldingsreferanseId: "12771a34-21b1-4343-b6ed-5f019b63815a",
    },
    ident: "21840298148",
    id: "logg-1",
    opprettet: "2024-01-15T10:00:01.000Z",
    systemReadCount: 0,
    systemParticipatingServices: [],
    aktiviteter: [
      {
        kontekster: [
          {
            kontekstType: "Behandling",
            kontekstMap: { behandlingId: BEHANDLING_ID },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Tilstandsendring: UnderOpprettelse → UnderBehandling",
        detaljer: {},
        tidsstempel: "2024-01-15 10:00:01.100",
      },
      {
        kontekster: [
          {
            kontekstType: "Behandling",
            kontekstMap: { behandlingId: BEHANDLING_ID },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Beregner krav til minsteinntekt",
        detaljer: {},
        tidsstempel: "2024-01-15 10:00:01.200",
      },
      {
        kontekster: [
          {
            kontekstType: "Behandling",
            kontekstMap: { behandlingId: BEHANDLING_ID },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Avgjørelse: Innvilget",
        detaljer: {},
        tidsstempel: "2024-01-15 10:00:01.300",
      },
    ],
  },
];
