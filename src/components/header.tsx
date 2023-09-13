"use client";

import React, { useEffect, useState } from "react";
import "@navikt/ds-css";
import { InternalHeader, Search, Spacer } from "@navikt/ds-react";

function Header() {
  const [fulltNavn, setFulltNavn] = useState<string>("");

  useEffect(() => {
    fetch("/api/me")
      .then((value) => value.json())
      .then((value) => setFulltNavn(`${value.givenName} ${value.surname}`));
  }, []);

  return (
    <InternalHeader>
      <InternalHeader.Title as="h1">Aktivitetslogg</InternalHeader.Title>
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Search!");
        }}
      >
        <Search
          label="InternalHeader søk"
          size="small"
          variant="simple"
          placeholder="Søk"
        />
      </form>
      <Spacer />
      <InternalHeader.User name={fulltNavn} />
    </InternalHeader>
  );
}

export default Header;
