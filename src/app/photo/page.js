import React from 'react'

export default function Photo() {
  return (
    <div className='w-full relative uppercase font-light'>
      <div className='absolute w-full top-16 left-0 text-center text-white z-10'>Photo Booth</div>
      <div className='fixed inset-0 bg-[url(/img/bg/bg_09.jpg)] bg-cover bg-center '>
        <div className='absolute inset-0 bg-black/90'></div>
      </div>
      <div className='relative w-full bg-white/0 z-10'>
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='text-6xl text-center space-y-4 uppercase bg-white text-black p-16 rounded-2xl'>
              <div className='flex text-left font-normal gap-12'>
                <div className='flex-none'>
                  <img className='w-[230px]' src="/img/logo/photobooth_logo_426.webp" alt="" />
                  {/* <div className='text-sm font-bold'>Quiosco PhotoBooth</div> */}
                </div>
                <div className='text-left space-y-5'>
                  <div className='text-3xl font-semibold'>
                    포토부스 비즈니스를 위한 최적의 커스터마이징
                  </div>
                  <div className='text-lg space-y-2'>
                    <p>
                      Quiosco 포토부스는 국내 소프트웨어 커스터마이징 시스템을 최초로 도입한 키오스크 브랜드입니다. 온오프라인 포토 키오스크 제조 시장에서 저희의 독보적인 기술력은 많은 관심을 받고 있습니다.
                    </p>
                    <p>
                      저희는 클라이언트가 원하는 시스템을 적극적으로 구현하는 데 특화되어 있습니다. 관련 분야 최고의 기술을 보유한 개발진이 모든 요구사항을 최고 수준으로 맞춤화합니다. 특히 기업 및 관공서의 복잡하고 까다로운 조건까지 완벽하게 충족시키는 맞춤형 상품 개발 역량을 자랑합니다.
                    </p>
                    <p>
                      Quiosco는 단기간의 유행을 넘어 하나의 문화로 자리매김하는 포토부스 경험을 지향합니다. 빠르게 변화하는 트렌드 속에서도 차별화된 특별함을 제공하며, 이색적인 아이템과 독자적인 시스템으로 타 키오스크와는 비교할 수 없는 최고의 기술력을 선보입니다. 우리는 끊임없이 발전하며, 당신의 비즈니스에 완벽하게 들어맞는 포토부스 솔루션을 제공할 것입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* end container */}
          <div className='absolute flex justify-center left-0 bottom-4 w-full'>
            <img src='/img/icon/scroll-down.gif' className='w-12 animate-bounce' />
          </div>
        </section>
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='text-6xl text-center space-y-10 uppercase bg-white text-black p-16 rounded-2xl'>
              <div className='text-3xl font-semibold'>
                포토부스 비즈니스 특징
              </div>
              <div className='grid grid-cols-2 gap-10'>
                <div>
                  <img src="/img/asset/feature1.png" alt="" />
                </div>
                <div>
                  <img src="/img/asset/feature2.png" alt="" />
                </div>
                <div>
                  <img src="/img/asset/feature3.png" alt="" />
                </div>
                <div>
                  <img src="/img/asset/feature4.png" alt="" />
                </div>
              </div>
            </div>
          </div> {/* end container */}
        </section>
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='text-6xl text-center space-y-10 uppercase bg-white text-black p-16 rounded-2xl'>
              <div className='text-3xl font-semibold'>
                포토부스 비즈니스 기술
              </div>
              <div className='grid grid-cols-3 gap-10'>
                <div>
                  <img src="/img/asset/feature_plus1.png" alt="" />
                </div>
                <div>
                  <img src="/img/asset/feature_plus2.png" alt="" />
                </div>
                <div>
                  <img src="/img/asset/feature_plus3.png" alt="" />
                </div>
                <div>
                  <img src="/img/asset/feature_plus4.png" alt="" />
                </div>
                <div>
                  <img src="/img/asset/feature_plus5.png" alt="" />
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
