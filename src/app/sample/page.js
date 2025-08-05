import React from 'react'

export default function Custom() {
  return (
    <div className='w-full relative uppercase font-light'>
      <div className='absolute w-full top-16 left-0 text-center text-white z-10'>Custom Solutions</div>
      <div className='fixed inset-0 bg-[url(/img/bg/bg_11.jpg)] bg-cover bg-center '>
        <div className='absolute inset-0 bg-black/90'></div>
      </div>
      <div className='relative w-full bg-white/0 z-10'>
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='text-6xl text-center space-y-4 uppercase '>
              <div>Custom Solutions</div>
              {/* <div className='text-3xl font-semibold'>
                모든 아이디어를 현실로, 디지털 경험을 선사합니다.
              </div>
              <div className='text-xl text-center space-y-2'>
                <p>우리는 복잡한 기술과 막대한 초기 투자 때문에 좌절되는 수많은 비즈니스 아이디어를 보며,</p>
                <p>누구나 혁신적인 키오스크 브랜드를 쉽게 시작하고 성공할 수 있는 길을 열고자 했습니다. </p>
                <p>
                  단순한 제품 공급자를 넘어, 파트너의 비전을 실현하는 기술 동반자가 되는 것이 Quiosco의 존재 이유입니다.
                </p>
              </div> */}
            </div>
          </div> {/* end container */}
          <div className='absolute flex justify-center left-0 bottom-4 w-full'>
            <img src='/img/icon/scroll-down.gif' className='w-12 animate-bounce' />
          </div>
        </section>
      </div>
    </div>
  )
}
