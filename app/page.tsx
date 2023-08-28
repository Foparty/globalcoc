import styles from "./page.module.css";
import { pages } from "@/data/data";
import LandingCard from "@/components/LandingCard/LandingCard";

export default function Home() {
  return (
    <main
      className={`${styles.container} flex min-h-screen flex-col items-center justify-center gap-12 py-24 px-10 font-['coc']`}
    >
      <h1 className={`${styles.title} text-2xl w-96 text-center`}>
        Welcome to the BEST Clash of Clans wiki site
      </h1>
      <section className={"w-full flex justify-center flex-wrap gap-8"}>
        {pages.map((item) => (
          <>
            <LandingCard data={item} />
          </>
        ))}
      </section>
    </main>
  );
}
