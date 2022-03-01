import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <main className='flex-fill d-flex'>{children}</main>
      <Footer />
    </div>
  );
};
