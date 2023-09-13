import type { NextPage } from "next";
import styles from "@/app/page.module.css";

// import dynamic from "next/dynamic";
// const AktivitetsloggContainer = dynamic(
//   () => import("../../components/aktivitetslogg"), // path of your component
//   { ssr: false },
// );
import React from "react";
import Header from "@/components/header";
import AktivitetsloggContainer from "@/components/aktivitetslogg";

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
