import { REAL_BEHANDLING_DATA } from "./real-data";

const BEHANDLING_1 = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
const BEHANDLING_2 = "b2c3d4e5-f6a7-8901-bcde-f12345678901";

export function getMockData() {
  return [
    {
      "@event_name": "aktivitetslogg",
      hendelse: {
        type: "SøknadInnsendtHendelse",
        meldingsreferanseId: "12771a34-21b1-4343-b6ed-5f019b63815a",
      },
      ident: "21840298148",
      aktiviteter: [
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_1 },
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
              kontekstMap: { behandlingId: BEHANDLING_1 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Sjekker om søknadsdato er satt",
          detaljer: {},
          tidsstempel: "2024-01-15 10:00:01.200",
        },
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_1 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Fastsetter virkningstidspunkt basert på søknadsdato",
          detaljer: {},
          tidsstempel: "2024-01-15 10:00:01.300",
        },
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_1 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Beregner krav til minsteinntekt",
          detaljer: {},
          tidsstempel: "2024-01-15 10:00:01.400",
        },
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_1 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Regelkjøring: 4 regler kjørt, 2 mangler gjenstår",
          detaljer: {},
          tidsstempel: "2024-01-15 10:00:01.500",
        },
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_1 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding:
            "Trenger ekstern informasjon: inntekt siste 36 måneder, arbeidsforhold",
          detaljer: {},
          tidsstempel: "2024-01-15 10:00:01.600",
        },
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_1 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Tilstandsendring: UnderBehandling → ForslagTilVedtak",
          detaljer: {},
          tidsstempel: "2024-01-15 10:00:02.100",
        },
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_1 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding:
            "Behandlingen er ikke automatisk behandlet, krever godkjenning",
          detaljer: {},
          tidsstempel: "2024-01-15 10:00:02.200",
        },
      ],
      "@id": "431196e4-14c0-49b1-91ae-899ad7b72e05",
      "@opprettet": "2024-01-15T10:00:02.200",
      system_read_count: 1,
      system_participating_services: [
        {
          id: "431196e4-14c0-49b1-91ae-899ad7b72e05",
          time: "2024-01-15T10:00:02.200",
          service: "dp-behandling",
        },
      ],
    },
    {
      "@event_name": "aktivitetslogg",
      hendelse: {
        type: "AvklaringIkkeRelevantHendelse",
        meldingsreferanseId: "cc11aa22-1234-5678-abcd-aabbccddeeff",
      },
      ident: "21840298148",
      aktiviteter: [
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_1 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Tilstandsendring: ForslagTilVedtak → UnderBehandling",
          detaljer: {},
          tidsstempel: "2024-01-15 11:30:00.100",
        },
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_1 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Sjekker om minsteinntekt er oppfylt",
          detaljer: {},
          tidsstempel: "2024-01-15 11:30:00.200",
        },
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_1 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Beregner dagsats",
          detaljer: {},
          tidsstempel: "2024-01-15 11:30:00.300",
        },
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_1 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Fastsetter antall stønadsuker",
          detaljer: {},
          tidsstempel: "2024-01-15 11:30:00.400",
        },
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_1 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Regelkjøring: 6 regler kjørt, 0 mangler gjenstår",
          detaljer: {},
          tidsstempel: "2024-01-15 11:30:00.500",
        },
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_1 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Alle vilkår er oppfylt for automatisk vedtak",
          detaljer: {},
          tidsstempel: "2024-01-15 11:30:00.600",
        },
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_1 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Tilstandsendring: UnderBehandling → ForslagTilVedtak",
          detaljer: {},
          tidsstempel: "2024-01-15 11:30:00.700",
        },
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_1 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Tilstandsendring: ForslagTilVedtak → Vedtatt",
          detaljer: {},
          tidsstempel: "2024-01-15 11:30:00.800",
        },
      ],
      "@id": "dd22bb33-5678-9012-efab-112233445566",
      "@opprettet": "2024-01-15T11:30:01.000",
      system_read_count: 1,
      system_participating_services: [
        {
          id: "dd22bb33-5678-9012-efab-112233445566",
          time: "2024-01-15T11:30:01.000",
          service: "dp-behandling",
        },
      ],
    },
    {
      "@event_name": "aktivitetslogg",
      hendelse: {
        type: "SøknadInnsendtHendelse",
        meldingsreferanseId: "66029ea5-04bc-4ff8-807e-7485e8d1168a",
      },
      ident: "29838099503",
      aktiviteter: [
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_2 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Tilstandsendring: UnderOpprettelse → UnderBehandling",
          detaljer: {},
          tidsstempel: "2024-01-15 12:00:00.100",
        },
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_2 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Henter opplysninger om fødselsdato fra PDL",
          detaljer: {},
          tidsstempel: "2024-01-15 12:00:00.200",
        },
        {
          kontekster: [
            {
              kontekstType: "Behandling",
              kontekstMap: { behandlingId: BEHANDLING_2 },
            },
          ],
          alvorlighetsgrad: "INFO",
          melding: "Har 2 aktive avklaringer, går til manuell behandling",
          detaljer: {},
          tidsstempel: "2024-01-15 12:00:00.300",
        },
      ],
      "@id": "e18dc126-8b92-45d6-b6f7-f4a5947f2af8",
      "@opprettet": "2024-01-15T12:00:00.400",
      system_read_count: 1,
      system_participating_services: [
        {
          id: "e18dc126-8b92-45d6-b6f7-f4a5947f2af8",
          time: "2024-01-15T12:00:00.400",
          service: "dp-behandling",
        },
      ],
    },
    ...REAL_BEHANDLING_DATA,
  ];
}
