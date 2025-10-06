'use client'; // 클라이언트 컴포넌트로 선언
import Image from 'next/image'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay'; // Autoplay를 사용할 경우
import { Icon } from '@iconify/react';
import PriceKiosk from '@/components/price/PriceKiosk';
// @import 'swiper/css/effect-fade'; // EffectFade를 사용할 경우
// @import 'swiper/css/navigation'; // Navigation을 사용할 경우
// @import 'swiper/css/pagination'; // Pagination을 사용할 경우

export default function PricePage() {
  return (
    <div className='w-full relative uppercase font-light'>
      <div className='absolute w-full top-16 left-0 text-center text-white z-10'>Price</div>
      <div className='fixed inset-0 bg-[url(/img/bg/bg_24.jpg)] bg-cover bg-center '>
        <div className='absolute inset-0 bg-black/80'></div>
      </div>
      <div className='relative w-full bg-white/0 z-10'>
        <PriceKiosk />
      </div>
    </div >
  )
}
