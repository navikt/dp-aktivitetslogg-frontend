"use client";
import type { NextPage } from "next";
import styles from "@/app/page.module.css";
import React, { useState } from "react";
import Header from "@/components/header";
import AktivitetsloggContainer from "@/components/aktivitetslogg";

const AktivitetsloggPage: NextPage = ({}) => {
  const [identToSearch, setIdentToSearch] = useState<string | undefined>(
    undefined,
  );
  return (
    <main>
      <Header onSearchIdentChanged={setIdentToSearch} />
      <div className={styles.main}>
        <AktivitetsloggContainer identToSearchFor={identToSearch} />
      </div>
    </main>
  );
};

export default AktivitetsloggPage;
