import type { NextPage } from 'next';
import { Container } from 'react-bootstrap';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
      <Header />
      <main className='flex-fill'>
        <Container fluid='md'>
          <p>あああ</p>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
