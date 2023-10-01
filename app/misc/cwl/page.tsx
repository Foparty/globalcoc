import { cwlTrophies } from '@/data/cwlTrophies';
import { notFound } from 'next/navigation';

const getData = () => {
  const data = cwlTrophies;

  if (data) {
    return data;
  }
  return notFound();
};
export default function CWL() {
  const data = getData();

  return (
    <>
      {data.map((league) => (
        <p key={}>{league['bronze I']}</p>
      ))}
    </>
  );
}
