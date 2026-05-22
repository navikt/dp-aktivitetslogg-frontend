import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { client } from "@/lib/client";

export interface IApplicationContext {
  encryptIdent: (ident: string | undefined) => string | undefined;
  identToSearchFor?: string;
  setIdentToSearchFor: (ident: string | undefined) => void;
  fulltNavn: string;
}

const defaultApplicationContext: IApplicationContext = {
  encryptIdent: (ident) => undefined,
  identToSearchFor: undefined,
  setIdentToSearchFor: (ident) => {},
  fulltNavn: "",
};

export const ApplicationContext = createContext<IApplicationContext>(
  defaultApplicationContext,
);

export const ApplicationContextProvider = ({
  children,
}: PropsWithChildren<{}>) => {
  const [publicKey, setPublicKey] = useState<string | undefined>(undefined);
  const [identToSearchFor, setIdentToSearchFor] = useState<string | undefined>(
    defaultApplicationContext.identToSearchFor,
  );
  const [fulltNavn, setFulltNavn] = useState<string>(
    defaultApplicationContext.fulltNavn,
  );

  useEffect(() => {
    client.getKeys().then((value) => setPublicKey(value._public));
  }, []);

  useEffect(() => {
    fetch("/api/me")
      .then((value) => value.json())
      .then((value) => setFulltNavn(`${value.givenName} ${value.surname}`));
  }, []);

  const encryptIdent = (ident: string | undefined): string | undefined => {
    const JSEncrypt = require("jsencrypt");

    const enscrypt = new JSEncrypt();
    enscrypt.setPublicKey(
      `-----BEGIN PUBLIC KEY-----\n${publicKey}\n-----END PUBLIC KEY-----`,
    );
    const encryptedIdent = ident && enscrypt.encrypt(ident);

    return encryptedIdent === false ? undefined : encryptedIdent;
  };

  return (
    <ApplicationContext.Provider
      value={{
        encryptIdent,
        identToSearchFor,
        setIdentToSearchFor,
        fulltNavn,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
