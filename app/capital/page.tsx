import styles from "./page.module.css";

export default function Capital() {
  return (
    <>
      <main className={`${styles.page} w-full min-h-screen p-24`}>
        <h1 className={"text-center text-3xl"}>Clan Capital</h1>
      </main>
    </>
  );
}
