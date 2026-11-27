import type { InputHTMLAttributes } from 'react';

type Props = {
  label: string;
  id: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function LabeledInput({ label, id, ...rest }: Props) {
  return (
    <>
      <label htmlFor={id} className="block text-sm mb-2">
        {label}
      </label>
      <input
        className="text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0 py-3 px-4"
        id={id}
        {...rest}
      />
    </>
  );
}
