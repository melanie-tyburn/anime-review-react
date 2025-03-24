import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Prices = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Prix</h2>
          <Form>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Entrez votre email" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Mot de passe" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Se connecter
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Prices;