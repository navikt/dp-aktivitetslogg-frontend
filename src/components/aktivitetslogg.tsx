"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import AktivitetsloggTabell from "./aktivitetslogg-tabell";
import {
  Aktivitetslogg,
  AktivitetsloggApi,
  Configuration,
  GetAktivitetsloggRequest,
} from "@/lib/aktivitetslogg-api";
import styles from "@/components/aktivitetslogg-tabell.module.css";
import { HStack, Label, Select } from "@navikt/ds-react";
import _ from "lodash";

const client = new AktivitetsloggApi(
  new Configuration({ basePath: process.env.NEXT_PUBLIC_API_PATH }),
);

export default function AktivitetsloggContainer({
  identToSearchFor,
}: {
  identToSearchFor: string | undefined;
}) {
  const [aktivitetslogger, setAktivitetslogger] = useState<Aktivitetslogg[]>(
    [],
  );
  const [lastSeen, setLastSeen] = useState<string | null>(null);

  const [totaltAntallAktiviteter, setTotaltAntallAktiviteter] = useState<
    number | undefined
  >(0);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [filterHendelse, setHendelseFilter] = useState("");
  const [publicKey, setPublicKey] = useState<string | undefined>();
  const [filtrerteAktiviteter, setFiltrerteAktiviteter] = useState<
    Aktivitetslogg[]
  >([]);
  const handleEventTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setHendelseFilter(event.target.value);
  };

  const hendelser = _.uniq(aktivitetslogger.map((item) => item.hendelse.type));

  useEffect(() => {
    setIsLoading(true);

    const JSEncrypt = require("jsencrypt").default;

    const enscrypt = new JSEncrypt();
    enscrypt.setPublicKey(
      `-----BEGIN PUBLIC KEY-----\n${publicKey}\n-----END PUBLIC KEY-----`,
    );
    const ident = identToSearchFor && enscrypt.encrypt(identToSearchFor);

    const params: GetAktivitetsloggRequest = {
      ident: ident == false ? undefined : ident,
    };

    client.getAktivitetslogg(params).then((res) => {
      setAktivitetslogger(res);
      client.getAntallAktiviteter().then((response) => {
        setTotaltAntallAktiviteter(response.antall);
        setIsLoading(false);
      });
    });
  }, [lastSeen, identToSearchFor, publicKey]);

  useEffect(() => {
    client.getKeys().then((value) => setPublicKey(value._public));
  }, [publicKey]);

  useEffect(() => {
    setFiltrerteAktiviteter(
      aktivitetslogger.filter((value) => {
        if (filterHendelse === "") return true;
        return value.hendelse.type === filterHendelse;
      }),
    );
  }, [aktivitetslogger, filterHendelse]);
  return (
    <>
      <form className={styles.form}>
        <HStack gap={"4"} align={"start"}>
          <Select
            label={"Hendelsetype"}
            defaultValue={filterHendelse}
            onChange={handleEventTypeChange}
            size={"small"}
          >
            <option value="">Alle</option>
            {hendelser.map((hendelse) => (
              <option value={hendelse} key={hendelse}>
                {hendelse}
              </option>
            ))}
          </Select>
        </HStack>
      </form>
      <div className={styles.antallAktiviteter}>
        <Label size={"small"}>
          Totalt antall aktiviteter: {totaltAntallAktiviteter}
        </Label>
      </div>
      <div className={styles.antallAktiviteter}>
        <Label size={"small"}>
          Antall aktiviteter i søk: {filtrerteAktiviteter.length}
        </Label>
      </div>
      <AktivitetsloggTabell isLoading={isLoading} data={filtrerteAktiviteter} />
    </>
  );
}
