import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
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
  );
}
