import { Icon } from '@iconify/react'
import Link from 'next/link';
import React, { useState } from 'react'

export default function Price() {
  // 선택된 대수
  const [selectedQuantity, setSelectedQuantity] = useState("1");

  // 대수 옵션
  const quantityOptions = [
    { label: "1개", value: "1" },
    { label: "10개", value: "10" },
    { label: "30개", value: "30" },
    { label: "50개", value: "50" },
  ];

  // 할인율
  const discounts = {
    "1": 0,
    "10": 0.05,
    "30": 0.10,
    "50": 0.15,
  };

  // 플랜별 기본 단가
  const basePrices = {
    "일반형": 2000000,
    "고급형": 3000000,
    "커스텀형": null, // 별도 견적
  };

  // 가격 계산 함수
  const calculatePrice = (planName) => {
    if (planName === "커스텀형") return "별도 문의";
    const discount = discounts[selectedQuantity] || 0;
    const price = basePrices[planName] * (1 - discount);
    return `₩${price.toLocaleString()}`;
  };

  // 할인율 표시
  const getDiscountRate = () => {
    const discount = discounts[selectedQuantity] || 0;
    return discount > 0 ? `${discount * 100}% 할인` : "할인 없음";
  };

  const pricingPlans = [
    {
      name: '일반형',
      description: '신규 창업자, 소규모 비즈니스, 포토 키오스크 도입을 시도하는 고객',
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
      name: '고급형',
      description: '확장 계획이 있는 프랜차이즈, 중소기업, 다양한 기능 활용이 필요한 고객',
      features: [
        '일반형의 모든 기능 포함',
        'AI 필터, 포토샵 연동 기능',
        '향상된 통계 및 매출 관리',
        '원격 머신 관리',
        '프리미엄 템플릿 제공',
        '소프트웨어 커스터마이징',
      ],
      isPopular: true,
    },
    {
      name: '커스텀형',
      description: '대기업, 관공서, 대규모 프랜차이즈, 독점적인 맞춤형 개발이 필요한 고객',
      features: [
        '고급형의 모든 기능 포함',
        '최고 수준의 AI 및 연동 기술 적용',
        '맞춤형 데이터 분석 및 리포트',
        '전담 기술 지원',
        '독점적인 기능 개발 및 통합',
      ],
      isPopular: false,
    },
  ];

  return (
    <section className='relative min-h-screen flex flex-col justify-center items-center py-40'>
      <div className='container mx-auto text-white space-y-10'>

        {/* 타이틀 */}
        <div className='text-center space-y-3'>
          <div className='text-4xl lg:text-8xl font-black'>Kiosk Price</div>
          {/* 대수 선택 라디오 */}
          <div className="flex justify-center items-center space-x-4 mt-5">
            {quantityOptions.map((option) => (
              <label key={option.value} className="relative cursor-pointer">
                {/* 실제 라디오 버튼 숨김 */}
                <input
                  type="radio"
                  name="quantity"
                  value={option.value}
                  checked={selectedQuantity === option.value}
                  onChange={(e) => setSelectedQuantity(e.target.value)}
                  className="peer absolute opacity-0 w-0 h-0"
                />
                {/* 커스텀 버튼 */}
                <div className="w-20 h-10 flex items-center justify-center border-2 
                      bg-white text-black font-semibold
                      peer-checked:bg-green-800 peer-checked:text-white
                      transition-colors duration-300">
                  {option.label}
                </div>
              </label>
            ))}
          </div>
          <div className='mt-2 text-lg'>{getDiscountRate()}</div>
        </div>

        {/* 가격표 카드 */}
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
                <p className="text-sm font-bold mb-6">{plan.description}</p>

                <div className="text-4xl font-extrabold flex items-baseline space-x-2">
                  <span>{calculatePrice(plan.name)}</span>
                  {plan.name !== "커스텀형" && (
                    <span className="text-sm font-semibold">per unit</span>
                  )}
                </div>

                <ul className="space-y-3 mt-8 font-bold text-sm">
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

              <Link href={'/contact'} className={`w-full py-3 font-semibold text-lg rounded-full bg-green-600 text-white text-center`}>
                문의하기
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
