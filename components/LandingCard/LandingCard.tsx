import { HomeCard } from '@/types/types';
import Link from 'next/link';

interface LandingCardProps {
  data: HomeCard;
}

export default function LandingCard({ data }: LandingCardProps) {
  return (
    <>
      <Link
        href={data.url}
        className={'h-72 grayscale-[.4] hover:grayscale-0  shadow-xl'}
        style={{ aspectRatio: '4 / 3' }}
      >
        <article
          className="h-72 flex justify-center items-center rounded-xl border-4 border-amber-50"
          style={{
            backgroundImage: `url(${data.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2 className={'capitalize'}>{data.title}</h2>
        </article>
      </Link>
    </>
  );
}
