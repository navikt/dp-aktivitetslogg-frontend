"use client";

import { useEffect, useState } from "react";
import AktivitetsloggTabell from "./aktivitetslogg-tabell";
import {
  Aktivitetslogg,
  AktivitetsloggApi,
  Configuration,
  GetAktivitetsloggRequest,
} from "@/lib/aktivitetslogg-api";

const client = new AktivitetsloggApi(
  new Configuration({ basePath: process.env.NEXT_PUBLIC_API_PATH }),
);

export default function AktivitetsloggContainer() {
  const [aktivitetslogger, setAktivitetslogger] = useState<Aktivitetslogg[]>(
    [],
  );
  const [lastSeen, setLastSeen] = useState<string | null>(null);

  const [antallAktiviteter, setAntallAktiviteter] = useState<
    number | undefined
  >(0);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const params: GetAktivitetsloggRequest = {};
    if (lastSeen != null) {
      params.since = lastSeen;
      params.wait = true;
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
    client.getAktivitetslogg(params).then((res) => {
      setAktivitetslogger((prevState) => [...res, ...prevState]);
    });
  }, [lastSeen]);

  useEffect(() => {
    if (aktivitetslogger.length > 0) {
      setLastSeen(aktivitetslogger[0].id!);
    }
  }, [aktivitetslogger]);

  useEffect(() => {
    client.getAntallAktiviteter().then((response) => {
      setAntallAktiviteter(response.antall);
    });
  }, []);

  return (
    <AktivitetsloggTabell
      isLoading={isLoading}
      data={aktivitetslogger}
      antallAktiviteter={antallAktiviteter}
    />
  );
}
