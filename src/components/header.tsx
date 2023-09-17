"use client";

import React, { useContext, useEffect, useState } from "react";
import "@navikt/ds-css";
import {
  HStack,
  InternalHeader,
  Label,
  Search,
  Spacer,
} from "@navikt/ds-react";
import styles from "@/components/header.module.css";
import {
  ApplicationContext,
  client,
} from "@/app/aktivitetslogg/application-context";

function Header() {
  const [fulltNavn, setFulltNavn] = useState<string>("");
  const [ident, setIdent] = useState<string | undefined>(undefined);
  const { setIdentToSearchFor } = useContext(ApplicationContext);

  const [totaltAntallAktiviteter, setTotaltAntallAktiviteter] = useState<
    number | undefined
  >(0);

  useEffect(() => {
    fetch("/api/me")
      .then((value) => value.json())
      .then((value) => setFulltNavn(`${value.givenName} ${value.surname}`));

    client.getAntallAktiviteter().then((response) => {
      setTotaltAntallAktiviteter(response.antall);
    });
  }, []);

  const onClear = () => {
    setIdentToSearchFor(undefined);
  };
  return (
    <InternalHeader>
      <InternalHeader.Title as="h1">Aktivitetslogg</InternalHeader.Title>
      <HStack
        align={"center"}
        justify={"space-between"}
        style={{ width: "100%", marginRight: "16px" }}
      >
        <form
          className={styles.searchBox}
          onSubmit={(e) => {
            e.preventDefault();
            setIdentToSearchFor(ident);
          }}
        >
          <Search
            id="identInput"
            label="Ident søk"
            size="small"
            variant="simple"
            placeholder="Søk på ident"
            onChange={(e) => setIdent(e)}
            value={ident}
            onClear={onClear}
          />
        </form>
        <Label size={"small"}>
          Totalt antall aktiviteter: {totaltAntallAktiviteter}
        </Label>
      </HStack>
      <Spacer />
      <InternalHeader.User name={fulltNavn} />
    </InternalHeader>
  );
}

export default Header;
