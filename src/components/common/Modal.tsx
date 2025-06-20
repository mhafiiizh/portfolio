import { useEffect } from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  tech: string[];
}

export default function Modal({
  show,
  onClose,
  title,
  description,
  image,
  tech,
}: ModalProps) {
  useEffect(() => {
    if (show) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }

    return () => {
      document.body.style.overflowY = '';
    };
  }, [show]);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [show, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!show) return null;

  return (
    <div
      className='fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4'
      onClick={handleBackdropClick}
    >
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
        {/* Header */}
        <div className='flex items-center justify-between p-4 md:p-6 border-b border-gray-200 dark:border-gray-600'>
          <h1 className='text-xl md:text-2xl font-semibold text-gray-900 dark:text-white'>
            {title}
          </h1>
          <button
            onClick={onClose}
            type='button'
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white transition-colors'
            aria-label='Close modal'
          >
            <svg
              className='w-4 h-4'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className='p-4 md:p-6'>
          <div className='flex flex-col lg:flex-row gap-6'>
            {/* Image */}
            <div className='flex-shrink-0'>
              <img
                src={image}
                alt={title}
                className='w-full lg:w-80 h-auto object-cover rounded-lg shadow-md'
                loading='lazy'
              />
            </div>

            {/* Details */}
            <div className='flex-1 space-y-4'>
              {/* Tech Stack */}
              <div>
                <h3 className='font-semibold text-lg mb-3 text-gray-900 dark:text-white'>
                  Tech Stack:
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {tech.map((t, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium'
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className='font-semibold text-lg mb-3 text-gray-900 dark:text-white'>
                  Description:
                </h3>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='flex justify-end gap-3 p-4 md:p-6 border-t border-gray-200 dark:border-gray-600'>
          <button
            onClick={onClose}
            className='px-6 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors'
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
