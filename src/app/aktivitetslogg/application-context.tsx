import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { AktivitetsloggApi, Configuration } from "@/lib/aktivitetslogg-api";

export interface IApplicationContext {
  encryptIdent: (ident: string | undefined) => string | undefined;
}

export const client = new AktivitetsloggApi(
  new Configuration({ basePath: process.env.NEXT_PUBLIC_API_PATH }),
);
export const ApplicationContext = createContext<IApplicationContext>({
  encryptIdent: (ident) => {
    return undefined;
  },
});

export const ApplicationContextProvider = ({
  children,
}: PropsWithChildren<{}>) => {
  const [publicKey, setPublicKey] = useState<string | undefined>(undefined);

  useEffect(() => {
    client.getKeys().then((value) => setPublicKey(value._public));
  }, []);

  const encryptIdent = (ident: string | undefined): string | undefined => {
    const JSEncrypt = require("jsencrypt").default;

    const enscrypt = new JSEncrypt();
    enscrypt.setPublicKey(
      `-----BEGIN PUBLIC KEY-----\n${publicKey}\n-----END PUBLIC KEY-----`,
    );
    const encryptedIdent = ident && enscrypt.encrypt(ident);

    return encryptedIdent === false ? undefined : encryptedIdent;
  };

  return (
    <ApplicationContext.Provider value={{ encryptIdent }}>
      {children}
    </ApplicationContext.Provider>
  );
};
