import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  type?: 'submit' | 'button' | 'reset';
  variant?: 'primary' | 'secondary';
};

export default function Button({
  children,
  type = 'submit',
  variant = 'primary',
}: Props) {
  const baseClasses = 'h-12 rounded-md text-sm w-full';

  const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-gray-05 text-gray-02',
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant] || variantClasses['primary']}`;

  return (
    <button className={finalClasses} type={type}>
      {children}
    </button>
  );
}
