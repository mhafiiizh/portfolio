import { useState } from 'react';
import SkillsContainer from './SkillsContainer';
import StarBorder from './third-party/StarBorder';
import { skills } from '@/data/skills';

export default function Skills() {
  const [category, setCategory] = useState('frontend');

  const handleCategorySkill = (newCategory: string) => {
    setCategory(newCategory);
  };

  const filteredSkills = skills.filter((skill) => skill.category === category);

  return (
    <section
      id='skills'
      className='flex flex-col min-h-screen pt-10 px-4 md:px-8 lg:px-16'
    >
      <div className='flex flex-col items-end'>
        <h1 className='font-space-grotesk text-3xl md:text-4xl lg:text-4xl font-semibold'>
          Skills
        </h1>
        <div className='h-1 w-16 md:w-20 bg-text-light dark:bg-text-dark mt-2 rounded-full' />
      </div>

      <div className='flex flex-col items-center gap-10 mt-4'>
        <div className='flex flex-row gap-4 md:gap-6 font-semibold'>
          <StarBorder
            as='button'
            className='cursor-pointer shadow-lg font-inter'
            speed='5s'
            active={category === 'frontend'}
            onClick={() => handleCategorySkill('frontend')}
          >
            Front End
          </StarBorder>
          <StarBorder
            as='button'
            className='cursor-pointer shadow-lg font-inter'
            speed='5s'
            active={category === 'backend'}
            onClick={() => handleCategorySkill('backend')}
          >
            Back End
          </StarBorder>
          <StarBorder
            as='button'
            className='cursor-pointer shadow-lg font-inter'
            speed='5s'
            active={category === 'database'}
            onClick={() => handleCategorySkill('database')}
          >
            Database
          </StarBorder>
          <StarBorder
            as='button'
            className='cursor-pointer shadow-lg font-inter'
            speed='5s'
            active={category === 'other'}
            onClick={() => handleCategorySkill('other')}
          >
            Others
          </StarBorder>
        </div>

        <SkillsContainer skills={filteredSkills} />
      </div>
    </section>
  );
}
