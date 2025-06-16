import { useState, useEffect, useRef } from 'react';
import isoImg from '@/assets/iso.png';
import type { Theme } from '@/hooks/useTheme';
import { useTheme } from '@/hooks/useTheme';
import { Squash as Hamburger } from 'hamburger-react';

export default function Nav() {
  const [theme, setTheme] = useTheme();
  const [time, setTime] = useState<string>('');
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      const s = now.getSeconds().toString().padStart(2, '0');
      setTime(`${h}:${m}:${s}`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleThemeChange = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        id='main-nav'
        className={`
          font-medium font-space-grotesk
          text-text-light dark:text-text-dark
          fixed top-4 left-1/2 transform -translate-x-1/2
          hidden md:flex flex-row items-center
          rounded-3xl py-2 px-5 shadow-lg z-50
          transition-all duration-300 ease-in-out
          ${
            isAtTop || isHovered
              ? 'bg-background-light dark:bg-background-dark shadow-lg dark:shadow-blue-950'
              : 'bg-background-light/70 dark:bg-background-dark/70 shadow-md dark:shadow-blue-950/50 backdrop-blur-sm'
          }
          gap-4 lg:gap-10
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isoImg}
          alt='Iso Image'
          className='w-8 lg:w-8'
        />

        <p className='hidden lg:block text-sm lg:text-base'>{time}</p>

        <ul className='flex flex-row items-center gap-4 lg:gap-8'>
          <li>
            <a
              href='#about'
              className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#skills'
              className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base'
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href='#project'
              className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base'
            >
              Project
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base'
            >
              Contact
            </a>
          </li>
        </ul>

        <div className='flex items-center'>
          <label className='relative inline-flex items-center cursor-pointer'>
            <input
              type='checkbox'
              className='sr-only peer'
              checked={theme === 'dark'}
              onChange={handleThemeChange}
              aria-label='Toggle dark mode'
            />
            <div className='w-9 h-5 lg:w-11 lg:h-6 bg-gray-300 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300'></div>
            <div className='absolute left-0.5 top-0.5 w-4 h-4 lg:w-5 lg:h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-4 lg:peer-checked:translate-x-5 flex items-center justify-center'>
              {theme === 'dark' ? (
                <span className='text-xs'>🌙</span>
              ) : (
                <span className='text-xs'>☀️</span>
              )}
            </div>
          </label>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        ref={mobileNavRef}
        className='md:hidden fixed top-0 left-0 right-0 z-50 w-full'
      >
        <div
          className={`
      font-medium font-space-grotesk
      text-text-light dark:text-text-dark
      flex flex-row items-center justify-between
      px-4 py-3
      transition-all duration-300 ease-in-out
      ${
        isAtTop
          ? 'bg-background-light dark:bg-background-dark shadow-lg dark:shadow-blue-950'
          : 'bg-background-light/70 dark:bg-background-dark/70 shadow-md dark:shadow-blue-950/50 backdrop-blur-sm'
      }
    `}
        >
          <div className='flex items-center gap-3'>
            <img
              src={isoImg}
              alt='Iso Image'
              className='w-8'
            />
          </div>

          <div className='flex items-center gap-3'>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input
                type='checkbox'
                className='sr-only peer'
                checked={theme === 'dark'}
                onChange={handleThemeChange}
                aria-label='Toggle dark mode'
              />
              <div className='w-9 h-5 bg-gray-300 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300'></div>
              <div className='absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-4 flex items-center justify-center'>
                {theme === 'dark' ? (
                  <span className='text-xs'>🌙</span>
                ) : (
                  <span className='text-xs'>☀️</span>
                )}
              </div>
            </label>
            <Hamburger
              toggled={isMobileMenuOpen}
              toggle={setIsMobileMenuOpen}
            />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`
            overflow-hidden transition-all duration-300 ease-in-out
            bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md
            shadow-lg dark:shadow-blue-950/50
            ${isMobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <ul className='flex flex-col py-2'>
            <li>
              <a
                href='#about'
                onClick={handleLinkClick}
                className='block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-base font-medium'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#project'
                onClick={handleLinkClick}
                className='block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-base font-medium'
              >
                Project
              </a>
            </li>
            <li>
              <a
                href='#contact'
                onClick={handleLinkClick}
                className='block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-base font-medium'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
