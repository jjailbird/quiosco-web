'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
// 메뉴 데이터 파일을 불러옵니다.
import menus from '@/data/menus';
import useUiStore from '@/store/uiStore';
import { Icon } from '@iconify/react';

export default function Menus() {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <>
      <ul className='fixed top-16 right-16 text-right space-y-3 uppercase z-20 hidden xl:block'>
        {/* map 메서드를 사용해 메뉴 데이터를 반복 렌더링합니다. */}
        {menus.map((menu) => (
          <li key={menu.href} className='flex items-baseline justify-end space-x-2'>
            {isActive(menu.href) && <div className='w-3 h-[1px] bg-white animate-pulse'></div>}
            <Link href={menu.href}>{menu.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}