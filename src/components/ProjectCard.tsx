'use client';
import { useState } from 'react';
import type { Project } from '@/data/projects';
import Modal from '@/components/common/Modal';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='w-full max-w-xs md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 font-inter flex flex-col'>
        <img
          className='rounded-t-lg w-full h-auto object-cover'
          src={project.image}
          alt={project.title}
        />
        <div className='p-4 md:p-5 flex flex-col flex-grow'>
          <h5 className='mb-2 text-lg md:text-xl font-bold tracking-tight text-text-light dark:text-text-dark'>
            {project.title}
          </h5>
          <p className='mb-4 text-sm md:text-base text-gray-700 dark:text-gray-400 line-clamp-3'>
            {project.description}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className='mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition cursor-pointer'
          >
            Read more
            <svg
              className='w-4 h-4 rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </button>
        </div>
      </div>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={project.title}
        description={project.description}
        image={project.image}
        tech={project.tech}
      />
    </>
  );
}
