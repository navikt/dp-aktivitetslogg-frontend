"use client";

import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import AktivitetsloggTabell from "./aktivitetslogg-tabell";
import BehandlingTidslinje from "./behandling-tidslinje";
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
  ToggleGroup,
  VStack,
} from "@navikt/ds-react";
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
  const [visning, setVisning] = useState<"tabell" | "tidslinje">("tidslinje");

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

  const hendelser = [
    ...new Set(filtrerteAktiviteter.map((item) => item.hendelse.type)),
  ];
  const tjenester = [
    ...new Set(
      filtrerteAktiviteter
        .flatMap((aktivitet) =>
          aktivitet.systemParticipatingServices.map((value) => value.service),
        )
        .filter((value) => value !== "dp-aktivitetslogg"),
    ),
  ];

  useEffect(() => {
    const fetchData = async () => {
      if (!waitForLogs) {
        setIsLoading(true);
      }

      const params: GetAktivitetsloggRequest = {
        ident: ident,
        since: lastSeen,
        wait: waitForLogs,
        limit: 500,
      };

      try {
        const res = await client.getAktivitetslogg(params);
        if (waitForLogs) {
          setAktivitetslogger((prevState) => {
            const combined = [...res, ...prevState];
            const seen = new Set<string>();
            return combined.filter((item) => {
              if (seen.has(item.id)) return false;
              seen.add(item.id);
              return true;
            });
          });
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
        <VStack gap="space-16">
          <HStack gap="space-16" align={"end"} justify={"end"}>
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
          <HStack gap="space-16" align={"end"} justify={"end"}>
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
        gap="space-16"
        style={{ width: "100%", marginRight: "16px" }}
      >
        <Label size={"small"}>
          Antall aktiviteter i søk: {filtrerteAktiviteter.length}
        </Label>
      </VStack>
      <HStack gap="space-16" align="center" style={{ margin: "16px 0" }}>
        <ToggleGroup
          value={visning}
          onChange={(value) => setVisning(value as "tabell" | "tidslinje")}
          size="small"
        >
          <ToggleGroup.Item value="tidslinje">Tidslinje</ToggleGroup.Item>
          <ToggleGroup.Item value="tabell">Tabell</ToggleGroup.Item>
        </ToggleGroup>
      </HStack>
      {visning === "tabell" ? (
        <AktivitetsloggTabell
          isLoading={isLoading}
          data={filtrerteAktiviteter}
        />
      ) : (
        <BehandlingTidslinje data={filtrerteAktiviteter} />
      )}
    </>
  );
}
