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
import { HStack, Label, Select, TextField } from "@navikt/ds-react";
import _ from "lodash";
import { JSEncrypt } from "jsencrypt";

const client = new AktivitetsloggApi(
  new Configuration({ basePath: process.env.NEXT_PUBLIC_API_PATH }),
);

export default function AktivitetsloggContainer() {
  const [aktivitetslogger, setAktivitetslogger] = useState<Aktivitetslogg[]>(
    [],
  );
  const [lastSeen, setLastSeen] = useState<string | null>(null);

  const [totaltAntallAktiviteter, setTotaltAntallAktiviteter] = useState<
    number | undefined
  >(0);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filterIdent, setIdentFilter] = useState<string | undefined>(undefined);

  const [filterHendelse, setHendelseFilter] = useState("");
  const [publicKey, setPublicKey] = useState<string | undefined>(undefined);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIdentFilter(event.target.value);
  };
  const handleEventTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setHendelseFilter(event.target.value);
  };

  const hendelser = _.uniq(aktivitetslogger.map((item) => item.hendelse.type));

  useEffect(() => {
    setIsLoading(true);

    const enscrypt = new JSEncrypt();
    enscrypt.setPublicKey(
      `-----BEGIN PUBLIC KEY-----\n${publicKey}\n-----END PUBLIC KEY-----`,
    );
    const ident = filterIdent && enscrypt.encrypt(filterIdent);

    //}

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
  }, [lastSeen, filterIdent]);

  useEffect(() => {
    client.getKeys().then((value) => setPublicKey(value._public));
  }, [publicKey]);

  return (
    <>
      <form className={styles.form}>
        <HStack gap={"4"} align={"start"}>
          <TextField
            type="text"
            value={filterIdent}
            onChange={handleFilterChange}
            label="Filter på ident"
            size={"small"}
          />
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
          Antall aktiviteter i søk: {aktivitetslogger.length}
        </Label>
      </div>
      <AktivitetsloggTabell isLoading={isLoading} data={aktivitetslogger} />
    </>
  );
}
