import type { LabelHTMLAttributes, ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & LabelHTMLAttributes<HTMLLabelElement>;

function AtomLabel({ children, ...props }: Props) {
  return (
    <>
      <label {...props} className={`me-1 ${props.className ?? ''}`}>
        {children}
      </label>
    </>
  );
}

export default AtomLabel;
