import type { InputHTMLAttributes } from 'react';

function AtomInput({
  type = 'text',
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <input
        type={type}
        {...props}
        className={`border border-gray-01 rounded-md p-2 ${props.className ?? ''}`}
      />
    </>
  );
}

export default AtomInput;
