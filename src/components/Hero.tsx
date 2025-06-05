import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import heroImg from '@/assets/me_square.png';
import CircularText from '@/components/third-party/CircularText';

export default function Hero() {
  return (
    <div className='hero flex flex-row justify-between px-48 pt-40'>
      <div className='left-side flex flex-col gap-8 justify-center font-semibold'>
        <div className='text-6xl flex flex-col gap-2 font-space-grotesk tracking-wide'>
          <h1>Hello!</h1>
          <h1>I'm Hafizh</h1>
          <h1>Web Developer</h1>
        </div>
        <div className='flex text-xl gap-4 font-inter'>
          <a
            href='https://mail.google.com/mail/?view=cm&fs=1&to=muhammadhafizhihsan@gmail.com'
            target='_blank'
            rel='noopener'
            className='border-2 rounded-xl pt-3 p-4 hover:bg-background-dark hover:text-text-dark dark:hover:bg-background-light dark:hover:text-text-light cursor-pointer'
          >
            Contact Me!
          </a>
          <div className='rounded-xl pt-3 p-4 bg-background-dark text-text-dark dark:bg-background-light dark:text-text-light cursor-pointer'>
            <a
              href='/doc/CV_Muhammad Hafizh Ihsan.pdf'
              download='CV_Muhammad Hafizh Ihsan.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              My CV/Resume
            </a>
            <FontAwesomeIcon
              icon={faDownload}
              className='pl-2'
            />
          </div>
        </div>
      </div>
      <div className='relative'>
        <img
          src={heroImg}
          height={250}
          width={250}
          className='rounded-full mt-5'
          alt='Hero Image'
        />
        <CircularText
          text='FRONTEND DEV*BACKEND DEV*'
          onHover='speedUp'
          spinDuration={20}
          className='absolute inset-0 h-full scale-115 text-text-light dark:text-text-dark'
        />
      </div>
    </div>
  );
}
