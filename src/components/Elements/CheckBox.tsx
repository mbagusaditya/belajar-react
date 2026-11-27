import type { InputHTMLAttributes } from 'react';

type Props = {
  label: string;
  id: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function CheckBox({ label, id, ...rest }: Props) {
  return (
    <>
      <input className="text-sm accent-primary w-4" id={id} {...rest} />
      <label htmlFor={id} className="text-sm text-gray-01 ml-3">
        {label}
      </label>
    </>
  );
}
