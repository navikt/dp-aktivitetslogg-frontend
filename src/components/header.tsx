"use client";

import React, { useEffect, useState } from "react";
import "@navikt/ds-css";
import {
  HStack,
  InternalHeader,
  Label,
  Search,
  Spacer,
} from "@navikt/ds-react";
import styles from "@/components/header.module.css";
import { client } from "@/app/aktivitetslogg/application-context";

function Header({
  onSearchIdentChanged,
}: {
  onSearchIdentChanged: (ident: string | undefined) => void;
}) {
  const [fulltNavn, setFulltNavn] = useState<string>("");
  const [searchIdentInput, setSearchIdentInput] = useState<string | undefined>(
    undefined,
  );

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
    onSearchIdentChanged(undefined);
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
            onSearchIdentChanged(searchIdentInput);
          }}
        >
          <Search
            id="identInput"
            label="Ident søk"
            size="small"
            variant="simple"
            placeholder="Søk på ident"
            onChange={(e) => setSearchIdentInput(e)}
            value={searchIdentInput}
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
