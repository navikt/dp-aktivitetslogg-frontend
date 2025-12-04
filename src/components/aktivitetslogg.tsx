"use client";

import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import AktivitetsloggTabell from "./aktivitetslogg-tabell";
import {
  Aktivitetslogg,
  GetAktivitetsloggRequest,
} from "@/lib/aktivitetslogg-api";
import styles from "@/components/aktivitetslogg-tabell.module.css";
import {
  Button,
  Checkbox,
  HStack,
  Label,
  Select,
  VStack,
} from "@navikt/ds-react";
import _ from "lodash";
import {
  ApplicationContext,
  IApplicationContext,
} from "@/app/aktivitetslogg/application-context";
import { client } from "@/lib/client";

export default function AktivitetsloggContainer() {
  const { encryptIdent, identToSearchFor } =
    useContext<IApplicationContext>(ApplicationContext);

  const ident = encryptIdent(identToSearchFor);

  const [aktivitetslogger, setAktivitetslogger] = useState<Aktivitetslogg[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filterHendelse, setHendelseFilter] = useState("");
  const [filterTjeneste, setTjenesteFilter] = useState("");
  const [waitForLogs, setWaitForLogs] = useState<boolean>(false);

  const lastSeen = useMemo(() => {
    if (waitForLogs && aktivitetslogger.length > 0) {
      return aktivitetslogger[0].id!;
    }
    return undefined;
  }, [waitForLogs, aktivitetslogger]);

  const filtrerteAktiviteter = useMemo(() => {
    return aktivitetslogger
      .filter((value) => {
        if (filterHendelse === "") return true;
        return value.hendelse.type === filterHendelse;
      })
      .filter((value) => {
        if (filterTjeneste === "") return true;
        const participatingServices = value.systemParticipatingServices.filter(
          (value1) => value1.service === filterTjeneste,
        );
        return participatingServices.length > 0;
      });
  }, [aktivitetslogger, filterHendelse, filterTjeneste]);

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
    const fetchData = async () => {
      if (!waitForLogs) {
        setIsLoading(true);
      }

      const params: GetAktivitetsloggRequest = {
        ident: ident,
        since: lastSeen,
        wait: waitForLogs,
      };

      try {
        const res = await client.getAktivitetslogg(params);
        if (waitForLogs) {
          setAktivitetslogger((prevState) =>
            _.uniqBy([...res, ...prevState], (value) => value.id),
          );
        } else {
          setAktivitetslogger(res);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lastSeen, ident, waitForLogs]);

  return (
    <>
      <form className={styles.form}>
        <VStack gap={"4"}>
          <HStack gap={"4"} align={"end"} justify={"end"}>
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
            <Checkbox
              size={"small"}
              onClick={() => setWaitForLogs(!waitForLogs)}
              value={waitForLogs}
            >
              Følg logg
            </Checkbox>
          </HStack>
          <HStack gap={"4"} align={"end"} justify={"end"}>
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
        </VStack>
      </form>
      <VStack
        justify={"end"}
        align={"end"}
        gap={"4"}
        style={{ width: "100%", marginRight: "16px" }}
      >
        <Label size={"small"}>
          Antall aktiviteter i søk: {filtrerteAktiviteter.length}
        </Label>
      </VStack>
      <AktivitetsloggTabell isLoading={isLoading} data={filtrerteAktiviteter} />
    </>
  );
}
