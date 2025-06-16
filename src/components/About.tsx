import aboutImg from '@/assets/software_engineer.svg';
import AnimatedContent from '@/components/third-party/AnimatedContent';

export default function About() {
  return (
    <section
      id='about'
      className='flex flex-col min-h-screen pt-10 px-4 md:px-8 lg:px-16'
    >
      <div className='w-full max-w-6xl mb-10 text-left'>
        <h1 className='font-space-grotesk text-3xl md:text-4xl lg:text-4xl font-semibold'>
          About Me
        </h1>
        <div className='h-1 w-16 md:w-20 bg-text-light dark:bg-text-dark mt-2 rounded-full'></div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12 max-w-7xl w-full'>
        <div className='w-full md:w-1/2 flex justify-center'>
          <AnimatedContent
            distance={150}
            direction='horizontal'
            reverse={true}
            duration={1.2}
            ease='power.out'
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <img
              src={aboutImg}
              alt='About Illustration'
              className='w-full max-w-[240px] md:max-w-md lg:max-w-sm'
            />
          </AnimatedContent>
        </div>

        <div className='font-inter text-base md:text-lg lg:text-xl leading-relaxed text-text-light dark:text-text-dark w-full md:w-1/2 text-justify'>
          <AnimatedContent
            distance={150}
            direction='horizontal'
            reverse={false}
            duration={1.2}
            ease='power.out'
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <p className='mb-4'>
              I’m a fresh graduate in Informatics from Singaperbangsa University
              of Karawang, specializing in{' '}
              <strong className='text-blue-600 dark:text-blue-400'>
                Backend Development
              </strong>{' '}
              with additional skills in{' '}
              <strong className='text-blue-600 dark:text-blue-400'>
                Front-End
              </strong>{' '}
              and{' '}
              <strong className='text-blue-600 dark:text-blue-400'>
                UI/UX Design
              </strong>
              . I have hands-on experience building reliable and scalable APIs
              using modern frameworks like{' '}
              <strong className='text-blue-600 dark:text-blue-400'>
                Laravel
              </strong>{' '}
              and{' '}
              <strong className='text-blue-600 dark:text-blue-400'>
                NodeJS
              </strong>
              , with a strong interest in applying{' '}
              <strong className='text-blue-600 dark:text-blue-400'>
                Clean Architecture
              </strong>{' '}
              principles for long-term maintainability.
            </p>
            <p>
              Through academic and personal projects, I’ve developed solid
              skills in RESTful API design, database modeling, and Git-based
              collaboration. I’m passionate about writing clean, maintainable
              code and continuously exploring new technologies.
            </p>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
