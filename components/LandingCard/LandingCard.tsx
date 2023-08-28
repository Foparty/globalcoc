import { HomeCard } from '@/types/types';
import Link from 'next/link';

interface LandingCardProps {
  data: HomeCard;
}

export default function LandingCard({ data }: LandingCardProps) {
  return (
    <>
      <Link href={data.url}>
        <article
          className={
            'p-24 grayscale-[.4] hover:grayscale-0 rounded-xl shadow-xl aspect-video h-56 text-center border-4 border-amber-50'
          }
          style={{
            backgroundImage: `url(${data.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // filter: "grayscale(.6)",
          }}
        >
          <h2 className={'capitalize'}>{data.title}</h2>
        </article>
      </Link>
    </>
  );
}
