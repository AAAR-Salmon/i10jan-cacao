import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from 'react-bootstrap';

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ログイン | i10jan-cacao</title>
      </Head>
      <Container fluid='md' className='d-flex flex-column justify-content-center'>
        <p className='text-center fs-2'>未実装です！</p>
        <p className='text-center'>待たないでください。</p>
      </Container>
    </>
  );
};

export default LoginPage;
