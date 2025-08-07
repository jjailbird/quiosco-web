import React from 'react'

export default function Custom() {
  return (
    <div className='w-full relative uppercase font-light'>
      <div className='fixed inset-0 bg-[url(/img/bg/bg_11.jpg)] bg-cover bg-center '>
        <div className='absolute inset-0 bg-black/90'></div>
      </div>
      <div className='relative w-full bg-white/0 z-10'>
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-content-start gap-10'>
              <div>
                <div className='text-4xl lg:text-8xl font-black'>Contact</div>
              </div>
              <div className='text-xl lg:text-3xl space-y-5'>
                <div>
                  당신의 아이디어를 들려주세요. 함께 이야기를 나눌 준비가 되어 있습니다.
                </div>
                <div>
                  contact@quiosco.dev
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
