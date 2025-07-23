import Image from 'next/image'
import React from 'react'

export default function Photo() {
  return (
    <div className='w-full relative uppercase font-light'>
      <div className='absolute w-full top-16 left-0 text-center text-white z-10'>Photo Kiosk</div>
      <div className='fixed inset-0 bg-[url(/img/bg/bg_24.jpg)] bg-cover bg-center '>
        <div className='absolute inset-0 bg-black/80'></div>
      </div>
      <div className='relative w-full bg-white/0 z-10'>
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='grid grid-cols-2 place-items-start gap-10'>
              <div className='space-y-3'>
                <div className='text-8xl font-black'>
                  Photo Kiosk
                </div>
                <div className='text-3xl font-bold'>
                  성장하는 비즈니스를 위한 최적의 맞춤형 포토 키오스크 솔루션
                </div>
                <div className='text-lg'>
                  Quiosco는 창업 및 프랜차이즈 비즈니스를 운영하는 분들을 위해 특별한 포토 키오스크를 맞춤 제작합니다. 고객의 비전과 요구사항에 맞춰 소프트웨어부터 하드웨어, 디자인까지 완벽하게 커스터마이징하는 서비스로, 시장에 없던 당신만의 독창적인 브랜드 키오스크를 현실로 만들어 드립니다.
                </div>
              </div>
              <div className='bg-white/20 aspect-square w-full rounded-2xl flex justify-center items-center'>
                <img src="/img/asset/jenic.png" alt="" />
              </div>
            </div>
          </div> {/* end container */}
          <div className='absolute flex justify-center left-0 bottom-4 w-full'>
            <img src='/img/icon/scroll-down.gif' className='w-12 animate-bounce' />
          </div>
        </section>
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto text-4xl space-y-10 bg-black/0'>
            <div className='grid grid-cols-2 place-items-start gap-10'>
              <div className='bg-black aspect-square w-full rounded-2xl bg-[url(/img/asset/custom1.jpg)] bg-cover bg-center'>
              </div>
              <div className='space-y-3'>
                <div className='text-8xl font-black'>
                  customize
                </div>
                <div className='text-4xl font-bold'>
                  포토 키오스크 비즈니스를 위한 최적의 커스터마이징
                </div>
                <div className='text-lg'>
                  최고의 개발진이 모든 요구사항을 최고 수준으로 맞춤화하며, 기업 및 관공서의 복잡한 조건까지 완벽하게 충족하는 개발 역량을 보유하고 있습니다. Quiosco는 단기적 유행이 아닌 문화적 가치를 추구하며, 최신 트렌드와 이색적인 시스템, 독자적인 기술력으로 차별화된 경험을 제공합니다. 우리는 지속적인 발전을 통해 당신의 비즈니스에 완벽하게 들어맞는 포토부스 솔루션을 제시합니다.
                </div>
              </div>
            </div>
          </div> {/* end container */}
        </section>
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='text-6xl text-center space-y-10 uppercase bg-white/20 text-black p-16 rounded-2xl'>
              <div className='space-y-3 text-white'>
                <div className='text-8xl font-black'>
                  Key Features
                </div>
                <div className='text-2xl font-bold'>
                  Quiosco 솔루션의 핵심 기능
                </div>
              </div>
              <div className='grid grid-cols-2 gap-10'>
                <div className='overflow-hidden rounded-2xl bg-white'>
                  <img src="/img/asset/feature1.png" alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl bg-white'>
                  <img src="/img/asset/feature2.png" alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl bg-white'>
                  <img src="/img/asset/feature3.png" alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl bg-white'>
                  <img src="/img/asset/feature4.png" alt="" />
                </div>
              </div>
            </div>
          </div> {/* end container */}
        </section>
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='space-y-3'>
              <div className='text-8xl font-black'>
                Technologies
              </div>
              <div className='text-4xl font-bold'>
                최첨단 기술로 경험과 비즈니스를 혁신하는 Quiosco 솔루션
              </div>
            </div>
            <div className='text-xl space-y-10'>
              <div className='bg-black/0 h-64 rounded-2xl bg-cover bg-center bg-[url(/img/asset/tech_1.jpg)] relative overflow-hidden'>
                <div className='absolute inset-0 space-y-3 bg-black/60 flex items-end'>
                  <div className='p-10 space-y-4'>
                    <div className='text-4xl font-bold'>
                      AI 필터
                    </div>
                    <div>
                      다양한 AI 필터를 적용해 사진을 더욱 예술적으로 만듭니다. 그림 AI와 보정 AI를 활용, 다채로운 스타일과 효과로 창의적이고 독창적인 사진을 완성합니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-black/0 h-64 rounded-2xl bg-cover bg-center bg-[url(/img/asset/tech_2.jpg)] relative overflow-hidden'>
                <div className='absolute inset-0 space-y-3 bg-black/60 flex items-end'>
                  <div className='p-10 space-y-4'>
                    <div className='text-4xl font-bold'>
                      포토샵 연동
                    </div>
                    <div>
                      포토샵 API 및 ACTION을 연동하여 다양한 표현 기법을 활용할 수 있습니다. 고급 편집 기능으로 사진에 여러 효과, 필터, 조명 조절 등을 쉽게 적용합니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-black/0 h-64 rounded-2xl bg-cover bg-center bg-[url(/img/asset/tech_3.jpg)] relative overflow-hidden'>
                <div className='absolute inset-0 space-y-3 bg-black/60 flex items-end'>
                  <div className='p-10 space-y-4'>
                    <div className='text-4xl font-bold'>
                      음성 인식
                    </div>
                    <div>
                      음성 인식 기술을 활용하여 사용자들이 사진을 편리하게 촬영하도록 돕습니다. 음성 명령으로 간편하게 셀카를 찍거나 특정 기능을 활성화하여, 손을 사용하지 않고도 포토부스를 조작할 수 있습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-black/0 h-64 rounded-2xl bg-cover bg-center bg-[url(/img/asset/tech_4.jpg)] relative overflow-hidden'>
                <div className='absolute inset-0 space-y-3 bg-black/60 flex items-end'>
                  <div className='p-10 space-y-4'>
                    <div className='text-4xl font-bold'>
                      통계 및 매출 관리
                    </div>
                    <div>
                      스마트 관리 시스템을 도입, PC나 모바일을 통해 언제 어디서든 통계 및 매출을 편리하게 확인합니다. 실시간 업데이트되는 통계 자료와 매출 내역은 사업자가 효율적으로 관리하도록 지원합니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-black/0 h-64 rounded-2xl bg-cover bg-center bg-[url(/img/asset/tech_5.jpg)] relative overflow-hidden'>
                <div className='absolute inset-0 space-y-3 bg-black/60 flex items-end'>
                  <div className='p-10 space-y-4'>
                    <div className='text-4xl font-bold'>
                      원격 머신 관리
                    </div>
                    <div>
                      스마트 시스템으로 각 머신에 원격 접속하여 관리할 수 있습니다. 이를 통해 키오스크 작동 상태를 손쉽게 확인하고 필요한 조치를 취할 수 있습니다. 이는 운영 효율성을 높이고 장애 발생 시 빠른 대응을 가능하게 합니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* end container */}
        </section>
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='text-6xl text-center space-y-10 uppercase bg-white text-black p-16 rounded-2xl'>
              <div className='text-3xl font-semibold'>
                활용처
              </div>
              <div className='grid grid-cols-2 gap-10'>
                <div>
                  <img src="/img/asset/use1.png" alt="" />
                </div>
                <div>
                  <img src="/img/asset/use2.png" alt="" />
                </div>
                <div>
                  <img src="/img/asset/use3.png" alt="" />
                </div>
                <div>
                  <img src="/img/asset/use4.png" alt="" />
                </div>
              </div>
            </div>
          </div> {/* end container */}
        </section>
      </div>
    </div>
  )
}
