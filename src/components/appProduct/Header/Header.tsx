import { Container, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Carga de Productos</Navbar.Brand>
        </Container>
      </Navbar>
  )
}
