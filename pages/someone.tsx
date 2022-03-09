import type { InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import { Container } from 'react-bootstrap';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

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

export const getServerSideProps = async () => {
  return fetch('https://cacao-app.com/api/active', {
    headers: {
      'X-Access-Token': process.env.CACAO_API_TOKEN!,
    },
  })
    .then<{ success: boolean; data: any[] }>((response) => {
      if (!response.ok) throw response.status;
      return response.json();
    })
    .then((json) => {
      return {
        props: {
          successFetch: json.success,
          countInRoom: json.data.length,
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

const flavorText = (success: boolean, countInRoom: number) => {
  if (!success) return '悲しい';
  if (countInRoom < 0) {
    const decoder = new TextDecoder('utf-8');
    const data = [
      0xbbef, 0xe8bf, 0xa38b, 0x8eee, 0xeb84, 0x8182, 0x87e8, 0xeea3, 0xaa8e, 0x92e8, 0xeb81, 0xafb3, 0xaae0, 0x009f,
    ];
    return decoder.decode(Uint16Array.from(data).buffer);
  }
  if (countInRoom === 0) return 'あなたが1番乗り？';
  if (countInRoom < 8) return '来て来て 部室';
  return 'ちょっと多すぎるかもよ';
};
