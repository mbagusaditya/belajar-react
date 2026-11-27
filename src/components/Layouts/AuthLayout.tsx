import type { ReactNode } from 'react';
import Logo from '../Elements/Logo';
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid place-content-center min-h-screen">
      <div className="w-[clamp(320px,20vw,60%)] flex flex-col">
        <Logo />

        {children}
      </div>
    </main>
  );
}
