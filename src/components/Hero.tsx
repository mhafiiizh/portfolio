import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import heroImg from '@/assets/me_square.png';
import CircularText from '@/components/third-party/CircularText';
import Aurora from '@/components/third-party/Aurora';
import RotatingText from '@/components/third-party/RotatingText';

export default function Hero() {
  return (
    <div className='lg:min-h-screen'>
      <div className='pt-10 md:pt-0 lg:pt-0'>
        <Aurora
          colorStops={['#B0E0E6', '#20B2AA', '#87CEEB']}
          blend={1.0}
          amplitude={1.0}
          speed={1.0}
        />
      </div>
      <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-12 md:gap-18 lg:gap-40 px-6 md:px-24 lg:px-30 md:pt-4 lg:pt-10'>
        <div className='flex flex-col gap-6 justify-center font-semibold text-center lg:text-left'>
          <div className='flex flex-col gap-1 tracking-wide md:w-125'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-space-grotesk'>
              Hello!
            </h1>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-space-grotesk'>
              I'm Hafizh
            </h1>
            <div className='flex flex-row gap-3 items-center justify-center lg:justify-start text-3dxl md:text-4xl lg:text-5xl font-space-grotesk'>
              <RotatingText
                texts={['Frontend', 'Backend']}
                mainClassName='w-fit px-2 sm:px-2 md:px-3 bg-cyan-300 text-text-light overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg'
                staggerFrom={'last'}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
              <h1>Developer</h1>
            </div>
            <p className='text-base md:text-lg lg:text-lg text-gray-700 dark:text-gray-400 font-inter w-full'>
              Specialized in creating responsive and performant web applications
              with modern technologies.
            </p>
          </div>

          <div className='flex flex-col md:flex-row text-base md:text-lg lg:text-xl gap-4 justify-center lg:justify-start font-inter'>
            <a
              href='https://mail.google.com/mail/?view=cm&fs=1&to=muhammadhafizhihsan@gmail.com'
              target='_blank'
              rel='noopener'
              className='border-2 rounded-xl py-2 px-4 md:py-3 md:px-5 hover:bg-background-dark hover:text-text-dark dark:hover:bg-background-light dark:hover:text-text-light cursor-pointer'
            >
              Contact Me!
            </a>
            <a
              href='/doc/CV_Muhammad-Hafizh-Ihsan.pdf'
              download='CV_Muhammad-Hafizh-Ihsan.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-xl py-2 px-4 md:py-3 md:px-5 bg-background-dark text-text-dark dark:bg-background-light dark:text-text-light flex items-center justify-center gap-2'
            >
              My CV/Resume
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center lg:pr-15'>
          <CircularText
            text='FRONTEND DEV*BACKEND DEV*'
            onHover='slowDown'
            spinDuration={20}
            className='scale-135 md:scale-155 lg:scale-190 text-text-light dark:text-text-dark'
          />
          <div className='absolute flex justify-center items-center z-10 w-fit h-fit'>
            <img
              src={heroImg}
              className='rounded-full h-[180px] w-[180px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px]'
              alt='Hero Image'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
