import React, { FC } from 'react';

type Props = {
  className?: string;
};

export const Close: FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 1L8 8M15 15L8 8M8 8L15 1L1 15'
        stroke='#788CA5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
