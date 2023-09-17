"use client";
import type { NextPage } from "next";
import styles from "@/app/page.module.css";
import React, { useState } from "react";
import Header from "@/components/header";
import AktivitetsloggContainer from "@/components/aktivitetslogg";
import { ApplicationContextProvider } from "@/app/aktivitetslogg/application-context";

const AktivitetsloggPage: NextPage = ({}) => {
  const [identToSearch, setIdentToSearch] = useState<string | undefined>(
    undefined,
  );
  return (
    <main>
      <ApplicationContextProvider>
        <Header />
        <div className={styles.main}>
          <AktivitetsloggContainer />
        </div>
      </ApplicationContextProvider>
    </main>
  );
};

export default AktivitetsloggPage;
