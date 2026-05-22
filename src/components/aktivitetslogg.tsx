"use client";

import React, { useContext, useEffect, useState, useMemo } from "react";
import BehandlingTidslinje from "./behandling-tidslinje";
import {
  Aktivitetslogg,
  GetAktivitetsloggRequest,
} from "@/lib/aktivitetslogg-api";
import { BodyShort, Loader, Search, VStack } from "@navikt/ds-react";
import {
  ApplicationContext,
  IApplicationContext,
} from "@/app/aktivitetslogg/application-context";
import { client } from "@/lib/client";

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export default function AktivitetsloggContainer() {
  const { encryptIdent, identToSearchFor } =
    useContext<IApplicationContext>(ApplicationContext);

  const ident = encryptIdent(identToSearchFor);

  const [aktivitetslogger, setAktivitetslogger] = useState<Aktivitetslogg[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [søk, setSøk] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const params: GetAktivitetsloggRequest = {
          ident: ident,
          limit: 500,
        };
        const res = await client.getAktivitetslogg(params);
        setAktivitetslogger(res);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [ident]);

  const søkTrim = søk.trim().toLowerCase();

  const filtrertData = useMemo(() => {
    if (!søkTrim) return aktivitetslogger;

    if (UUID_REGEX.test(søkTrim)) {
      // Søk på behandlingId — filtrer aktiviteter som har denne i kontekst
      return aktivitetslogger
        .map((logg) => ({
          ...logg,
          aktiviteter: logg.aktiviteter.filter((a) =>
            a.kontekster.some(
              (k) => k.kontekstMap["behandlingId"]?.toLowerCase() === søkTrim,
            ),
          ),
        }))
        .filter((logg) => logg.aktiviteter.length > 0);
    }

    // Søk på logg-ID
    return aktivitetslogger.filter((logg) =>
      logg.id.toLowerCase().includes(søkTrim),
    );
  }, [aktivitetslogger, søkTrim]);

  if (isLoading) {
    return <Loader size="xlarge" title="Henter aktivitetslogger…" />;
  }

  return (
    <VStack gap="space-8">
      <Search
        label="Søk på behandlingId eller logg-ID"
        size="small"
        variant="simple"
        placeholder="Søk på behandlingId eller logg-ID"
        value={søk}
        onChange={setSøk}
        onClear={() => setSøk("")}
      />
      {filtrertData.length === 0 ? (
        <BodyShort>Ingen behandlinger å vise.</BodyShort>
      ) : (
        <BehandlingTidslinje data={filtrertData} />
      )}
    </VStack>
  );
}
