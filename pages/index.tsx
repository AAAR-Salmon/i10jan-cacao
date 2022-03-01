import type { NextPage } from 'next';
import Head from 'next/head';
import { Button, Container } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>i10jan-cacao</title>
      </Head>
      <Container fluid='md' className='d-flex flex-column justify-content-center'>
        <p className='text-center fs-2'>誰か いる？</p>
        <div className='d-flex justify-content-center'>
          <Button href='someone' className='d-block'>
            確認
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Home;
