import Image from "next/image";

export default function About() {
  return (
    <div className='w-full relative'>
      <div className='fixed inset-0 bg-[url(/img/bg/bg_02.jpg)] bg-cover bg-center '>
        <div className='absolute inset-0 bg-black/70'></div>
      </div>
      <div className='relative container mx-auto bg-white/0 z-10'>
        <section className='relative flex justify-center items-center text-4xl uppercase flex-col font-light min-h-screen space-y-10'>
          <div className='text-6xl text-center space-y-2 uppercase'>
            <div>Our Journey</div>
          </div>
          <div className='text-xl text-center space-y-1'>
            <div>
              Quiosco는 **'모든 아이디어가 현실이 되는 디지털 경험'**을 비전으로 시작되었습니다.
            </div>
            <div>우리는 복잡한 기술과 막대한 초기 투자 때문에 좌절되는 수많은 비즈니스 아이디어를 보며, 누구나 혁신적인 키오스크 브랜드를 쉽게 시작하고 성공할 수 있는 길을 열고자 했습니다. </div>
            <div>
              단순한 제품 공급자를 넘어, 파트너의 비전을 실현하는 기술 동반자가 되는 것이 Quiosco의 존재 이유입니다.
            </div>
          </div>
          <div className='absolute flex justify-center left-0 bottom-4 w-full'>
            <img src='/img/icon/scroll-down.gif' className='w-12 animate-bounce' />
          </div>
        </section>
        <section className='relative flex justify-center items-center text-4xl uppercase flex-col font-light min-h-screen space-y-10'>
          <div className='text-6xl text-center space-y-2 uppercase'>
            <div>Our Core Competencies</div>
          </div>
          <div className='text-xl text-center space-y-1'>
            <div>
              Quiosco의 핵심은 최첨단 소프트웨어 개발 역량에 있습니다.
            </div>
            <div>
              AI 뷰티 필터, 직관적인 UI/UX, 강력한 통합 관리 시스템 등 혁신적인 소프트웨어를 직접 개발하여 키오스크에 생명을 불어넣습니다.
            </div>
            <div>
              하드웨어 및 부스 제작은 각 분야 최고의 전문 파트너사와의 긴밀한 협력을 통해 최고 품질을 보장합니다.
            </div>
            <div>
              이러한 소프트웨어 전문성과 파트너십 기반의 도급형 OEM/ODM 모델을 통해, 우리는 당신의 키오스크 브랜드를 위한 완벽한 솔루션을 제공합니다.
            </div>
          </div>
        </section>
        <section className='relative flex justify-center items-center text-4xl uppercase flex-col font-light min-h-screen space-y-10'>
          <div className='text-6xl text-center space-y-2 uppercase'>
            <div>Our Values</div>
          </div>
          <div className='grid grid-cols-2 gap-10'>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-10 space-y-5'>
              <div className='text-4xl'>
                Innovation
              </div>
              <div className='text-lg'>
                끊임없는 연구 개발로 최신 기술 트렌드를 선도하며, 고객의 아이디어를 현실로 만드는 데 한계를 두지 않습니다.
              </div>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-10 space-y-5'>
              <div className='text-4xl'>
                Partnership
              </div>
              <div className='text-lg'>
                우리는 단순한 공급자가 아닌, 고객의 성공을 최우선으로 생각하는 진정한 비즈니스 동반자입니다.
              </div>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-10 space-y-5'>
              <div className='text-4xl'>
                Expertise
              </div>
              <div className='text-lg'>
                소프트웨어 개발과 키오스크 솔루션 분야에서 축적된 깊이 있는 전문성으로 최고의 결과물을 약속합니다.              </div>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-10 space-y-5'>
              <div className='text-4xl'>
                Trust
              </div>
              <div className='text-lg'>
                투명한 소통과 책임감 있는 실행으로 고객과의 지속적인 신뢰 관계를 구축합니다.
              </div>
            </div>
          </div>
        </section>
        <section className='relative flex justify-center items-center text-4xl uppercase flex-col font-light min-h-screen space-y-10'>
          <div className='text-6xl text-center space-y-2 uppercase'>
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
        </section>
        <section className='relative flex justify-center items-center text-4xl uppercase flex-col font-light min-h-screen space-y-10'>
          <div className='text-6xl text-center space-y-2 uppercase'>
            <div>Our Commitment</div>
          </div>
          <div className='text-xl text-center space-y-1'>
            <div>
              Quiosco는 당신의 키오스크 비즈니스 여정이 성공적일 수 있도록, 초기 아이디어 구상부터 런칭, 그리고 지속적인 성장에 필요한 모든 지원을 아끼지 않을 것을 약속합니다.
            </div>
            <div>
              당신의 브랜드 가치를 극대화하고 시장을 선도하는 키오스크 솔루션, Quiosco와 함께 만들어가세요.
            </div>
            <div>
              contact@quiosco.dev
            </div>
          </div>
        </section>
      </div >
    </div >

  );
}
