// import OrganismLoginPanel from '../organisms/OrganismLoginPanel';

import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const TemplateCenter = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-01">
      <div className="w-full max-w-md">
        {/*<OrganismLoginPanel />*/}
        {children}
      </div>
    </main>
  );
};

export default TemplateCenter;
