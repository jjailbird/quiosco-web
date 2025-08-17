import { Icon } from '@iconify/react'
import React, { useState } from 'react'

export default function Price() {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePricing = () => {
    setIsMonthly(!isMonthly);
  };

  const starterPrice = isMonthly ? '₩150,000' : '₩130,000';
  const proPrice = isMonthly ? '₩250,000' : '₩220,000'; // 예시로 연간 가격을 임의로 설정했습니다.
  const priceUnit = isMonthly ? '/ month' : '/ year';

  const pricingPlans = [
    {
      name: 'Starter',
      description: '신규 창업자, 소규모 비즈니스, 포토 키오스크 도입을 시도하는 고객',
      price: starterPrice,
      unit: priceUnit,
      features: [
        '기본 포토 키오스크 기능',
        '표준 템플릿 제공',
        'QR 코드 기반 온라인 연동',
        '기본 통계 및 매출 관리 (PC/모바일)',
        '기본 기술 지원',
        '제한적 소프트웨어 커스터마이징',
      ],
      isPopular: false,
    },
    {
      name: 'Pro',
      description: '확장 계획이 있는 프랜차이즈, 중소기업, 다양한 기능 활용이 필요한 고객',
      price: proPrice,
      unit: priceUnit,
      features: [
        'Starter의 모든 기능 포함',
        'AI 필터, 포토샵 연동 기능',
        '향상된 통계 및 매출 관리',
        '원격 머신 관리',
        '프리미엄 템플릿 제공',
        '소프트웨어 커스터마이징',
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      description: '대기업, 관공서, 대규모 프랜차이즈, 독점적인 맞춤형 개발이 필요한 고객',
      price: '별도 문의',
      unit: '',
      features: [
        'Pro의 모든 기능 포함',
        '최고 수준의 AI 및 연동 기술 적용',
        '맞춤형 데이터 분석 및 리포트',
        '전담 기술 지원',
        '독점적인 기능 개발 및 통합',
      ],
      isPopular: false,
    },
  ];

  return (
    <section className='relative min-h-screen flex justify-center items-center py-40'>
      <div className='container mx-auto  text-4xl  space-y-10 bg-black/0'>
        <div className='space-y-3 text-white'>
          <div className='text-4xl lg:text-8xl font-black text-center'>
            Price
          </div>
          <div className='text-lg lg:text-2xl font-bold flex justify-center items-start'>
            {/* 토글 버튼 */}
            <div className="flex justify-center items-center space-x-3">
              <span className={`text-sm font-semibold transition-colors duration-300 ${isMonthly ? 'text-white' : 'text-gray-500'}`}>
                월 결제
              </span>
              <div
                onClick={togglePricing}
                className={`relative inline-flex items-center h-6 w-11 rounded-full cursor-pointer transition-colors duration-300 ${isMonthly ? 'bg-gray-700' : 'bg-green-500'}`}
              >
                <span
                  className={`transform transition ease-in-out duration-300 absolute left-1 w-4 h-4 rounded-full bg-white shadow-lg ${isMonthly ? '' : 'translate-x-5'}`}
                ></span>
              </div>
              <span className={`text-sm font-semibold transition-colors duration-300 ${!isMonthly ? 'text-white' : 'text-gray-500'}`}>
                연간 결제
              </span>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`aspect-[1/1.3] lg:aspect-[1/1.5] bg-white rounded-xl text-black p-8 space-y-5 flex flex-col justify-between ${plan.isPopular ? 'border-2 border-green-500' : 'border border-gray-700'}`}
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  {plan.isPopular && (
                    <span className="text-sm font-semibold text-green-600 px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm font-bold mb-6">
                  {plan.description}
                </p>
                <div className="text-4xl font-extrabold flex items-baseline space-x-2">
                  <span>{plan.price}</span>
                  <span className="text-sm font-semibold">
                    {plan.unit}
                  </span>
                </div>

                <ul className="space-y-3 mt-8 font-bold text-sm ">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <div>{feature}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3 font-semibold text-lg rounded-full bg-green-600 text-white`}>
                문의하기
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
