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
      <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 font-inter'>
        <img
          className='rounded-t-lg'
          src={project.image}
          alt={project.title}
        />
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight'>
            {project.title}
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3'>
            {project.description}
          </p>

          <button
            onClick={() => setShowModal(true)}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer'
          >
            Read more
            <svg
              className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
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
      ></Modal>
    </>
  );
}
