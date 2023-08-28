import styles from "./page.module.css";

export default function BuilderBase() {
  return (
    <>
      <main className={`${styles.page} w-full min-h-screen p-24`}>
        <h1 className={"text-center text-3xl"}>Builder Base</h1>
      </main>
    </>
  );
}
