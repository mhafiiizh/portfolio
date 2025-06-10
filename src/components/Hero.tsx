import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import heroImg from '@/assets/me_square.png';
import CircularText from '@/components/third-party/CircularText';
import Aurora from '@/components//third-party/Aurora';

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
      <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-12 md:gap-14 px-6 md:px-24 lg:px-36 xl:px-48 pt-4 md:pt-32 lg:pt-10'>
        <div className='flex flex-col gap-6 justify-center font-semibold text-center lg:text-left'>
          <div className='text-3xl md:text-4xl lg:text-5xl flex flex-col gap-1 font-space-grotesk tracking-wide'>
            <h1>Hello!</h1>
            <h1>I'm Hafizh</h1>
            <h1>Web Developer</h1>
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

        <div className='relative flex justify-center items-center'>
          <img
            src={heroImg}
            className='rounded-full h-[200px] w-[200px] md:h-[220px] md:w-[220px] lg:h-[250px] lg:w-[250px]'
            alt='Hero Image'
          />
          <CircularText
            text='FRONTEND DEV*BACKEND DEV*'
            onHover='speedUp'
            spinDuration={20}
            className='absolute inset-0 h-full scale-145 md:scale-140 lg:scale-135 text-text-light dark:text-text-dark pointer-events-none'
          />
        </div>
      </div>
    </div>
  );
}
