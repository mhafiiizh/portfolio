import React from 'react';

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties['animationDuration'];
    active?: boolean;
  };

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color,
  speed = '6s',
  active = false,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  const starColor = color || 'var(--star-color)';

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] py-[1px] ${className}`}
      {...rest}
    >
      <div
        className='absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0'
        style={{
          background: `radial-gradient(circle, ${starColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className='absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0'
        style={{
          background: `radial-gradient(circle, ${starColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />

      <div
        className={`
          relative z-1 text-center text-sm md:text-base lg:text-lg py-3 px-3 md:py-4 md:px-5 rounded-[inherit]
          border
          ${
            active
              ? 'bg-gray-900 text-white border-gray-800 dark:bg-white dark:text-black dark:border-gray-200'
              : 'bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 text-text-light dark:text-text-dark border-gray-300 dark:border-gray-800'
          }
        `}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
