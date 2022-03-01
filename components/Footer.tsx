import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className='bg-dark text-white py-2 py-md-3'>
      <Container
        className='d-flex flex-column flex-md-row justify-content-between text-center text-md-start'
        style={{ fontSize: '0.8rem' }}>
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
  );
}
