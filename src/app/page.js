import Image from "next/image";


export default function Home() {
  return (
    <div className='w-full relative uppercase font-light'>
      <div className='fixed inset-0 bg-[url(/img/bg/bg_07.jpg)] bg-cover bg-center '>
        <div className='absolute inset-0 bg-black/70'></div>
      </div>
      <div className='relative w-full bg-white/0 z-10'>
        <section className='relative min-h-screen flex justify-center items-center'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='text-6xl text-center space-y-2'>
              <div>quiosco.</div>
              <div>
                Meet a New Experience
              </div>
              <div>
                With one Fingertip.
              </div>
            </div>
            <div className='text-2xl text-center space-y-1'>
              <div>
                당신만의 키오스크 브랜드를 위한 첫 시작, 키오스코의 손끝에서 현실이 됩니다.
              </div>
              <div>
                초기 부담 없이 아이디어를 현실로. 혁신적인 구독형 맞춤 제작으로 시장 선두까지 함께하세요.
              </div>
            </div>
            <div className='absolute flex justify-center left-0 bottom-4 w-full'>
              <img src='/img/icon/scroll-down.gif' className='w-12 animate-bounce' />
            </div>
          </div>
        </section>
        <section className='relative min-h-screen flex justify-center items-center'>
          <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
            <div className='text-6xl text-center space-y-2'>
              <div>KIOSK</div>
              <div className='text-4xl'>
                당신의 비즈니스를 움직이는 미래
              </div>
            </div>
            <div className='text-xl text-center'>
              <p>키오스크는 단순한 디지털 기기를 넘어섰습니다. </p>
              <p>이제 고객과의 접점을 혁신하고, 운영 효율을 극대화하며, 새로운 비즈니스 가치를 창출하는 핵심 솔루션입니다.</p>
              <p>직관적인 터치스크린 하나로 복잡한 업무를 처리하고, 24시간 고객을 응대하며, 데이터를 통해 비즈니스를 성장시키는 스마트한 미래.</p>
              <p>Quiosco는 바로 그 키오스크 기술로 당신의 독창적인 아이디어를 현실로 만들어줄 비즈니스 파트너입니다.</p>
            </div>
            <div className='aspect-[3/1] w-full bg-[url(/img/photo-booth4.jpg)] bg-cover bg-center rounded-2xl'>
            </div>
            <div className='flex justify-between items-stretch gap-8 text-center hidden'>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-10 space-y-6'>
                <h4 className='text-3xl'>포토 키오스크</h4>
                <div className='text-lg'>
                  단순한 사진 부스를 넘어섭니다. Quiosco의 최첨단 소프트웨어 기술(AI 뷰티 필터, 실시간 편집 등)과 결합된 하드웨어로, 사용자에게 잊지 못할 즐거움을 선사하는 동시에 당신의 브랜드를 각인시킵니다. 트렌디한 디자인부터 공간 활용성까지, 당신의 브랜드에 최적화된 포토 키오스크를 만나보세요.
                </div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-10 space-y-6'>
                <h4 className='text-3xl'>커스텀 키오스크</h4>
                <div className='text-lg'>
                  포토 키오스크를 넘어, 당신의 비즈니스에 필요한 모든 키오스크 솔루션을 구현합니다. 무인 주문, 정보 안내, 현장 등록 등 특정 목적에 맞춰 하드웨어와 소프트웨어를 완벽하게 비스포크(Bespoke) 제작합니다. Quiosco는 기획부터 개발, 제작, 설치까지 전 과정을 책임져, 당신의 비즈니스 효율을 극대화합니다.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative min-h-screen flex justify-center items-center'>
          <div className='container mx-auto space-y-10 bg-black/0'>
            <div className="bg-black/5 rounded-lg backdrop-blur-none w-full min-h-[500px]  flex flex-col justify-center items-center space-y-10">
              <div className='text-6xl text-center space-y-2'>
                <div>
                  WHY QUIOSCO?
                </div>
                <div className='text-4xl'>
                  QUIOSCO가 당신의 비즈니스를 특별하게 만드는 이유
                </div>
              </div>
              <div className='grid grid-cols-2 gap-10'>
                <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-10 space-y-5'>
                  <div className='text-2xl'>
                    1. 생산부터 사후관리까지, 빈틈없는 통합 서비스
                  </div>
                  <div>
                    포토 키오스크 생산부터 소프트웨어 개발, 설치, 그리고 사후 관리까지. QUIOSCO는 전 과정을 원스톱 통합 서비스로 제공하여, 고객 여러분은 비즈니스 성장에만 집중할 수 있도록 든든하게 지원합니다.
                  </div>
                </div>
                <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-10 space-y-5'>
                  <div className='text-2xl'>
                    2. 최신 기술을 담은 강력한 소프트웨어
                  </div>
                  <div>
                    AI 뷰티 필터 등 최신 기술로 사용자의 만족도를 높이고, 강력한 관리 프로그램으로 매장 운영 효율을 극대화합니다. QUIOSCO는 기술력으로 완성된 안정성과 편의성을 선사합니다.
                  </div>
                </div>
                <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-10 space-y-5'>
                  <div className='text-2xl'>
                    3. 브랜드별 차별화를 위한 맞춤 전략
                  </div>
                  <div>
                    획일적인 키오스크는 지양합니다. 고객사의 브랜드별 특성과 목표를 깊이 이해하고, 차별화된 전략 컨설팅과 맞춤형 서비스를 제공하여 여러분 브랜드의 경쟁력 강화를 돕습니다.
                  </div>
                </div>
                <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-10 space-y-5'>
                  <div className='text-2xl'>
                    4. 체계적인 지원 시스템으로 성공 견인
                  </div>
                  <div>
                    제품 설치부터 운영 교육, 신속한 기술 지원까지. Quiosco는 모든 과정을 아우르는 체계적인 지원 시스템을 갖춰, 고객 비즈니스의 원활한 운영과 지속 가능한 성장을 적극적으로 지원합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative min-h-screen flex justify-center items-center hidden'>
          <div className='container mx-auto  space-y-10 bg-black/0'>
            <div className="bg-black/5 rounded-lg backdrop-blur-none w-full min-h-[500px]  flex flex-col justify-center items-center">
              <div>
                Quiosco의 사업 분야<br /><br />
                Quiosco는 키오스크 소프트웨어 개발을 핵심 기반으로, 다양한 산업 분야에 맞춤형 무인 시스템 솔루션을 제공하며 디지털 전환을 선도합니다. 우리는 단순한 기계를 넘어, 고객의 비즈니스와 사용자 경험을 혁신하는 데 집중합니다.
                <br /><br />
                1. 포토 키오스크 솔루션<br />
                Quiosco의 가장 핵심적인 사업 영역으로, 창의성과 기술력을 집약한 프리미엄 포토 키오스크 시스템을 개발 및 공급합니다.
                <br />
                맞춤형 하드웨어 및 소프트웨어: 고객의 니즈와 브랜드 아이덴티티에 맞춰 키오스크 디자인, UI/UX, 기능(AI 뷰티 필터, 다양한 프레임/템플릿, SNS 공유 등)을 맞춤형으로 제작합니다.
                <br />
                다양한 설치 환경: 쇼핑몰 포토존, 테마파크, 전시회, 이벤트 공간, 카페, 무인 매장 등 고객이 원하는 모든 공간에 최적화된 포토 키오스크 솔루션을 제공합니다.
                <br />
                통합 서비스: 기획, 생산, 소프트웨어 개발, 설치, 운영 교육, 그리고 지속적인 사후 관리까지 원스톱 서비스 체계를 <br />구축하여 안정적인 운영을 지원합니다.
                <br /><br />
                2. 맞춤형 키오스크 및 무인 시스템 개발<br />
                포토 키오스크 전문성을 바탕으로, 다양한 산업 분야의 요구에 맞는 커스텀 무인 시스템 개발 역량을 제공합니다.
                <br />
                무인 결제 시스템: 리테일 매장, 식음료 매장 등에서 효율적인 주문 및 결제를 위한 사용자 친화적인 무인 결제 솔루션을 구축합니다.
                <br />
                테이블 오더 키오스크: 식당 및 카페의 생산성을 높이고 고객 편의를 극대화하는 직관적인 테이블 오더 시스템을 개발합니다.
                <br />
                디지털 전시/안내 키오스크: 박물관, 미술관, 갤러리, 공공기관 등에서 관람객에게 필요한 정보 제공 및 인터랙티브 경험을 위한 지능형 안내 시스템을 구현합니다.
                <br />
                산업 특화 키오스크: 특정 산업(예: 헬스케어, 물류)의 고유한 니즈를 충족시키는 특수 목적의 키오스크를 맞춤 개발합니다.
                <br /><br />
                3. 웹 및 소프트웨어 개발 컨설팅<br />
                키오스크 솔루션 개발을 통해 축적된 고도의 소프트웨어 개발 노하우와 UI/UX 전문성을 기반으로, 고객사의 디지털 전환을 위한 다양한 웹 및 소프트웨어 개발 서비스를 제공합니다.
                <br />
                반응형 웹사이트 및 웹 애플리케이션 개발: 기업 홈페이지, 서비스 플랫폼, 관리자 시스템 등 고객의 비즈니스 목적에 맞는 고품질 웹 솔루션을 기획, 설계 및 구현합니다.
                <br />
                UI/UX 전략 컨설팅: 사용자 경험을 최우선으로 고려한 UI/UX 디자인 및 전략 컨설팅을 통해 고객 서비스의 가치를 극대화합니다.
                <br />
                백엔드 시스템 구축 및 연동: 안정적인 데이터베이스(MariaDB/MySQL) 구축 및 기존 시스템과의 유연한 API 연동을 통해 효율적인 데이터 관리 환경을 조성합니다.
              </div>
            </div>
          </div>
        </section>
        <section className='relative min-h-screen flex justify-center items-center hidden'>
          <div className='container mx-auto  space-y-10 bg-black/0'>
            <div className="bg-black/5 rounded-lg backdrop-blur-none w-full min-h-[500px]  flex flex-col justify-center items-center">
              스와이프 갤러리
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
