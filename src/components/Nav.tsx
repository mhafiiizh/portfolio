import { useState, useEffect } from 'react';
import isoImg from '@/assets/iso.png';
import type { Theme } from '@/hooks/useTheme';
import { useTheme } from '@/hooks/useTheme';

export default function Nav() {
  const [theme, setTheme] = useTheme();
  const [time, setTime] = useState<string>('');

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

  const handleThemeChange = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    console.log('Switching to:', newTheme);
    setTheme(newTheme);
  };

  return (
    <nav className='font-medium font-space-grotesk text-text-light dark:text-text-dark fixed top-4 left-1/2 transform -translate-x-1/2 flex flex-row items-center gap-10 bg-background-light dark:bg-background-dark rounded-3xl py-2 px-5 shadow-lg z-50 dark:shadow-blue-950'>
      <img
        src={isoImg}
        width={40}
        height={40}
        alt='Iso Image'
      />

      <p>{time}</p>

      <ul className='flex flex-row items-center gap-8'>
        <li>
          <a
            href='#about'
            className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
          >
            About
          </a>
        </li>
        <li>
          <a
            href='#project'
            className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
          >
            Project
          </a>
        </li>
        <li>
          <a
            href='#contact'
            className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
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
          <div className='w-11 h-6 bg-gray-300 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300'></div>
          <div className='absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-5 flex items-center justify-center'>
            {theme === 'dark' ? (
              <span className='text-xs'>🌙</span>
            ) : (
              <span className='text-xs'>☀️</span>
            )}
          </div>
        </label>
      </div>
    </nav>
  );
}
