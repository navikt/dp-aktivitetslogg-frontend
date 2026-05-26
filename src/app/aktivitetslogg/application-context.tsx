import { createContext, PropsWithChildren, useEffect, useState } from "react";

export interface IApplicationContext {
  identToSearchFor?: string;
  setIdentToSearchFor: (ident: string | undefined) => void;
  fulltNavn: string;
}

const defaultApplicationContext: IApplicationContext = {
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
  const [identToSearchFor, setIdentToSearchFor] = useState<string | undefined>(
    defaultApplicationContext.identToSearchFor,
  );
  const [fulltNavn, setFulltNavn] = useState<string>(
    defaultApplicationContext.fulltNavn,
  );

  useEffect(() => {
    fetch("/api/me")
      .then((value) => value.json())
      .then((value) => setFulltNavn(`${value.givenName} ${value.surname}`));
  }, []);

  return (
    <ApplicationContext.Provider
      value={{
        identToSearchFor,
        setIdentToSearchFor,
        fulltNavn,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
