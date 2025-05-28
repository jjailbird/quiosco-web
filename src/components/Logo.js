import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <div className='fixed top-16 left-16 z-20'>
      <Link href={'/'}>
        <img src="/img/logo/new-logo-w-thin.png" alt="" className='w-40' />
      </Link>
    </div>
  )
}
