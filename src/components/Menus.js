import Link from 'next/link'
import React from 'react'

export default function Menus() {
  return (
    <ul className='fixed top-16 right-16 text-right space-y-3 uppercase z-20'>
      <li>
        <Link href={'/'}>quisco</Link>
      </li>
      <li>
        <Link href={'/about'}>about</Link>
      </li>
      <li>
        <Link href={'/photo-booth'}>photo booth</Link>
      </li>
      <li>
        <Link href={'/contact'}>contact</Link>
      </li>
    </ul>
  )
}
