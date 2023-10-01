import Button from '@/components/Button/Button';
import styles from './page.module.css';

export default function BuilderBase() {
  return (
    <>
      <main className={`${styles.page} w-full min-h-screen p-24`}>
        <h1 className={'text-center text-3xl'}>Builder Base</h1>
        <div className="w-full h-screen flex justify-center items-center">
          <Button>caca</Button>
        </div>
      </main>
    </>
  );
}
