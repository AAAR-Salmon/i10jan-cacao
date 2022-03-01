import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { Button, Container } from 'react-bootstrap';

type Props = {
  countInRoom: number;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  return {
    props: {
      countInRoom: 0,
    },
  };
};

const SomeonePage: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.countInRoom > 0 ? 'いた！' : '誰もいない'} | i10jan-cacao</title>
      </Head>
      <Container fluid='md' className='d-flex flex-column justify-content-center'>
        <p className='text-center fs-2'>{props.countInRoom}人いる！</p>
        <p className='text-center'>
          {((n: number) => {
            if (n < 0) {
              const decoder = new TextDecoder('utf-8');
              const data = [
                0xbbef, 0xe8bf, 0xa38b, 0x8eee, 0xeb84, 0x8182, 0x87e8, 0xeea3, 0xaa8e, 0x92e8, 0xeb81, 0xafb3, 0xaae0,
                0x009f,
              ];
              return decoder.decode(Uint16Array.from(data).buffer);
            }
            if (n === 0) return 'あなたが1番乗り？';
            if (n < 10) return '来て来て 部室';
            return 'ちょっと多すぎるかもよ';
          })(props.countInRoom)}
        </p>
      </Container>
    </>
  );
};

export default SomeonePage;
