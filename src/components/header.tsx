"use client";

import React, { useEffect, useState } from "react";
import { InternalHeader, Spacer } from "@navikt/ds-react";

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
      <Spacer />
      <InternalHeader.User name={fulltNavn} />
    </InternalHeader>
  );
}

export default Header;
