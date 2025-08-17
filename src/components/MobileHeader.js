'use client'

import useUiStore from '@/store/uiStore';
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

export default function MobileHeader() {
  // Zustand 스토어에서 openCanvas 액션을 가져옵니다.
  const { openCanvas } = useUiStore();
  return (
    <div className='fixed z-20 w-full flex justify-between items-center left-0 top-0 p-2 bg-black/50 backdrop-blur-lg'>
      <Link href={'/'} className='block xl:hidden'>
        <img src="/img/logo/new-logo-w-horizon.png" alt="" className='w-40' />
      </Link>
      <div onClick={openCanvas} className='cursor-pointer p-2 xl:hidden' aria-label="Open mobile menu">
        <Icon icon="ri:menu-3-line" width="30" height="30" color='white' />
      </div>
    </div>
  )
}
