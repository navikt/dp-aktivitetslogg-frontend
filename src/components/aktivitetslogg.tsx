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
import { Button, HStack, Label, Select } from "@navikt/ds-react";
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

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [filterHendelse, setHendelseFilter] = useState("");
  const [filterTjeneste, setTjenesteFilter] = useState("");
  const [publicKey, setPublicKey] = useState<string | undefined>();
  const [filtrerteAktiviteter, setFiltrerteAktiviteter] = useState<
    Aktivitetslogg[]
  >([]);
  const onHendelseChanged = (event: ChangeEvent<HTMLSelectElement>): void => {
    setHendelseFilter(event.target.value);
  };

  const onTjenesteChanged = (event: ChangeEvent<HTMLSelectElement>): void => {
    setTjenesteFilter(event.target.value);
  };

  const hendelser = _.uniq(
    filtrerteAktiviteter.map((item) => item.hendelse.type),
  );
  const tjenester = _.uniq(
    filtrerteAktiviteter
      .flatMap((aktivitet) =>
        aktivitet.systemParticipatingServices.map((value) => value.service),
      )
      .filter((value) => value !== "dp-aktivitetslogg"),
  );

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
      setIsLoading(false);
    });
  }, [lastSeen, identToSearchFor, publicKey]);

  useEffect(() => {
    client.getKeys().then((value) => setPublicKey(value._public));
  }, [publicKey]);

  useEffect(() => {
    setFiltrerteAktiviteter(
      aktivitetslogger
        .filter((value) => {
          if (filterHendelse === "") return true;
          return value.hendelse.type === filterHendelse;
        })
        .filter((value) => {
          if (filterTjeneste === "") return true;
          const participatingServices =
            value.systemParticipatingServices.filter(
              (value1) => value1.service === filterTjeneste,
            );
          return participatingServices.length > 0;
        }),
    );
  }, [aktivitetslogger, filterHendelse, filterTjeneste]);

  return (
    <>
      <form className={styles.form}>
        <HStack gap={"4"} align={"end"} justify={"start"}>
          <Select
            label={"Hendelsetype"}
            defaultValue={filterHendelse}
            onChange={onHendelseChanged}
            size={"small"}
          >
            <option value="">Alle</option>
            {hendelser.map((hendelse) => (
              <option value={hendelse} key={hendelse}>
                {hendelse}
              </option>
            ))}
          </Select>
          <Select
            label={"Tjeneste"}
            defaultValue={filterHendelse}
            onChange={onTjenesteChanged}
            size={"small"}
          >
            <option value="">Alle</option>
            {tjenester.map((tjeneste) => (
              <option value={tjeneste} key={tjeneste}>
                {tjeneste}
              </option>
            ))}
          </Select>
          <Button
            size="small"
            variant="secondary-neutral"
            onClick={() => {
              setTjenesteFilter("");
              setHendelseFilter("");
            }}
          >
            Nullstill filter
          </Button>
        </HStack>
      </form>
      <div className={styles.antallAktiviteter}></div>
      <div className={styles.antallAktiviteter}>
        <Label size={"small"}>
          Antall aktiviteter i søk: {filtrerteAktiviteter.length}
        </Label>
      </div>
      <AktivitetsloggTabell isLoading={isLoading} data={filtrerteAktiviteter} />
    </>
  );
}
