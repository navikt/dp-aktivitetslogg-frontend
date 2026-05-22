"use client";

import React, { useContext, useEffect, useState, useCallback } from "react";
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
  const [søkeResultat, setSøkeResultat] = useState<Aktivitetslogg[] | null>(
    null,
  );
  const [søker, setSøker] = useState(false);

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

  const søkBehandling = useCallback(async (behandlingId: string) => {
    setSøker(true);
    setSøkeResultat(null);
    try {
      const response = await fetch(
        `/api/aktivitetslogg/behandling/${behandlingId}`,
      );
      if (response.ok) {
        const data = await response.json();
        setSøkeResultat(data);
      } else {
        setSøkeResultat([]);
      }
    } catch {
      setSøkeResultat([]);
    } finally {
      setSøker(false);
    }
  }, []);

  const handleSøk = useCallback(
    (value: string) => {
      setSøk(value);
      const trimmed = value.trim();
      if (!trimmed) {
        setSøkeResultat(null);
        return;
      }
      if (UUID_REGEX.test(trimmed)) {
        søkBehandling(trimmed);
      } else {
        setSøkeResultat(null);
      }
    },
    [søkBehandling],
  );

  const visData = søkeResultat ?? aktivitetslogger;

  if (isLoading) {
    return <Loader size="xlarge" title="Henter aktivitetslogger…" />;
  }

  return (
    <VStack gap="space-8">
      <Search
        label="Søk på behandlingId (UUID)"
        size="small"
        variant="simple"
        placeholder="Lim inn behandlingId for å søke"
        value={søk}
        onChange={handleSøk}
        onClear={() => {
          setSøk("");
          setSøkeResultat(null);
        }}
      />
      {søker ? (
        <Loader size="medium" title="Søker…" />
      ) : visData.length === 0 ? (
        <BodyShort>
          {søkeResultat !== null
            ? "Ingen aktiviteter funnet for denne behandlingen."
            : "Ingen behandlinger å vise."}
        </BodyShort>
      ) : (
        <BehandlingTidslinje data={visData} />
      )}
    </VStack>
  );
}
