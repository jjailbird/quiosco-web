'use client';

import Link from 'next/link';
import React from 'react';
import menus from '@/data/menus';
import { Icon } from '@iconify/react';
// 상태 관리 스토어를 불러옵니다.
import useUiStore from '@/store/uiStore';

export default function Canvas() {
  // Zustand 스토어에서 isCanvasOpen 상태와 closeCanvas 액션을 가져옵니다.
  const { isCanvasOpen, closeCanvas } = useUiStore();

  return (
    // isCanvasOpen 상태에 따라 컴포넌트의 표시 여부를 결정합니다.
    // Tailwind CSS의 hidden 클래스를 사용하면 렌더링 자체를 하지 않습니다.
    // 하지만 가시성만 조절하려면 opacitiy, translate 등을 활용한 트랜지션 효과를 주는 것이 더 좋습니다.
    <div
      className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-2xl flex justify-center items-center transform transition-transform duration-500 ease-in-out ${isCanvasOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <ul className='text-center text-2xl uppercase font-black space-y-6'>
        {/* 닫기 버튼에 onClick 이벤트를 추가하여 closeCanvas 함수를 호출합니다. */}
        <li className='flex justify-center mb-14'>
          <button onClick={closeCanvas} aria-label="Close menu">
            <Icon icon="icon-park-solid:close-one" width="40" height="40" color='white' />
          </button>
        </li>
        <li>
          {/* 메뉴를 닫는 기능을 Link에도 추가하는 것이 사용자 경험에 좋습니다. */}
          <Link href='/' onClick={closeCanvas}>Home</Link>
        </li>
        {menus.map((menu) => (
          <li key={menu.href}>
            <Link
              href={menu.href}
              className='hover:text-gray-400 transition-colors duration-200'
              // 메뉴를 클릭하면 메뉴가 자동으로 닫히도록 closeCanvas 함수를 추가합니다.
              onClick={closeCanvas}
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}