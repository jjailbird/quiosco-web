import Link from 'next/link'
import React from 'react'

export default function CopyInfo() {
  return (
    <div className='relative xl:fixed xl:bottom-16 xl:left-16 text-white space-y-1 xl:z-20 bg-black xl:bg-transparent p-5 xl:p-0 w-full xl:w-auto'>
      <div className='uppercase'>
        &copy; 2025 quiosco.
      </div>
      <div>
        contact@quiosco.dev
      </div>
    </div>
  )
}
