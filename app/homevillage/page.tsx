import styles from "./page.module.css";
import { ths } from "@/data/data";
import Link from "next/link";
import Image from "next/image";

export default function MainVillage() {
  return (
    <>
      <main
        className={`${styles.page} w-full min-h-screen p-24 flex flex-col justify-between`}
      >
        <h1 className={"text-center text-3xl"}>Main Village</h1>
        <section className={"w-full border-2 min-h-24"}></section>
        <section
          className={"hidden md:flex w-full gap-2 flex-wrap justify-center"}
        >
          {ths.map((item) => (
            <Link href={item.url} key={item.id}>
              <Image
                className={"transition hover:scale-125"}
                src={item.img}
                alt={`${item.title} image png no background`}
                width={90}
                height={90}
              />
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
