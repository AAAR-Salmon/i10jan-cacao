import type { NextPage } from 'next';
import { Container, Navbar } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#'>i10jan-cacao</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Home;
