import styles from './page.module.css';
import { ths, mainVillageSections } from '@/data/data';
import Link from 'next/link';
import Image from 'next/image';
import LandingCard from '@/components/LandingCard/LandingCard';
import { HomeCard } from '@/types/types';

export default function MainVillage() {
  return (
    <>
      <main
        className={`${styles.page} w-full min-h-screen p-24 flex flex-col justify-between`}
      >
        <h1 className={'text-center text-3xl'}>Main Village</h1>
        <section
          className={'mt-8 w-full h-full  flex gap-4 flex-wrap justify-center'}
        >
          {mainVillageSections.map((item) => (
            <LandingCard key={item.id} data={item} />
          ))}
        </section>
        <section
          className={'hidden md:flex w-full gap-2 flex-wrap justify-center'}
        >
          {ths.map((item) => (
            <Link href={item.url} key={item.id}>
              <Image
                className={'transition hover:scale-125'}
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
