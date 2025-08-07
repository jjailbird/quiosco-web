import Image from "next/image";

export default function About() {
  return (
    <div className='w-full relative uppercase font-light'>
      <div className='absolute w-full top-16 left-0 text-center text-white z-10'>About</div>
      <div className='fixed inset-0 bg-[url(/img/bg/bg_02.jpg)] bg-cover bg-center '>
        <div className='absolute inset-0 bg-black/70'></div>
      </div>
      <div className='relative w-full bg-white/0 z-10'>

        {/* Our Journey Section */}
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='text-6xl text-center space-y-6 uppercase'>
              <div className='flex justify-center'>
                <img src="/img/logo/new-logo-w-horizon.png" alt="" className='w-[60%] lg:w-auto' />
              </div>
              <div className='text-lg lg:text-2xl font-semibold'>
                <p>
                  Quiosco는 키오스크 소프트웨어 제작 및 브랜딩 컨설팅 전문 기업입니다.
                </p>
                <p>
                  포토부스, 무인 결제, 테이블 주문, 전시 홍보 안내 등 다양한 키오스크 소프트웨어를 개발 및 납품합니다.
                </p>
              </div>
              <div className='text-sm lg:text-lg text-center'>
                <p>키오스코는 단기간 유행이 아닌 문화 자체로 자리매김하며, 빠르게 변화하는 트렌드 속에서 차별화된 특별함을 제공합니다.</p>
                <p>
                  이색적인 아이템과 독자적인 시스템을 통해 다른 키오스크와 다르게 최고의 기술력으로 선보이며 발전하고 있습니다.
                </p>
                <p>
                  이색적인 아이템과 독자적인 시스템을 통해 다른 키오스크와는 다르게 최고의 기술력으로 선보이며 발전하고 있습니다.
                </p>
                <p>
                  편안하고 즐거운 경험을 통해 간편하게 사진을 즐길 수 있는 키오스크 문화의 선두주자로 함께 나아갑니다.
                </p>
              </div>
            </div>
          </div> {/* end container */}
          <div className='absolute flex justify-center left-0 bottom-4 w-full'>
            <img src='/img/icon/scroll-down.gif' className='w-12 animate-bounce' />
          </div>
        </section>

        {/* Our Journey Section */}
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='text-4xl lg:text-6xl text-center space-y-4 uppercase'>
              <div>Our Journey</div>
              <div className='text-xl lg:text-3xl font-semibold'>
                모든 아이디어를 현실로, 디지털 경험을 선사합니다.
              </div>
              <div className='text-lg lg:text-xl text-center space-y-2'>
                <p>우리는 복잡한 기술과 막대한 초기 투자 때문에 좌절되는 수많은 비즈니스 아이디어를 보며,</p>
                <p>누구나 혁신적인 키오스크 브랜드를 쉽게 시작하고 성공할 수 있는 길을 열고자 했습니다. </p>
                <p>
                  단순한 제품 공급자를 넘어, 파트너의 비전을 실현하는 기술 동반자가 되는 것이 Quiosco의 존재 이유입니다.
                </p>
              </div>
            </div>
          </div> {/* end container */}
        </section>

        {/* Our Core Competencies Section */}
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='text-4xl lg:text-6xl text-center space-y-4 uppercase'>
              <div>
                Our Core Competencies
              </div>
              <div className='text-xl lg:text-3xl font-semibold'>
                키오스크의 미래를 주도하는 핵심 기술 역량
              </div>
              <div className='text-lg lg:text-xl text-center space-y-2'>
                <p>우리는 새로운 기술을 빠르게 적용하고 시대의 트렌드에 맞춰가는 기술 역량 개발에 집중합니다.</p>
                <p>AI 뷰티 필터, 직관적인 UI/UX, 강력한 통합 관리 시스템 등 혁신적인 소프트웨어를 직접 개발하여 키오스크에 생명을 불어넣습니다.</p>
                <p>하드웨어 및 부스 제작은 각 분야 최고의 전문 파트너사와 긴밀한 협력을 통해 최고 품질을 보장합니다.</p>
                <p>이러한 소프트웨어 전문성과 강력한 파트너십을 기반으로, 당신의 키오스크 브랜드를 위한 완벽한 도급형 맞춤 제작 솔루션을 제공합니다.</p>
              </div>
            </div>
          </div> {/* end container */}
        </section>

        {/* Our Values Section */}
        <section className='relative min-h-screen flex justify-center items-center py-40'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='text-4xl lg:text-6xl text-center space-y-2 uppercase'>
              <div>Our Values</div>
              <div className='text-xl lg:text-3xl font-semibold'>
                Quiosco를 움직이는 핵심 가치들.
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-10 space-y-5'>
                <div>
                  <div className='text-4xl'>
                    Innovation
                  </div>
                  <div className='text-xl font-bold'>
                    혁신: 미래를 선도하는 기술
                  </div>
                </div>
                <div className='text-lg'>
                  끊임없는 연구 개발로 최신 기술 트렌드를 선도하며, 고객의 아이디어를 현실로 만드는 데 한계를 두지 않습니다.
                </div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-10 space-y-5'>
                <div>
                  <div className='text-4xl'>
                    Partnership
                  </div>
                  <div className='text-xl font-bold'>
                    파트너십: 성공을 위한 동반자
                  </div>
                </div>
                <div className='text-lg'>
                  우리는 단순한 공급자가 아닌, 고객의 성공을 최우선으로 생각하는 진정한 비즈니스 동반자입니다.
                </div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-10 space-y-5'>
                <div>
                  <div className='text-4xl'>
                    Expertise
                  </div>
                  <div className='text-xl font-bold'>
                    전문성: 압도적인 기술 역량
                  </div>
                </div>
                <div className='text-lg'>
                  소프트웨어 개발과 키오스크 솔루션 분야에서 축적된 깊이 있는 전문성으로 최고의 결과물을 약속합니다.
                </div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-10 space-y-5'>
                <div>
                  <div className='text-4xl'>
                    Trust
                  </div>
                  <div className='text-xl font-bold'>
                    신뢰: 투명한 관계의 약속
                  </div>
                </div>
                <div className='text-lg'>
                  투명한 소통과 책임감 있는 실행으로 고객과의 지속적인 신뢰 관계를 구축합니다.
                </div>
              </div>
            </div>
          </div> {/* end container */}
        </section>

        {/* Our Team Section (hidden) */}
        <section className='relative min-h-screen flex justify-center items-center py-40 hidden'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='text-4xl lg:text-6xl text-center space-y-2 uppercase'>
              <div>Our Team</div>
            </div>
            <div className='text-xl text-center space-y-10'>
              <div>
                Quiosco는 키오스크 산업과 소프트웨어 개발 분야에서 오랜 경험과 깊은 전문성을 갖춘 전문가들로 구성되어 있습니다. 각 분야의 최고들이 모여 당신의 비즈니스 아이디어를 현실로 만들기 위해 끊임없이 고민하고 혁신합니다.
              </div>
              <div className='grid grid-cols-2 gap-10'>
                <div className='aspect-square w-full bg-[url(/img/member1.jpg)] bg-cover bg-center rounded-2xl'>
                </div>
                <div className='aspect-square w-full bg-[url(/img/member2.jpg)] bg-cover bg-center rounded-2xl'>
                </div>
                <div className='aspect-square w-full bg-[url(/img/member3.jpg)] bg-cover bg-center rounded-2xl'>
                </div>
                <div className='aspect-square w-full bg-[url(/img/member4.jpg)] bg-cover bg-center rounded-2xl'>
                </div>
              </div>
            </div>
          </div> {/* end container */}
        </section>

        {/* Our Commitment Section */}
        <section className='relative min-h-screen flex justify-center items-center py-40 bg-black'>
          <div className='absolute inset-0 z-10 bg-black/80'></div>
          <div className='absolute inset-0 '>
            <video
              className='w-full h-full object-cover' // 화면 전체를 덮도록 설정
              autoPlay         // 자동 재생
              loop             // 반복 재생
              muted            // 음소거 (자동 재생을 위한 필수 조건)
              playsInline      // iOS에서 인라인 재생 허용
            >
              <source src='/vid/typing.mp4' type='video/mp4' />
              {/* 지원하지 않는 브라우저를 위한 대체 텍스트 */}
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='container mx-auto  text-4xl space-y-10 bg-black/0 z-20'>
            <div className='text-4xl lg:text-6xl text-center space-y-2 uppercase'>
              <div>Our Commitment</div>
              <div className='text-xl lg:text-3xl font-semibold uppercase'>
                당신의 성공을 향한 Quiosco의 약속.
              </div>
            </div>
            <div className='text-lg lg:text-xl text-center space-y-1'>
              <p>
                Quiosco는 당신의 키오스크 비즈니스 여정이 성공적일 수 있도록,
              </p>
              <p>초기 아이디어 구상부터 런칭, 그리고 지속적인 성장에 필요한 모든 지원을 아끼지 않을 것을 약속합니다.</p>
              <p>
                당신의 브랜드 가치를 극대화하고 시장을 선도하는 키오스크 솔루션, Quiosco와 함께 만들어가세요.
              </p>
            </div>
            <div className='text-center lowercase'>
              <p>
                contact@quiosco.dev
              </p>
            </div>
          </div> {/* end container */}
        </section>

      </div >
    </div >
  );
}