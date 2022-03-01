import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
      <Header />
      <main className='flex-fill'>{children}</main>
      <Footer />
    </div>
  );
};
