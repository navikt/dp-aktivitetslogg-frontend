"use client";

import React, { useContext, useState } from "react";
import { HStack, InternalHeader, Search, Spacer } from "@navikt/ds-react";
import styles from "@/components/header.module.css";
import { ApplicationContext } from "@/app/aktivitetslogg/application-context";

function Header() {
  const [ident, setIdent] = useState<string | undefined>(undefined);
  const { setIdentToSearchFor, fulltNavn } = useContext(ApplicationContext);

  const onClear = () => {
    setIdentToSearchFor(undefined);
  };
  return (
    <InternalHeader>
      <InternalHeader.Title as="h1">Aktivitetslogg</InternalHeader.Title>
      <HStack align={"center"} style={{ width: "100%", marginRight: "16px" }}>
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
      </HStack>
      <Spacer />
      <InternalHeader.User name={fulltNavn} />
    </InternalHeader>
  );
}

export default Header;
