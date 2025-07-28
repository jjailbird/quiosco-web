'use client'; // 클라이언트 컴포넌트로 선언
import Image from 'next/image'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay'; // Autoplay를 사용할 경우
import { Icon } from '@iconify/react';
// @import 'swiper/css/effect-fade'; // EffectFade를 사용할 경우
// @import 'swiper/css/navigation'; // Navigation을 사용할 경우
// @import 'swiper/css/pagination'; // Pagination을 사용할 경우

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
            <div className='space-y-3'>
              <div className='text-8xl font-black'>
                Use case
              </div>
              <div className='text-4xl font-bold'>
                Quiosco의 혁신적인 기술이 반영되는 비즈니스 케이스
              </div>
            </div>
            {/* Swiper 캐러셀 시작 */}
            <Swiper
              // 사용할 모듈들을 배열로 등록합니다.
              modules={[Autoplay]}
              // 자동 재생(Autoplay) 설정
              autoplay={{
                delay: 3000, // 3초마다 슬라이드 변경
                disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생 지속
              }}
              // modules={[Navigation, Pagination]} // 필요한 모듈을 여기에 추가
              spaceBetween={40} // 슬라이드 간 간격 (gap-10과 유사하게 40px로 설정)
              slidesPerView={3} // 한 번에 3개의 슬라이드 표시
              // navigation // 네비게이션 버튼 활성화 (필요시)
              // pagination={{ clickable: true }} // 페이지네이션 활성화 (필요시)
              loop={true} // 무한 루프 (필요시)

              // 애니메이션 속도 설정 (밀리초 단위)
              // 500ms = 0.5초 (기본값은 300ms)
              // 값을 늘리면 느려지고, 줄이면 빨라집니다.
              speed={800} // 예시: 0.8초 동안 슬라이드 전환

              // breakpoints를 사용하여 반응형으로 슬라이드 개수 조절 가능
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <div className='section-use-box bg-[url(/img/asset/photo-1.jpg)]'>
                  <div className='section-use-box-overlay'></div>
                  <div className='text-2xl font-semibold'>
                    전시, 공연
                  </div>
                  <div className='text-lg'>
                    방문객에게 특별한 추억을 제공하거나, 정보 안내 및 인증 서비스와 연계해 편의성을 높입니다.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section-use-box bg-[url(/img/asset/photo-2.jpg)]'>
                  <div className='section-use-box-overlay'></div>
                  <div className='text-2xl font-semibold'>
                    관공서
                  </div>
                  <div className='text-lg'>
                    민원인 편의를 위한 정보 안내, 증명사진 촬영, 또는 특정 인증 서비스와 연계하여 활용됩니다.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section-use-box bg-[url(/img/asset/photo-3.jpg)]'>
                  <div className='section-use-box-overlay'></div>
                  <div className='text-2xl font-semibold'>
                    네컷 사진관
                  </div>
                  <div className='text-lg'>
                    셀프 사진 촬영 경험을 제공하는 전문 매장입니다.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section-use-box bg-[url(/img/asset/photo-4.jpg)]'>
                  <div className='section-use-box-overlay'></div>
                  <div className='text-2xl font-semibold'>
                    이벤트 및 팝업 스토어
                  </div>
                  <div className='text-lg'>
                    브랜드 홍보, 방문객 참여 유도, 기념 촬영 등 일시적인 행사에서 활용됩니다.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section-use-box bg-[url(/img/asset/photo-5.jpg)]'>
                  <div className='section-use-box-overlay'></div>
                  <div className='text-2xl font-semibold'>
                    주문결제, 인증
                  </div>
                  <div className='text-lg'>
                    식음료 주문, 상품 구매, 본인 인증 등 무인화 서비스에 적용됩니다.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section-use-box bg-[url(/img/asset/photo-6.jpg)]'>
                  <div className='section-use-box-overlay'></div>
                  <div className='text-2xl font-semibold'>
                    테마파크 및 관광지
                  </div>
                  <div className='text-lg'>
                    방문 기념 사진 촬영, 캐릭터와의 합성 사진 등 즐거운 경험을 제공합니다.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section-use-box bg-[url(/img/asset/photo-7.jpg)]'>
                  <div className='section-use-box-overlay'></div>
                  <div className='text-2xl font-semibold'>
                    호텔 및 리조트
                  </div>
                  <div className='text-lg'>
                    숙박객을 위한 포토존, 기념품 판매, 체크인/아웃 보조 서비스로 활용됩니다.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section-use-box bg-[url(/img/asset/photo-8.jpg)]'>
                  <div className='section-use-box-overlay'></div>
                  <div className='text-2xl font-semibold'>
                    쇼핑몰 및 백화점
                  </div>
                  <div className='text-lg'>
                    방문 기념 사진 촬영, 캐릭터와의 합성 사진 등 즐거운 경험을 제공합니다.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section-use-box bg-[url(/img/asset/photo-9.jpg)]'>
                  <div className='section-use-box-overlay'></div>
                  <div className='text-2xl font-semibold'>
                    경기장 및 행사
                  </div>
                  <div className='text-lg'>
                    경기 관람 기념, 팬 참여 이벤트, 선수와의 합성 사진 등 팬 경험을 강화합니다.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section-use-box bg-[url(/img/asset/photo-10.jpg)]'>
                  <div className='section-use-box-overlay'></div>
                  <div className='text-2xl font-semibold'>
                    기업 행사 및 워크숍
                  </div>
                  <div className='text-lg'>
                    팀 빌딩 활동, 기념 사진 촬영, 기업 문화 홍보에 활용됩니다.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section-use-box bg-[url(/img/asset/photo-11.jpg)]'>
                  <div className='section-use-box-overlay'></div>
                  <div className='text-2xl font-semibold'>
                    학교 및 교육 기관
                  </div>
                  <div className='text-lg'>
                    졸업 기념, 행사 기록, 학생 활동 증명 사진 등에 사용됩니다.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section-use-box bg-[url(/img/asset/photo-12.jpg)]'>
                  <div className='section-use-box-overlay'></div>
                  <div className='text-2xl font-semibold'>
                    병원 및 의료기관
                  </div>
                  <div className='text-lg'>
                    방문객 편의를 위한 안내, 기념 촬영, 또는 특정 정보 제공에 활용될 수 있습니다.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section-use-box bg-[url(/img/asset/photo-13.jpg)]'>
                  <div className='section-use-box-overlay'></div>
                  <div className='text-2xl font-semibold'>
                    뷰티/패션 매장
                  </div>
                  <div className='text-lg'>
                    제품 착용 후 가상 체험, 스타일링 제안, 고객 맞춤형 사진 촬영 서비스에 활용됩니다.
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* Swiper 캐러셀 끝 */}
          </div>
        </section>
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='space-y-3 text-white'>
              <div className='text-8xl font-black'>
                Price
              </div>
              <div className='text-2xl font-bold'>
                가격정책
              </div>
            </div>
            <div className='grid grid-cols-3 gap-10'>
              <div className='aspect-[1/1.5] bg-white rounded-xl text-black p-8 space-y-5'>
                <div className='font-bold text-2xl flex justify-between'>
                  <div className='text-2xl'>starter</div>
                  <div></div>
                </div>
                <div className='text-sm font-semibold'>
                  신규 창업자, 소규모 비즈니스, 포토 키오스크 도입을 시도하는 고객
                </div>
                <div className='text-2xl flex items-baseline space-x-4'>
                  <div className='text-4xl font-semibold'>₩150,000 </div>
                  <div className='text-sm font-normal'>/month</div>
                </div>
                <ul className='text-sm font-bold space-y-2'>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>기본 포토 키오스크 기능</div>
                  </li>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>표준 템플릿 제공</div>
                  </li>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>QR 코드 기반 온라인 연동</div>
                  </li>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>기본 통계 및 매출 관리 (PC/모바일)</div>
                  </li>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>기본 기술 지원</div>
                  </li>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>제한적 소프트웨어 커스터마이징</div>
                  </li>
                </ul>
              </div>
              <div className='aspect-[1/1.5] bg-white rounded-xl text-black p-8 space-y-5'>
                <div className='font-bold text-2xl flex justify-between'>
                  <div className='text-2xl'>Pro</div>
                  <div className='text-sm text-green-500'>Popular</div>
                </div>
                <div className='text-sm font-semibold'>
                  신규 창업자, 소규모 비즈니스, 포토 키오스크 도입을 시도하는 고객
                </div>
                <div className='text-2xl flex items-baseline space-x-4'>
                  <div className='text-4xl font-semibold'>₩150,000 </div>
                  <div className='text-sm font-normal'>/month</div>
                </div>
                <ul className='text-sm font-bold space-y-2'>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>기본 포토 키오스크 기능</div>
                  </li>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>표준 템플릿 제공</div>
                  </li>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>QR 코드 기반 온라인 연동</div>
                  </li>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>기본 통계 및 매출 관리 (PC/모바일)</div>
                  </li>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>기본 기술 지원</div>
                  </li>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>제한적 소프트웨어 커스터마이징</div>
                  </li>
                </ul>
              </div>
              <div className='aspect-[1/1.5] bg-white rounded-xl text-black p-8 space-y-5'>
                <div className='font-bold text-2xl flex justify-between'>
                  <div className='text-2xl'>Enterprise</div>
                  <div></div>
                </div>
                <div className='text-sm font-semibold'>
                  신규 창업자, 소규모 비즈니스, 포토 키오스크 도입을 시도하는 고객
                </div>
                <div className='text-2xl flex items-baseline space-x-4'>
                  <div className='text-4xl font-semibold'>₩150,000 </div>
                  <div className='text-sm font-normal'>/month</div>
                </div>
                <ul className='text-sm font-bold space-y-2'>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>기본 포토 키오스크 기능</div>
                  </li>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>표준 템플릿 제공</div>
                  </li>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>QR 코드 기반 온라인 연동</div>
                  </li>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>기본 통계 및 매출 관리 (PC/모바일)</div>
                  </li>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>기본 기술 지원</div>
                  </li>
                  <li className='flex items-center gap-x-4'>
                    <Icon icon="pajamas:check" width="20" height="20" />
                    <div>제한적 소프트웨어 커스터마이징</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div >
  )
}
