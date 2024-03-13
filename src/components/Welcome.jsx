import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

const Welcome = function () {
  return (
    <Container className="mt-3">
      <Alert variant="secondary">
        <Alert.Heading>EpiBooks - I migliori libri del mondo</Alert.Heading>
        <p>Benvenuti nel nostro book shop</p>
        <hr />
        <p className="mb-0">Assicurati di controllare tutta la lista dei nostri libri.</p>
      </Alert>
    </Container>
  );
};

export default Welcome;
