import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthForm from "../components/AuthForm";
import '../App.css'

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => setIsSignup(!isSignup);

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4 colored-text">{isSignup ? "Inscription" : "Connexion"}</h2>
          <AuthForm isSignup={isSignup} toggleForm={toggleForm} />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;