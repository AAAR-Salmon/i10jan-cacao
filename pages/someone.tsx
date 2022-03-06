import fetch from 'node-fetch';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { Container } from 'react-bootstrap';

type Props = {
  successFetch: boolean;
  countInRoom: number;
};

const flavorText = (ok: boolean, n: number) => {
  if (!ok) return '悲しい';
  if (n < 0) {
    const decoder = new TextDecoder('utf-8');
    const data = [
      0xbbef, 0xe8bf, 0xa38b, 0x8eee, 0xeb84, 0x8182, 0x87e8, 0xeea3, 0xaa8e, 0x92e8, 0xeb81, 0xafb3, 0xaae0, 0x009f,
    ];
    return decoder.decode(Uint16Array.from(data).buffer);
  }
  if (n === 0) return 'あなたが1番乗り？';
  if (n < 10) return '来て来て 部室';
  return 'ちょっと多すぎるかもよ';
};

const SomeonePage: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>
          {!props.successFetch ? '通信失敗' : props.countInRoom > 0 ? 'いた！' : '誰もいない'} | i10jan-cacao
        </title>
      </Head>
      <Container fluid='md' className='d-flex flex-column justify-content-center'>
        <p className='text-center fs-2'>{props.successFetch ? `${props.countInRoom}人いる！` : '通信失敗…'}</p>
        <p className='text-center'>{flavorText(props.successFetch, props.countInRoom)}</p>
      </Container>
    </>
  );
};

export default SomeonePage;

export const getServerSideProps: GetServerSideProps<Props> = (context) => {
  const promise = fetch('https://cacao-app.com/api/active', {
    headers: {
      'X-Access-Token': process.env.CACAO_API_TOKEN!,
    },
  });
  return promise
    .then((response) => {
      if (!response.ok) throw response.status;
      return response.json();
    })
    .then((json) => {
      return {
        props: {
          successFetch: (json as any).success,
          countInRoom: (json as any).data.length,
        },
      };
    })
    .catch((_) => {
      return {
        props: {
          successFetch: false,
          countInRoom: 0,
        },
      };
    });
};
