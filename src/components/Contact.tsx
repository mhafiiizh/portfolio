import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '@/components/common/ContactForm';

export default function Contact() {
  return (
    <section
      id='contact'
      className='py-12 px-6 flex justify-center items-start bg-gray-50 dark:bg-gray-900'
    >
      <div className='bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-6xl w-full flex flex-col md:flex-row gap-8'>
        <div className='flex-1'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
            Contact
          </h2>
          <div className='w-16 h-1 bg-blue-600 mb-6 rounded'></div>

          <ul className='space-y-4 text-gray-800 dark:text-gray-300'>
            <li className='flex items-center gap-3'>
              <FontAwesomeIcon
                icon={faLinkedin}
                className='text-blue-700 text-xl'
              />
              <a
                href='https://www.linkedin.com/in/muhammad-hafizh-ihsan/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline hover:text-blue-700 transition'
              >
                LinkedIn
              </a>
            </li>

            <li className='flex items-center gap-3'>
              <FontAwesomeIcon
                icon={faSquareGithub}
                className='text-gray-700 dark:text-gray-200 text-xl'
              />
              <a
                href='https://github.com/mhafiiizh'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline hover:text-black dark:hover:text-white transition'
              >
                GitHub
              </a>
            </li>

            <li className='flex items-center gap-3'>
              <FontAwesomeIcon
                icon={faEnvelope}
                className='text-red-500 text-xl'
              />
              <a
                href='mailto:muhammadhafizhihsan@gmail.com'
                className='hover:underline hover:text-red-600 transition'
              >
                muhammadhafizhihsan@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className='flex-1'>
          <ContactForm toEmail='muhammadhafizhihsan@gmail.com' />
        </div>
      </div>
    </section>
  );
}
