import styles from "./page.module.css";
import Header from "@/components/header/page";
import Main from "../components/main/page.js"


export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <p className={styles.main_section}></p>
      <Main></Main>
    </main>
  );
}
