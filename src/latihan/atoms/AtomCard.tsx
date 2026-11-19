import type { HTMLAttributes, ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function AtomCard({ children, className = '' }: Props) {
  return (
    <>
      <div
        className={`bg-gray-06 border border-gray-01 p-5 rounded-lg shadow-lg ${className}`}
      >
        {children}
      </div>
    </>
  );
}

export default AtomCard;
