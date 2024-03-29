/* eslint-disable jsx-a11y/alt-text */
"use client"

// SwiperTerreno.tsx
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import { IoLocationSharp } from 'react-icons/io5';
import { IoBed } from 'react-icons/io5';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { TerrenosS } from '@/types/TerrenosS';
import { getTerreno } from '@/sanity/sanity-utils';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';


interface SwiperTerrenoProps {
  slug: string;
}

export default function SwiperTerreno({ slug }: SwiperTerrenoProps) {
  const [terreno, setTerreno] = useState<TerrenosS | null>(null);

  useEffect(() => {
    const fetchTerreno = async () => {
      try {
        const fetchedTerreno = await getTerreno(slug);
        setTerreno(fetchedTerreno);
      } catch (error) {
        console.error('Error fetching terreno in SwiperTerreno:', error);
      }
    };

    fetchTerreno();
  }, [slug]);

  if (!terreno) {
    return <div className="w-full h-full">Loading...</div>;
  }

  const slides: JSX.Element[] = [];

  for (let index = 1; index <= 6; index++) {
    const imagenKey = `imagen_${index}` as keyof TerrenosS;

    if (terreno[imagenKey]) {
      slides.push(
        <SwiperSlide key={index} className="grid">
          <div className="flex w-full h-full">
            <div className="w-full h-full">
              <Image
                src={terreno[imagenKey] as string}
                height={650}
                width={650}
                alt={terreno[imagenKey] as string}
                layout={'cover'}
                objectFit={'cover'}
                className="w-full h-full cursor-grab no-select"
              />
            </div>
          </div>
        </SwiperSlide>
      );
    }
  }

  return (
    <Swiper
      direction={'vertical'}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="swiperPagColor2 grid"
    >
      {slides}
    </Swiper>
  );
}