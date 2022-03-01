import type { NextPage } from 'next';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
      <header>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='#'>i10jan-cacao</Navbar.Brand>
            <Nav>
              <Nav.Link href='#login'>ログイン</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main className='flex-fill'>
        <Container fluid='md'>
          <p>あああ</p>
        </Container>
      </main>
      <footer className='bg-dark text-white py-2 py-md-3'>
        <Container className='d-flex flex-column flex-md-row justify-content-between text-center text-md-start' style={{ fontSize: '0.8rem' }}>
          <p className='mb-0'>
            &copy; 2022 岡山大学電子計算機研究会 (
            <a href='https://twitter.com/oucrc/' className='link-light'>
              @oucrc
            </a>
            )
          </p>
          <p className='mb-0'>
            The content of this site is licensed under the{' '}
            <a href='https://creativecommons.org/licenses/by-sa/4.0/' className='link-light'>
              CC BY-SA 4.0 license
            </a>
            .
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
