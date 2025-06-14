import { useState } from 'react';
import ProjectList from '@/components/ProjectList';
import { projects } from '@/data/projects';
import AnimatedContent from '@/components/third-party/AnimatedContent';

export default function Project() {
  const [category, setCategory] = useState('frontend');

  const handleCategoryProject = (newCategory: string) => {
    setCategory(newCategory);
  };

  const filteredProjects = projects.filter(
    (project) => project.category === category
  );

  return (
    <section
      id='project'
      className='flex flex-col gap-8 items-center justify-center pt-10 px-4 md:px-8 lg:px-16'
    >
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold font-space-grotesk text-center'>
        My Projects
      </h1>

      <div className='flex flex-wrap justify-center border-b-2 border-blue-700 dark:border-blue-600 text-base md:text-lg lg:text-xl font-semibold font-inter'>
        <button
          onClick={() => handleCategoryProject('frontend')}
          className={`px-4 py-2 transition-colors duration-300 cursor-pointer ${
            category === 'frontend'
              ? 'bg-blue-700 dark:bg-blue-600 rounded-t text-text-dark dark:text-text-dark'
              : 'text-text-light dark:text-text-dark hover:opacity-80'
          }`}
        >
          Front End
        </button>
        <button
          onClick={() => handleCategoryProject('backend')}
          className={`px-4 py-2 transition-colors duration-300 cursor-pointer ${
            category === 'backend'
              ? 'bg-blue-700 dark:bg-blue-600 rounded-t text-text-dark dark:text-text-dark'
              : 'text-text-light dark:text-text-dark hover:opacity-80'
          }`}
        >
          Back End
        </button>
      </div>

      <AnimatedContent
        distance={150}
        direction='vertical'
        reverse={false}
        duration={1.2}
        ease='power3.out'
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <ProjectList projects={filteredProjects} />
      </AnimatedContent>
    </section>
  );
}
