'use client';

import useUiStore from '@/store/uiStore';
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  // Zustand 스토어에서 openCanvas 액션을 가져옵니다.
  const { openCanvas } = useUiStore();
  return (
    <div className='xl:fixed top-0 xl:top-16 left-0 xl:left-16 z-20 bg-black/50 backdrop-blur-lg xl:backdrop-blur-none xl:bg-transparent hidden xl:w-auto xl:block'>
      <Link href={'/'} className=' '>
        <img src="/img/logo/new-logo-w-thin.png" alt="" className='w-40' />
      </Link>
    </div>
  )
}
