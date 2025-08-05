import Link from 'next/link'
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
            <div className='text-center space-y-5'>
              <div>
                <div className='text-7xl font-black'>
                  DEVELOPMENT
                </div>
                <div className='text-2xl'>
                  당신의 비즈니스 아이디어를 현실로 만듭니다
                </div>
              </div>
              <div className='text-lg md:max-w-[80%] md:mx-auto'>
                <div>
                  키오스크부터 웹/앱, 시스템까지 다양한 개발 분야를 아우르는 독보적인 기술력으로, 어떤 아이디어든 완벽한 맞춤형 솔루션으로 구현해 드립니다. 기획부터 론칭 후 유지보수까지, Quiosco와 함께 비즈니스 혁신을 시작하세요.
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
            <div className='text-center space-y-5'>
              <div className='text-5xl font-black'>
                <div>
                  SERVICE
                </div>
              </div>
              <div className='text-xl'>
                <div>
                  다년간 쌓아온 노하우를 바탕으로, 귀하가 상상하는 모든 형태의 디지털 솔루션을 개발합니다.
                </div>
              </div>
            </div>
            <div className='max-w-[1000px] mx-auto'>
              <div className='grid grid-cols-2 place-items-start gap-10'>
                <div className='relative aspect-[1/1.1] bg-black w-full rounded-2xl bg-cover bg-center bg-[url(/img/asset/custom_web.jpg)] overflow-hidden'>
                  <div className='absolute inset-0 z-10 bg-black/80 text-white'>
                    <div className='p-10 space-y-10 h-full flex flex-col justify-between'>
                      <div>
                        <div className='text-4xl font-bold'>웹</div>
                        <div className='text-xl'>Web Development</div>
                      </div>
                      <div className='text-lg space-y-5'>
                        <div>
                          기업 홈페이지, 랜딩 페이지부터 복잡한 기능의 웹 서비스, 커머스(쇼핑몰)까지 모든 종류의 반응형 웹을 제작합니다.
                        </div>
                        <div>
                          서비스 운영에 필요한 백엔드 시스템, 관리자 페이지 개발을 통해 효율적인 비즈니스 관리를 지원합니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative aspect-[1/1.1] bg-white w-full rounded-2xl bg-cover bg-center bg-[url(/img/asset/custom_app.jpg)] overflow-hidden'>
                  <div className='absolute inset-0 z-10 bg-black/80 text-white'>
                    <div className='p-10 space-y-10 h-full flex flex-col justify-between'>
                      <div>
                        <div className='text-4xl font-bold'>모바일 앱</div>
                        <div className='text-xl'>Mobile App Development</div>
                      </div>
                      <div className='text-lg space-y-5'>
                        <div>
                          iOS와 Android의 네이티브 앱은 물론, 하나의 코드로 두 플랫폼에서 모두 구동되는 하이브리드 앱까지, 최적의 모바일 환경을 구축합니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative aspect-[1/1.1] bg-white w-full rounded-2xl bg-cover bg-center bg-[url(/img/asset/custom_software.jpg)] overflow-hidden'>
                  <div className='absolute inset-0 z-10 bg-black/80 text-white'>
                    <div className='p-10 space-y-10 h-full flex flex-col justify-between'>
                      <div>
                        <div className='text-4xl font-bold'>소프트웨어/시스템</div>
                        <div className='text-xl'>Software/System Development</div>
                      </div>
                      <div className='text-lg space-y-5'>
                        <div>
                          PC에서 실행되는 데스크톱 프로그램부터 하드웨어에 탑재되는 임베디드 시스템, 그리고 Quiosco의 전문 분야인 키오스크 솔루션까지 다양한 소프트웨어를 개발합니다.
                        </div>
                        <div>
                          서비스 운영에 필요한 백엔드 시스템, 관리자 페이지 개발을 통해 효율적인 비즈니스 관리를 지원합니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative aspect-[1/1.1] bg-white w-full rounded-2xl bg-cover bg-center bg-[url(/img/asset/custom_ai.jpg)] overflow-hidden'>
                  <div className='absolute inset-0 z-10 bg-black/80 text-white'>
                    <div className='p-10 space-y-10 h-full flex flex-col justify-between'>
                      <div>
                        <div className='text-4xl font-bold'>AI & 데이터 솔루션</div>
                        <div className='text-xl'>AI & DATA Solution</div>
                      </div>
                      <div className='text-lg space-y-5'>
                        <div>
                          AI 모델 개발, 데이터 분석, API 개발을 통해 비즈니스 경쟁력을 높이는 첨단 기술 도입을 지원합니다.
                        </div>
                        <div>
                          Quiosco가 가진 AI 이미지 처리 기술을 기반으로 고객 맞춤형 AI 솔루션을 제공합니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='text-center space-y-5'>
              <div className='text-5xl font-black'>
                <div>
                  PROCESS
                </div>
              </div>
              <div className='text-xl'>
                <div>
                  개발 프로세스
                </div>
              </div>
            </div>
            <div className='grid grid-cols-4 gap-10'>
              <div className='aspect-square w-full bg-white text-black rounded-2xl flex justify-center items-center'>
                <div className='text-center text-lg p-5 space-y-5'>
                  <div className='text-4xl font-black'>1.</div>
                  <div className='text-2xl font-bold'>
                    상담 및 기획
                  </div>
                  <div>
                    비즈니스 목표와 요구사항을 심도 깊게 논의하고, 최적의 개발 방향을 수립합니다.
                  </div>
                </div>
              </div>
              <div className='aspect-square w-full bg-white text-black rounded-2xl flex justify-center items-center'>
                <div className='text-center text-lg p-5 space-y-5'>
                  <div className='text-4xl font-black'>2.</div>
                  <div className='text-2xl font-bold'>
                    개발 및 디자인
                  </div>
                  <div>
                    확정된 기획을 기반으로 전문 개발자와 디자이너가 실질적인 솔루션을 구축합니다.
                  </div>
                </div>
              </div>
              <div className='aspect-square w-full bg-white text-black rounded-2xl flex justify-center items-center'>
                <div className='text-center text-lg p-5 space-y-5'>
                  <div className='text-4xl font-black'>3.</div>
                  <div className='text-2xl font-bold'>
                    테스트 및 검수
                  </div>
                  <div>
                    기능 테스트와 버그 수정 과정을 거쳐 완벽하게 동작하는 제품을 완성합니다.
                  </div>
                </div>
              </div>
              <div className='aspect-square w-full bg-white text-black rounded-2xl flex justify-center items-center'>
                <div className='text-center text-lg p-5 space-y-5'>
                  <div className='text-4xl font-black'>4.</div>
                  <div className='text-2xl font-bold'>
                    론칭 및 관리
                  </div>
                  <div>
                    솔루션을 성공적으로 론칭하고, 지속적인 업데이트와 유지보수로 안정성을 보장합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='text-center space-y-5'>
              <div className='text-5xl font-black'>
                <div>
                  Let's Connect
                </div>
              </div>
              <div className='text-xl'>
                <div>
                  당신의 아이디어를 들려주세요 어떤 프로젝트든 상관없습니다.
                </div>
                <div>
                  지금 바로 Quiosco의 전문가 팀에게 문의하세요.
                </div>
                <div>
                  당신의 비즈니스를 한 단계 더 성장시킬 맞춤형 솔루션을 경험하세요.
                </div>
              </div>
              <div>
                <Link href="/contact" className='bg-white text-black rounded-md p-3 text-lg font-semibold'>문의하기</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
