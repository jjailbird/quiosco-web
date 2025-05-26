import Link from 'next/link'
import React from 'react'

export default function CopyInfo() {
  return (
    <div className='fixed bottom-16 left-16 space-y-3 z-20'>
      <div>
        <Link href={'/'}>
          <img src="/img/new-logo-w-horizon.png" alt="" className='w-20' />
        </Link>
      </div>
      <div>
        &copy; 2025 quiosco. All rights reserved.
      </div>
    </div>
  )
}
