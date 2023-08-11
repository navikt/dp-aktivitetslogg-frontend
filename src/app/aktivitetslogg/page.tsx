import type { NextPage } from "next";
import styles from "@/app/page.module.css";
import AktivitetsloggContainer from "../../components/aktivitetslogg";

const AktivitetsloggPage: NextPage = ({}) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Aktivitetslogg</h1>
      <AktivitetsloggContainer />
    </main>
  );
};

export default AktivitetsloggPage;
