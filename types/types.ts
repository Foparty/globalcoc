import { ReactNode } from 'react';

export interface HomeCard {
  id: number;
  title: string;
  url: string;
  img: string;
}

export interface Button {
  children: ReactNode;
}
