// Ekte data fra dev-miljø (behandling 019e50f2-e34e-75de-8693-f144bbc4ffb7)
// Inneholder full livssyklus: søknad → regelkjøring → informasjonsinnhenting → svar → avklaringer
export const REAL_BEHANDLING_DATA = [
  {
    "@event_name": "aktivitetslogg",
    hendelse: {
      type: "SøknadInnsendtHendelse",
      meldingsreferanseId: "44689c90-d2d0-4ffd-bf10-c80889955cf6",
    },
    ident: "23497345545",
    aktiviteter: [
      {
        kontekster: [
          {
            kontekstType: "SøknadInnsendtHendelse",
            kontekstMap: {
              ident: "23497345545",
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderOpprettelse",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.728124646",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Mottatt SøknadInnsendtHendelse og startet behandling",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:15.736",
      },
      {
        kontekster: [
          {
            kontekstType: "SøknadInnsendtHendelse",
            kontekstMap: {
              ident: "23497345545",
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderOpprettelse",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.728124646",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750263756",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Tilstandsendring: UnderOpprettelse → UnderBehandling",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:15.750",
      },
      {
        kontekster: [
          {
            kontekstType: "SøknadInnsendtHendelse",
            kontekstMap: {
              ident: "23497345545",
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderOpprettelse",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.728124646",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750263756",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Henter fra-og-med-dato for søknadId",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:15.778",
      },
      {
        kontekster: [
          {
            kontekstType: "SøknadInnsendtHendelse",
            kontekstMap: {
              ident: "23497345545",
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderOpprettelse",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.728124646",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750263756",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Fastsetter Aldersgrense med utgangspunkt 67",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:15.778",
      },
      {
        kontekster: [
          {
            kontekstType: "SøknadInnsendtHendelse",
            kontekstMap: {
              ident: "23497345545",
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderOpprettelse",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.728124646",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750263756",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Fastsetter Har satt frem skriftlig søknad med utgangspunkt true",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:15.778",
      },
      {
        kontekster: [
          {
            kontekstType: "SøknadInnsendtHendelse",
            kontekstMap: {
              ident: "23497345545",
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderOpprettelse",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.728124646",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750263756",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Fastsetter Mot bedre vitende har gitt uriktige opplysninger med utgangspunkt false",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:15.778",
      },
      {
        kontekster: [
          {
            kontekstType: "SøknadInnsendtHendelse",
            kontekstMap: {
              ident: "23497345545",
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderOpprettelse",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.728124646",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750263756",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Fastsetter Holder tilbake opplysninger som er viktige for rettigheter eller plikter etter denne loven med utgangspunkt false",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:15.778",
      },
      {
        kontekster: [
          {
            kontekstType: "SøknadInnsendtHendelse",
            kontekstMap: {
              ident: "23497345545",
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderOpprettelse",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.728124646",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750263756",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Fastsetter Uten rimelig grunn unnlater å etterkomme pålegg som er gitt med hjemmel i denne loven med utgangspunkt false",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:15.778",
      },
      {
        kontekster: [
          {
            kontekstType: "SøknadInnsendtHendelse",
            kontekstMap: {
              ident: "23497345545",
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderOpprettelse",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.728124646",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750263756",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Sjekker at ingen av Mot bedre vitende har gitt uriktige opplysninger, Holder tilbake opplysninger som er viktige for rettigheter eller plikter etter denne loven, Uten rimelig grunn unnlater å etterkomme pålegg som er gitt med hjemmel i denne loven er sanne",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:15.778",
      },
      {
        kontekster: [
          {
            kontekstType: "SøknadInnsendtHendelse",
            kontekstMap: {
              ident: "23497345545",
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderOpprettelse",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.728124646",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750263756",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Regelkjøring: 7 regler kjørt, 2 mangler gjenstår",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:15.779",
      },
      {
        kontekster: [
          {
            kontekstType: "SøknadInnsendtHendelse",
            kontekstMap: {
              ident: "23497345545",
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderOpprettelse",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.728124646",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750263756",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Trenger ekstern informasjon: Ønsker dagpenger fra dato, Fødselsdato",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:15.779",
      },
      {
        kontekster: [
          {
            kontekstType: "SøknadInnsendtHendelse",
            kontekstMap: {
              ident: "23497345545",
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderOpprettelse",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.728124646",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750263756",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "BEHOV",
        melding: "Trenger en opplysning (ØnskerDagpengerFraDato)",
        detaljer: {
          søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
          "@utledetAv": ["019e50f2-e352-7752-b7dc-5d028ecf7781"],
          gjelderDato: "2026-05-22",
          søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
        },
        tidsstempel: "2026-05-22 20:29:15.782",
      },
      {
        kontekster: [
          {
            kontekstType: "SøknadInnsendtHendelse",
            kontekstMap: {
              ident: "23497345545",
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderOpprettelse",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.728124646",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750263756",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "BEHOV",
        melding: "Trenger en opplysning (Fødselsdato)",
        detaljer: {
          søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
          "@utledetAv": [],
          gjelderDato: "2026-05-22",
          søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
        },
        tidsstempel: "2026-05-22 20:29:15.782",
      },
    ],
    "@id": "e9c76ff6-bba0-4c82-adad-5981493526d0",
    "@opprettet": "2026-05-22T20:29:16.128035708",
    system_read_count: 1,
    system_participating_services: [
      {
        id: "e9c76ff6-bba0-4c82-adad-5981493526d0",
        time: "2026-05-22T20:29:16.128035708",
        service: "dp-behandling",
      },
      {
        id: "e9c76ff6-bba0-4c82-adad-5981493526d0",
        time: "2026-05-22T20:29:16.140857281",
        service: "dp-aktivitetslogg",
      },
    ],
  },
  {
    "@event_name": "aktivitetslogg",
    hendelse: {
      type: "AvklaringIkkeRelevantHendelse",
      meldingsreferanseId: "c965b242-ebd1-486b-a87f-0f5d5dc66ea1",
    },
    ident: "23497345545",
    aktiviteter: [
      {
        kontekster: [
          {
            kontekstType: "AvklaringIkkeRelevantHendelse",
            kontekstMap: {
              kode: "HarTilleggsopplysninger",
              ident: "23497345545",
              avklaringId: "019e50f2-e37e-7160-a579-3c8f4a6293eb",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Avklaring HarTilleggsopplysninger er ikke lenger relevant",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.281",
      },
    ],
    "@id": "33ed8b6e-d896-4eda-9a79-58120cc01147",
    "@opprettet": "2026-05-22T20:29:16.329707024",
    system_read_count: 1,
    system_participating_services: [
      {
        id: "33ed8b6e-d896-4eda-9a79-58120cc01147",
        time: "2026-05-22T20:29:16.329707024",
        service: "dp-behandling",
      },
      {
        id: "33ed8b6e-d896-4eda-9a79-58120cc01147",
        time: "2026-05-22T20:29:17.249496836",
        service: "dp-aktivitetslogg",
      },
    ],
  },
  {
    "@event_name": "aktivitetslogg",
    hendelse: {
      type: "OpplysningSvarHendelse",
      meldingsreferanseId: "254b59a0-c84e-45e7-aad7-7f2917c66ab2",
    },
    ident: "23497345545",
    aktiviteter: [
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "mottok_svar",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Mottok svar på opplysning om Ønsker dagpenger fra dato",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.688",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "mottok_svar",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Mottok svar på opplysning om Fødselsdato",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.689",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Fastsetter Søknadstidspunkt til siste dato av Søknadsdato, Ønsker dagpenger fra dato",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.722",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Beregner Dato søker når maks alder ved å legge til Aldersgrense år på Fødselsdato",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.722",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Fastsetter Prøvingsdato til siste dato av Søknadstidspunkt",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.722",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Fastsetter Siste mulige dag bruker kan oppfylle alderskrav til siste dag i måneden for Dato søker når maks alder",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Sjekker at Prøvingsdato er før eller lik Siste mulige dag bruker kan oppfylle alderskrav",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Fastsetter Ønsker dagpenger ved framsatt søknad med utgangspunkt true",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Slår opp gjeldende verdi for Lovpålagt rapporteringsfrist for A-ordningen på Prøvingsdato",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Slår opp gjeldende verdi for Maks lengde på opptjeningsperiode på Prøvingsdato",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Slår opp gjeldende verdi for Grunnbeløp på Prøvingsdato",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Slår opp gjeldende verdi for Antall G for krav til 12 mnd arbeidsinntekt på Prøvingsdato",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Slår opp gjeldende verdi for Antall G for krav til 36 mnd arbeidsinntekt på Prøvingsdato",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Henter fra-og-med-dato for søknadId",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Fastsetter Kravet til reell arbeidssøker er relevant med utgangspunkt true",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Fastsetter Skal kravet til gjenopptak vurderes med utgangspunkt false",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Sjekker om alle Har satt frem skriftlig søknad, Ønsker dagpenger ved framsatt søknad er sanne",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Finner første virkedag etter Lovpålagt rapporteringsfrist for A-ordningen",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Beregner Inntektskrav for siste 12 måneder ved å gange Grunnbeløp med Antall G for krav til 12 mnd arbeidsinntekt",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Beregner Inntektskrav for siste 36 måneder ved å gange Grunnbeløp med Antall G for krav til 36 mnd arbeidsinntekt",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Fastsetter Minimum vanlig arbeidstid med utgangspunkt 18.75",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Fastsetter siste avsluttende kalendermåned hvor Prøvingsdato er etter Arbeidsgivers rapporteringsfrist",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Beregner Første måned av opptjeningsperiode ved å trekke fra Maks lengde på opptjeningsperiode måneder fra Siste avsluttende kalendermåned til første dag i måneden",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Regelkjøring: 21 regler kjørt, 12 mangler gjenstår",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Trenger ekstern informasjon: Inntektsopplysninger, Kan jobbe heltid og deltid, Kan jobbe i hele Norge, Kan ta alle typer arbeid, Villig til å bytte yrke, Ønsket arbeidstid, Registrert som arbeidssøker, Har rett til ordinære dagpenger gjennom arbeidsforhold, Bruker er permittert, Forskutterte lønnsgarantimidler i form av dagpenger, Permittert fra fiskeindustrien, Avtjent verneplikt",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "BEHOV",
        melding: "Trenger en opplysning (Inntekt)",
        detaljer: {
          "@utledetAv": [
            "019e50f2-e715-707c-9000-44619a62926a",
            "019e50f2-e729-7d79-abb9-16c836901de6",
            "019e50f2-e72b-797e-9e29-0a680acd3f49",
          ],
          behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
          opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
          Prøvingsdato: "2026-05-22",
          OpptjeningsperiodeFraOgMed: "2023-05-01",
          SisteAvsluttendeKalenderMåned: "2026-04-30",
        },
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "BEHOV",
        melding: "Trenger en opplysning (KanJobbeDeltid)",
        detaljer: {
          søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
          "@utledetAv": ["019e50f2-e352-7752-b7dc-5d028ecf7781"],
          behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
          opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
        },
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "BEHOV",
        melding: "Trenger en opplysning (KanJobbeHvorSomHelst)",
        detaljer: {
          søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
          "@utledetAv": ["019e50f2-e352-7752-b7dc-5d028ecf7781"],
          behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
          opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
        },
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "BEHOV",
        melding: "Trenger en opplysning (HelseTilAlleTyperJobb)",
        detaljer: {
          søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
          "@utledetAv": ["019e50f2-e352-7752-b7dc-5d028ecf7781"],
          behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
          opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
        },
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "BEHOV",
        melding: "Trenger en opplysning (VilligTilÅBytteYrke)",
        detaljer: {
          søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
          "@utledetAv": ["019e50f2-e352-7752-b7dc-5d028ecf7781"],
          behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
          opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
        },
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "BEHOV",
        melding: "Trenger en opplysning (ØnsketArbeidstid)",
        detaljer: {
          søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
          "@utledetAv": ["019e50f2-e352-7752-b7dc-5d028ecf7781"],
          behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
          opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
        },
        tidsstempel: "2026-05-22 20:29:16.723",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "BEHOV",
        melding: "Trenger en opplysning (RegistrertSomArbeidssøker)",
        detaljer: {
          "@utledetAv": ["019e50f2-e720-7b2c-9d6d-16faaa95f36d"],
          behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
          opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
          InnhentFraOgMed: "2026-05-22",
        },
        tidsstempel: "2026-05-22 20:29:16.724",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "BEHOV",
        melding: "Trenger en opplysning (Ordinær)",
        detaljer: {
          søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
          "@utledetAv": ["019e50f2-e352-7752-b7dc-5d028ecf7781"],
          behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
          opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
        },
        tidsstempel: "2026-05-22 20:29:16.724",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "BEHOV",
        melding: "Trenger en opplysning (Permittert)",
        detaljer: {
          søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
          "@utledetAv": ["019e50f2-e352-7752-b7dc-5d028ecf7781"],
          behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
          opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
        },
        tidsstempel: "2026-05-22 20:29:16.724",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "BEHOV",
        melding: "Trenger en opplysning (Lønnsgaranti)",
        detaljer: {
          søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
          "@utledetAv": ["019e50f2-e352-7752-b7dc-5d028ecf7781"],
          behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
          opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
        },
        tidsstempel: "2026-05-22 20:29:16.724",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "BEHOV",
        melding: "Trenger en opplysning (PermittertFiskeforedling)",
        detaljer: {
          søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
          "@utledetAv": ["019e50f2-e352-7752-b7dc-5d028ecf7781"],
          behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
          opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
        },
        tidsstempel: "2026-05-22 20:29:16.724",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "informasjonsinnhenting",
            },
          },
        ],
        alvorlighetsgrad: "BEHOV",
        melding: "Trenger en opplysning (Verneplikt)",
        detaljer: {
          søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
          "@utledetAv": ["019e50f2-e352-7752-b7dc-5d028ecf7781"],
          behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
          opplysninger: "Fødselsdato, ØnskerDagpengerFraDato",
        },
        tidsstempel: "2026-05-22 20:29:16.724",
      },
    ],
    "@id": "1cebaea2-7eda-4676-b416-24587324d7b6",
    "@opprettet": "2026-05-22T20:29:16.906316461",
    system_read_count: 1,
    system_participating_services: [
      {
        id: "1cebaea2-7eda-4676-b416-24587324d7b6",
        time: "2026-05-22T20:29:16.906316461",
        service: "dp-behandling",
      },
      {
        id: "1cebaea2-7eda-4676-b416-24587324d7b6",
        time: "2026-05-22T20:29:17.743365239",
        service: "dp-aktivitetslogg",
      },
    ],
  },
  {
    "@event_name": "aktivitetslogg",
    hendelse: {
      type: "AvklaringIkkeRelevantHendelse",
      meldingsreferanseId: "d0911645-59be-4bd7-9cf3-8dee954e4839",
    },
    ident: "23497345545",
    aktiviteter: [
      {
        kontekster: [
          {
            kontekstType: "AvklaringIkkeRelevantHendelse",
            kontekstMap: {
              kode: "HattLukkedeSakerSiste8Uker",
              ident: "23497345545",
              avklaringId: "019e50f2-e730-797b-929d-77400b89e6f7",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Avklaring HattLukkedeSakerSiste8Uker er ikke lenger relevant",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:17.755",
      },
    ],
    "@id": "a54985d5-fa87-4093-b51d-5c9542f715be",
    "@opprettet": "2026-05-22T20:29:17.807472692",
    system_read_count: 1,
    system_participating_services: [
      {
        id: "a54985d5-fa87-4093-b51d-5c9542f715be",
        time: "2026-05-22T20:29:17.807472692",
        service: "dp-behandling",
      },
      {
        id: "a54985d5-fa87-4093-b51d-5c9542f715be",
        time: "2026-05-22T20:29:18.49517047",
        service: "dp-aktivitetslogg",
      },
    ],
  },
  {
    "@event_name": "aktivitetslogg",
    hendelse: {
      type: "AvklaringIkkeRelevantHendelse",
      meldingsreferanseId: "bd8a850f-6ad7-4e9a-963c-d4b3119eb8a6",
    },
    ident: "23497345545",
    aktiviteter: [
      {
        kontekster: [
          {
            kontekstType: "AvklaringIkkeRelevantHendelse",
            kontekstMap: {
              kode: "MuligGjenopptak",
              ident: "23497345545",
              avklaringId: "019e50f2-e730-797b-929d-77400b89e6f9",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Avklaring MuligGjenopptak er ikke lenger relevant",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:18.049",
      },
    ],
    "@id": "d123ff22-c039-4224-8685-cda3f2344cc2",
    "@opprettet": "2026-05-22T20:29:18.100132815",
    system_read_count: 1,
    system_participating_services: [
      {
        id: "d123ff22-c039-4224-8685-cda3f2344cc2",
        time: "2026-05-22T20:29:18.100132815",
        service: "dp-behandling",
      },
      {
        id: "d123ff22-c039-4224-8685-cda3f2344cc2",
        time: "2026-05-22T20:29:18.967713466",
        service: "dp-aktivitetslogg",
      },
    ],
  },
  {
    "@event_name": "aktivitetslogg",
    hendelse: {
      type: "OpplysningSvarHendelse",
      meldingsreferanseId: "3c7519f0-532b-4833-8791-21f2fc42f95b",
    },
    ident: "23497345545",
    aktiviteter: [
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "mottok_svar",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Mottok svar på opplysning om Kan jobbe heltid og deltid",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.070",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "mottok_svar",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Mottok svar på opplysning om Kan jobbe i hele Norge",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.070",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "mottok_svar",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Mottok svar på opplysning om Kan ta alle typer arbeid",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.070",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "mottok_svar",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Mottok svar på opplysning om Villig til å bytte yrke",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.070",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "mottok_svar",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Mottok svar på opplysning om Ønsket arbeidstid",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.071",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "mottok_svar",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Mottok svar på opplysning om Har rett til ordinære dagpenger gjennom arbeidsforhold",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.071",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "mottok_svar",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Mottok svar på opplysning om Bruker er permittert",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.071",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "mottok_svar",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Mottok svar på opplysning om Forskutterte lønnsgarantimidler i form av dagpenger",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.071",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "mottok_svar",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Mottok svar på opplysning om Permittert fra fiskeindustrien",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.071",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "mottok_svar",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Mottok svar på opplysning om Avtjent verneplikt",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.071",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "mottok_svar",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Mottok svar på opplysning om Registrert som arbeidssøker",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.071",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "mottok_svar",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Mottok svar på opplysning om Inntektsopplysninger",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.071",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Filtrerer inntekter for Inntektsopplysninger med inntektsklasser ARBEIDSINNTEKT",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.090",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Fastsetter Det er godkjent at bruker kun søker deltidsarbeid med utgangspunkt false",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.090",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Fastsetter Det er godkjent at bruker kun søker arbeid lokalt med utgangspunkt false",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.090",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Fastsetter Har helsemessige begrensninger og kan ikke ta alle typer arbeid med utgangspunkt false",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.090",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Sjekker om minst en av Villig til å bytte yrke er sanne",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.090",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Sjekker om Ønsket arbeidstid er større enn eller lik Minimum vanlig arbeidstid",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.090",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Sjekker om Registrert som arbeidssøker er sann",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.090",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Sjekker at ingen av Har rett til ordinære dagpenger gjennom arbeidsforhold, Bruker er permittert, Forskutterte lønnsgarantimidler i form av dagpenger, Permittert fra fiskeindustrien er sanne",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.090",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Sjekker om Avtjent verneplikt er sann",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.090",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Sjekker om Avtjent verneplikt er sann",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.090",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Beregner Arbeidsinntekt siste 12 måneder ved å summere Første periode av inntekt Brutto arbeidsinntekt",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.090",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Beregner Arbeidsinntekt siste 36 måneder ved å summere Første, Andre, Tredje periode av inntekt Brutto arbeidsinntekt",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.090",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Sjekker om minst en av Kan jobbe heltid og deltid, Det er godkjent at bruker kun søker deltidsarbeid er sanne",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.091",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Sjekker om minst en av Kan jobbe i hele Norge, Det er godkjent at bruker kun søker arbeid lokalt er sanne",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.091",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Sjekker om minst en av Kan ta alle typer arbeid, Har helsemessige begrensninger og kan ikke ta alle typer arbeid er sanne",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.091",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Sjekker om minst en av Har rett til ordinære dagpenger gjennom arbeidsforhold, Har rett til ordinære dagpenger uten arbeidsforhold er sanne",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.091",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Sjekker om Arbeidsinntekt siste 12 måneder er større enn eller lik Inntektskrav for siste 12 måneder",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.091",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Sjekker om Arbeidsinntekt siste 36 måneder er større enn eller lik Inntektskrav for siste 36 måneder",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.091",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Sjekker om alle Villig til å jobbe minimum arbeidstid, Oppfyller kravet til heltid- og deltidsarbeid, Oppfyller kravet til mobilitet, Oppfyller kravet til å være arbeidsfør, Oppfyller kravet til å ta ethvert arbeid er sanne",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.091",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Sjekker om minst en av Ordinære dagpenger, Bruker er permittert, Forskutterte lønnsgarantimidler i form av dagpenger, Permittert fra fiskeindustrien er sanne",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.091",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding:
          "Sjekker om minst en av Arbeidsinntekt er over kravet for siste 12 måneder, Arbeidsinntekt er over kravet for siste 36 måneder er sanne",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.091",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "regelkjøring",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Regelkjøring: 21 regler kjørt, 0 mangler gjenstår",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.091",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "beslutning",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Har 4 aktive avklaringer, går til ForslagTilVedtak",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.336",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "beslutning",
            },
          },
          {
            kontekstType: "ForslagTilVedtak",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:19.336988469",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Tilstandsendring: UnderBehandling → ForslagTilVedtak",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.337",
      },
      {
        kontekster: [
          {
            kontekstType: "OpplysningSvarHendelse",
            kontekstMap: {
              ident: "23497345545",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              opplysninger:
                "HelseTilAlleTyperJobb, Inntekt, KanJobbeDeltid, KanJobbeHvorSomHelst, Lønnsgaranti, Ordinær, Permittert, PermittertFiskeforedling, RegistrertSomArbeidssøker, Verneplikt, VilligTilÅBytteYrke, ØnsketArbeidstid",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "UnderBehandling",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:15.750264",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "beslutning",
            },
          },
          {
            kontekstType: "ForslagTilVedtak",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:19.336988469",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Alle opplysninger mottatt, lager forslag til vedtak",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:19.338",
      },
    ],
    "@id": "2ff18e45-495e-4a96-8baf-ba9e43f75397",
    "@opprettet": "2026-05-22T20:29:19.974237256",
    system_read_count: 1,
    system_participating_services: [
      {
        id: "2ff18e45-495e-4a96-8baf-ba9e43f75397",
        time: "2026-05-22T20:29:19.974237256",
        service: "dp-behandling",
      },
      {
        id: "2ff18e45-495e-4a96-8baf-ba9e43f75397",
        time: "2026-05-22T20:29:20.02332564",
        service: "dp-aktivitetslogg",
      },
    ],
  },
  {
    "@event_name": "aktivitetslogg",
    hendelse: {
      type: "AvklaringIkkeRelevantHendelse",
      meldingsreferanseId: "a58613b3-6255-4d54-99aa-513e72858f5e",
    },
    ident: "23497345545",
    aktiviteter: [
      {
        kontekster: [
          {
            kontekstType: "AvklaringIkkeRelevantHendelse",
            kontekstMap: {
              kode: "EØSArbeid",
              ident: "23497345545",
              avklaringId: "019e50f2-f070-7b39-a5f8-44592bab9ade",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "ForslagTilVedtak",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:19.336988",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Avklaring EØSArbeid er ikke lenger relevant",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:20.240",
      },
      {
        kontekster: [
          {
            kontekstType: "AvklaringIkkeRelevantHendelse",
            kontekstMap: {
              kode: "EØSArbeid",
              ident: "23497345545",
              avklaringId: "019e50f2-f070-7b39-a5f8-44592bab9ade",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "ForslagTilVedtak",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:19.336988",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "beslutning",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Har 3 aktive avklaringer, går til ForslagTilVedtak",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:20.242",
      },
    ],
    "@id": "91675156-2f3e-462a-831c-ead76ec087ff",
    "@opprettet": "2026-05-22T20:29:20.303187439",
    system_read_count: 1,
    system_participating_services: [
      {
        id: "91675156-2f3e-462a-831c-ead76ec087ff",
        time: "2026-05-22T20:29:20.303187439",
        service: "dp-behandling",
      },
      {
        id: "91675156-2f3e-462a-831c-ead76ec087ff",
        time: "2026-05-22T20:29:20.732553848",
        service: "dp-aktivitetslogg",
      },
    ],
  },
  {
    "@event_name": "aktivitetslogg",
    hendelse: {
      type: "AvklaringIkkeRelevantHendelse",
      meldingsreferanseId: "ddadea56-ebf5-437f-96f5-61e8cc48bd47",
    },
    ident: "23497345545",
    aktiviteter: [
      {
        kontekster: [
          {
            kontekstType: "AvklaringIkkeRelevantHendelse",
            kontekstMap: {
              kode: "JobbetUtenforNorge",
              ident: "23497345545",
              avklaringId: "019e50f2-f070-7b39-a5f8-44592bab9ae4",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "ForslagTilVedtak",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:19.336988",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Avklaring JobbetUtenforNorge er ikke lenger relevant",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:20.488",
      },
      {
        kontekster: [
          {
            kontekstType: "AvklaringIkkeRelevantHendelse",
            kontekstMap: {
              kode: "JobbetUtenforNorge",
              ident: "23497345545",
              avklaringId: "019e50f2-f070-7b39-a5f8-44592bab9ae4",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "ForslagTilVedtak",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:19.336988",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "beslutning",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Har 2 aktive avklaringer, går til ForslagTilVedtak",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:20.489",
      },
    ],
    "@id": "5c949224-f83a-41d2-b655-256571f5cff6",
    "@opprettet": "2026-05-22T20:29:20.543154644",
    system_read_count: 1,
    system_participating_services: [
      {
        id: "5c949224-f83a-41d2-b655-256571f5cff6",
        time: "2026-05-22T20:29:20.543154644",
        service: "dp-behandling",
      },
      {
        id: "5c949224-f83a-41d2-b655-256571f5cff6",
        time: "2026-05-22T20:29:20.983556518",
        service: "dp-aktivitetslogg",
      },
    ],
  },
  {
    "@event_name": "aktivitetslogg",
    hendelse: {
      type: "AvklaringIkkeRelevantHendelse",
      meldingsreferanseId: "f1d32df7-db36-4425-be4f-1aa1e3ab8c35",
    },
    ident: "23497345545",
    aktiviteter: [
      {
        kontekster: [
          {
            kontekstType: "AvklaringIkkeRelevantHendelse",
            kontekstMap: {
              kode: "InntektNesteKalendermåned",
              ident: "23497345545",
              avklaringId: "019e50f2-f070-7b39-a5f8-44592bab9ae2",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "ForslagTilVedtak",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:19.336988",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Avklaring InntektNesteKalendermåned er ikke lenger relevant",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:20.695",
      },
      {
        kontekster: [
          {
            kontekstType: "AvklaringIkkeRelevantHendelse",
            kontekstMap: {
              kode: "InntektNesteKalendermåned",
              ident: "23497345545",
              avklaringId: "019e50f2-f070-7b39-a5f8-44592bab9ae2",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
            },
          },
          {
            kontekstType: "Person",
            kontekstMap: {
              ident: "23497345545",
            },
          },
          {
            kontekstType: "Behandling",
            kontekstMap: {
              søknadId: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
              gjelderDato: "2026-05-22",
              behandlingId: "019e50f2-e34e-75de-8693-f144bbc4ffb7",
              søknad_uuid: "78ded26e-b1e3-4072-b75f-a691cd8b88e2",
            },
          },
          {
            kontekstType: "ForslagTilVedtak",
            kontekstMap: {
              opprettet: "2026-05-22T20:29:19.336988",
            },
          },
          {
            kontekstType: "Fase",
            kontekstMap: {
              fase: "beslutning",
            },
          },
        ],
        alvorlighetsgrad: "INFO",
        melding: "Har 1 aktive avklaringer, går til ForslagTilVedtak",
        detaljer: {},
        tidsstempel: "2026-05-22 20:29:20.695",
      },
    ],
    "@id": "a2018621-b3e6-4668-a257-4f6fe2a61147",
    "@opprettet": "2026-05-22T20:29:20.757148599",
    system_read_count: 1,
    system_participating_services: [
      {
        id: "a2018621-b3e6-4668-a257-4f6fe2a61147",
        time: "2026-05-22T20:29:20.757148599",
        service: "dp-behandling",
      },
      {
        id: "a2018621-b3e6-4668-a257-4f6fe2a61147",
        time: "2026-05-22T20:29:21.019734762",
        service: "dp-aktivitetslogg",
      },
    ],
  },
];
