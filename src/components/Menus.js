'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Menus() {
  const pathname = usePathname(); // useRouter 훅 초기화

  // 현재 경로가 링크의 href와 일치하는지 확인하는 헬퍼 함수
  const isActive = (href) => pathname === href;

  return (
    <ul className='fixed top-16 right-16 text-right space-y-3 uppercase z-20'>
      {/* router.isReady가 true일 때만 pathname을 표시합니다. */}
      <li className='flex items-baseline justify-end space-x-2'>
        {/* isActive 함수 결과에 따라 div 조건부 렌더링 */}
        {isActive('/about') && <div className='w-3 h-[1px] bg-white'></div>}
        <Link href={'/about'}>About</Link>
      </li>
      <li className='flex items-baseline justify-end space-x-2'>
        {isActive('/photo') && <div className='w-3 h-[1px] bg-white'></div>}
        <Link href={'/photo'}>Photo Booth</Link>
      </li>
      <li className='flex items-baseline justify-end space-x-2'>
        {isActive('/custom') && <div className='w-3 h-[1px] bg-white'></div>}
        <Link href={'/custom'}>Custom Solutions</Link>
      </li>
      <li className='flex items-baseline justify-end space-x-2'>
        {isActive('/contact') && <div className='w-3 h-[1px] bg-white'></div>}
        <Link href={'/contact'}>Contact</Link>
      </li>
    </ul>
  );
}