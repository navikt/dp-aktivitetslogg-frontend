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

  useEffect(() => {
    const params: GetAktivitetsloggRequest = {};
    if (lastSeen != null) {
      params.since = lastSeen;
      params.wait = true;
    }
    client
      .getAktivitetslogg(params)
      .then((res) =>
        setAktivitetslogger((prevState) => [...res, ...prevState]),
      );
  }, [lastSeen]);

  useEffect(() => {
    if (aktivitetslogger.length > 0) {
      setLastSeen(aktivitetslogger[0].id!);
    }
  }, [aktivitetslogger]);

  return <AktivitetsloggTabell data={aktivitetslogger} />;
}
