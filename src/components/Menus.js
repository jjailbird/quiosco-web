import Link from 'next/link'
import React from 'react'

export default function Menus() {
  return (
    <ul className='fixed top-16 right-16 text-right space-y-3 uppercase z-20'>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/about'}>Quiosco</Link>
      </li>
      <li>
        <Link href={'/photo'}>Photo Kiosk</Link>
      </li>
      <li>
        <Link href={'/bespoke'}>Bespoke</Link>
      </li>
      <li>
        <Link href={'/contact'}>Contact</Link>
      </li>
    </ul>
  )
}
