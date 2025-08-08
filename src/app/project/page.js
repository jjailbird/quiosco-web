import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

// details 폴더의 절대 경로를 설정합니다.
const detailsDir = path.join(process.cwd(), 'src', 'app', 'project', 'details');

async function getCategorizedProjects() {
  const categories = [];

  try {
    const dirents = await fs.readdir(detailsDir, { withFileTypes: true });

    for (const dirent of dirents) {
      if (dirent.isDirectory()) {
        const categoryName = dirent.name;
        const categoryPath = path.join(detailsDir, categoryName);
        const fileNames = await fs.readdir(categoryPath);

        const projectNames = fileNames
          .filter(fileName => fileName.endsWith('.js'))
          .map(fileName => fileName.replace('.js', ''));

        categories.push({
          category: categoryName,
          projects: projectNames,
        });
      }
    }
  } catch (error) {
    console.error('Failed to read project details directory:', error);
  }

  return categories;
}

export default async function ProjectListPage() {
  const categorizedProjects = await getCategorizedProjects();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">프로젝트 목록</h1>
      {categorizedProjects.length > 0 ? (
        categorizedProjects.map(({ category, projects }) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold capitalize mb-4">{category.replace(/-/g, ' ')}</h2>
            <ul className="space-y-2">
              {projects.map((name) => {
                // 수정: 슬러그를 '카테고리-파일명' 형태로 만듭니다.
                // 예: frontend-MyNextProject -> frontend-my-next-project
                const slug = `${category.toLowerCase()}-${name.replace(/([A-Z])/g, '-$1').toLowerCase().slice(1)}`;
                return (
                  <li key={slug}>
                    <Link href={`/project/${slug}`} className="text-lg text-blue-500 hover:underline">
                      {name.replace(/([A-Z])/g, ' $1').trim()}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))
      ) : (
        <p>등록된 프로젝트가 없습니다.</p>
      )}
    </div>
  );
}