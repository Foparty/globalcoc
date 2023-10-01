'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Menu.module.css';
import Link from 'next/link';
import { navigation } from '@/data/data';

export default function Menu() {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <>
      <nav
        style={{ fontFamily: 'coc' }}
        className={`w-72 md:w-96 fixed min-h-screen flex flex-col justify-center bg-[#444440] p-8 border-r-gray-950 border-r-[3px] ${
          activeMenu ? 'translate-x-0' : '-translate-x-72 md:-translate-x-96'
        } transition ${styles.menu} z-20`}
      >
        <header
          className={
            'absolute top-0 left-0 w-full bg-[#706c50] h-26 flex flex-col justify-center items-center'
          }
        >
          <Image
            src={'/logo.webp'}
            alt={'clash of clans logo'}
            width={150}
            height={48}
          />
        </header>
        <main className={'capitalize flex flex-col gap-8'}>
          {navigation.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              onClick={() => setActiveMenu(false)}
            >
              {link.title}
            </Link>
          ))}
        </main>
        <button
          className={`absolute ${
            activeMenu ? 'left-[97%]' : 'left-[100%]'
          } w-14 z-10`}
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <Image
            src={'/btn/side.png'}
            alt={'menu button'}
            width={96}
            height={208}
          />
        </button>
        <footer
          className={
            'absolute bottom-4 left-0 w-full bg-[#706c50] flex flex-col justify-center items-center text-center py-3 text-xs'
          }
        >
          <span>All right reserver &copy;</span>
          <Link href={'https://www.alfonsomartingarcia.com'} target={'_blank'}>
            Alfonso Martín
          </Link>
        </footer>
      </nav>
      {activeMenu && (
        <button
          onClick={() => setActiveMenu(false)}
          className={'absolute top-0 left-0 w-full h-screen z-10'}
        ></button>
      )}
    </>
  );
}
