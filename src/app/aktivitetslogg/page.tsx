import type { NextPage } from "next";
import styles from "@/app/page.module.css";
import AktivitetsloggContainer from "../../components/aktivitetslogg";
import React from "react";
import Header from "@/components/header";

const AktivitetsloggPage: NextPage = ({}) => {
  return (
    <main>
      <Header />
      <div className={styles.main}>
        <AktivitetsloggContainer />
      </div>
    </main>
  );
};

export default AktivitetsloggPage;
