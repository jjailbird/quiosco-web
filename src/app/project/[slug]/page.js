import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

// 슬러그(예: 'frontend-my-next-project')를 파싱하여 카테고리와 컴포넌트 이름으로 분리하는 함수
const parseSlug = (slug) => {
  const parts = slug.split('-');

  // parts 배열에 최소 2개의 항목(카테고리, 파일명)이 있는지 확인합니다.
  if (parts.length < 2) {
    return { category: null, componentName: null };
  }

  const category = parts[0];
  const componentNameParts = parts.slice(1);

  // kebab-case -> PascalCase 변환
  const componentName = componentNameParts
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  return { category, componentName };
};

export default async function ProjectDetailPage({ params }) {
  const { category, componentName } = parseSlug(params.slug);

  if (!category || !componentName) {
    notFound();
  }

  const componentPath = `../details/${category}/${componentName}.js`;

  const DynamicComponent = dynamic(
    () => import(`${componentPath}`),
    {
      loading: () => <div>로딩 중...</div>
    }
  );

  return (
    <div className="p-8">
      <DynamicComponent />
    </div>
  );
}