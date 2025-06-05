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
  if (!show) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'>
      <div className='bg-background-light dark:bg-background-dark rounded-lg shadow-lg max-w-5xl w-full'>
        <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200'>
          <h1 className='text-2xl font-semibold'>{title}</h1>
          <button
            onClick={onClose}
            type='button'
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
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
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
              />
            </svg>
            <span className='sr-only'>Close modal</span>
          </button>
        </div>

        <div className='py-4 px-4 text-justify flex flex-col gap-4 items-center'>
          <img
            src={image}
            alt={title}
            className='shadow-md rounded-lg w-xl'
          />
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-lg'>Tech Stack:</h3>
            <ul className='list-disc text-lg'>
              {tech.map((t) => (
                <li className='ml-8'>{t}</li>
              ))}
            </ul>
            <p className='text-lg'>{description}</p>
          </div>
        </div>

        <div className='flex justify-end p-4 border-t dark:border-gray-600'>
          <button
            onClick={onClose}
            className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
