"use client";

import React, { createContext, useEffect, useState } from "react";
import "@navikt/ds-css";
import { InternalHeader, Search, Spacer } from "@navikt/ds-react";
import styles from "@/components/header.module.css";

export const SearchIdentContext = createContext<string | undefined>(undefined);

function Header({
  onSearchIdentChanged,
}: {
  onSearchIdentChanged: (ident: string | undefined) => void;
}) {
  const [fulltNavn, setFulltNavn] = useState<string>("");
  const [searchIdentInput, setSearchIdentInput] = useState<string | undefined>(
    undefined,
  );
  const [searchIdent, setSearchIdent] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch("/api/me")
      .then((value) => value.json())
      .then((value) => setFulltNavn(`${value.givenName} ${value.surname}`));
  }, []);

  const onClear = () => {
    onSearchIdentChanged(undefined);
  };
  return (
    <InternalHeader>
      <InternalHeader.Title as="h1">Aktivitetslogg</InternalHeader.Title>
      <SearchIdentContext.Provider value={searchIdent}>
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
      </SearchIdentContext.Provider>
      <Spacer />
      <InternalHeader.User name={fulltNavn} />
    </InternalHeader>
  );
}

export default Header;
