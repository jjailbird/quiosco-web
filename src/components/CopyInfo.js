import Link from 'next/link'
import React from 'react'

export default function CopyInfo() {
  return (
    <div className='fixed bottom-16 left-16 space-y-1 z-20'>
      <div className='uppercase'>
        &copy; 2025 quiosco.
      </div>
      <div>
        contact@quiosco.dev
      </div>
    </div>
  )
}
