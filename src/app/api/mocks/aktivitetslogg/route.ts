import { NextResponse } from "next/server";
import { getAktivitetsloggOboToken, getAzureSession } from "@/lib/auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  if (searchParams.get("since")) return NextResponse.json([]);

  return NextResponse.json([
    {
      "@event_name": "aktivitetslogg",
      hendelse: {
        type: "BeregningsdatoPassertHendelse",
        meldingsreferanseId: "12771a34-21b1-4343-b6ed-5f019b63815a",
      },
      ident: "21840298148",
      aktiviteter: [
        {
          kontekster: [
            {
              kontekstType: "BeregningsdatoPassertHendelse",
              kontekstMap: {
                ident: "21840298148",
                meldingsreferanseId: "12771a34-21b1-4343-b6ed-5f019b63815a",
              },
            },
            {
              kontekstType: "Rapporteringsperiode",
              kontekstMap: { fom: "2023-07-31", tom: "2023-08-13" },
            },
            { kontekstType: "Tilstand", kontekstMap: { tilstand: "Godkjent" } },
          ],
          alvorlighetsgrad: "INFO",
          melding:
            "Rapporteringsperioden skal ikke beregnes på grunn av strategi",
          detaljer: {},
          tidsstempel: "2023-08-14 08:35:21.573",
        },
      ],
      "@id": "431196e4-14c0-49b1-91ae-899ad7b72e05",
      "@opprettet": "2023-08-14T08:35:21.603470994",
      system_read_count: 1,
      system_participating_services: [
        {
          id: "431196e4-14c0-49b1-91ae-899ad7b72e05",
          time: "2023-08-14T08:35:21.603470994",
          service: "dp-rapportering",
        },
        {
          id: "431196e4-14c0-49b1-91ae-899ad7b72e05",
          time: "2023-08-14T06:35:21.606713561",
          service: "dp-aktivitetslogg",
        },
      ],
    },
    {
      "@event_name": "aktivitetslogg",
      hendelse: {
        type: "VedtakFattet",
        meldingsreferanseId: "efae249e-743c-4cc9-8ecc-a85f0de23390",
      },
      ident: "41928800251",
      aktiviteter: [
        {
          kontekster: [
            {
              kontekstType: "BeregningsdatoPassertHendelse",
              kontekstMap: {
                ident: "41928800251",
                meldingsreferanseId: "efae249e-743c-4cc9-8ecc-a85f0de23390",
              },
            },
            {
              kontekstType: "Rapporteringsperiode",
              kontekstMap: { fom: "2023-07-31", tom: "2023-08-13" },
            },
            { kontekstType: "Tilstand", kontekstMap: { tilstand: "Godkjent" } },
          ],
          alvorlighetsgrad: "INFO",
          melding:
            "Rapporteringsperioden skal ikke beregnes på grunn av strategi",
          detaljer: {},
          tidsstempel: "2023-08-14 08:35:21.400",
        },
      ],
      "@id": "ac48a147-ecf5-4b00-84f9-994ccaf9963b",
      "@opprettet": "2023-08-14T08:35:21.44443706",
      system_read_count: 1,
      system_participating_services: [
        {
          id: "ac48a147-ecf5-4b00-84f9-994ccaf9963b",
          time: "2023-08-14T08:35:21.44443706",
          service: "dp-rapportering",
        },
        {
          id: "ac48a147-ecf5-4b00-84f9-994ccaf9963b",
          time: "2023-08-14T06:35:21.448011868",
          service: "dp-aktivitetslogg",
        },
      ],
    },
    {
      "@event_name": "aktivitetslogg",
      hendelse: {
        type: "BeregningsdatoPassertHendelse",
        meldingsreferanseId: "66029ea5-04bc-4ff8-807e-7485e8d1168a",
      },
      ident: "29838099503",
      aktiviteter: [
        {
          kontekster: [
            {
              kontekstType: "BeregningsdatoPassertHendelse",
              kontekstMap: {
                ident: "29838099503",
                meldingsreferanseId: "66029ea5-04bc-4ff8-807e-7485e8d1168a",
              },
            },
            {
              kontekstType: "Rapporteringsperiode",
              kontekstMap: { fom: "2023-07-10", tom: "2023-07-23" },
            },
            { kontekstType: "Tilstand", kontekstMap: { tilstand: "Godkjent" } },
          ],
          alvorlighetsgrad: "INFO",
          melding:
            "Rapporteringsperioden skal ikke beregnes på grunn av strategi",
          detaljer: {},
          tidsstempel: "2023-08-14 08:35:21.289",
        },
      ],
      "@id": "e18dc126-8b92-45d6-b6f7-f4a5947f2af8",
      "@opprettet": "2023-08-14T08:35:21.376024568",
      system_read_count: 1,
      system_participating_services: [
        {
          id: "e18dc126-8b92-45d6-b6f7-f4a5947f2af8",
          time: "2023-08-14T08:35:21.376024568",
          service: "dp-rapportering",
        },
        {
          id: "e18dc126-8b92-45d6-b6f7-f4a5947f2af8",
          time: "2023-08-14T06:35:21.379253838",
          service: "dp-aktivitetslogg",
        },
      ],
    },
  ]);
}
