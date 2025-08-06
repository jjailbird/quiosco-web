import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <div className='fixed top-0 xl:top-16 left-0 xl:left-16 z-20 bg-black/50 backdrop-blur-lg xl:backdrop-blur-none xl:bg-transparent w-full'>
      <Link href={'/'} className='hidden xl:block'>
        <img src="/img/logo/new-logo-w-thin.png" alt="" className='w-40' />
      </Link>
      <div className='w-full flex justify-between items-center block xl:hidden p-5 xl:p-0'>
        <Link href={'/'}>
          <img src="/img/logo/new-logo-w-horizon.png" alt="" className='w-40' />
        </Link>
        <div>
          <Icon icon="ri:menu-3-line" width="30" height="30" color='white' />
        </div>
      </div>
    </div>
  )
}
