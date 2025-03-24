import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AuthForm = ({ isSignup, toggleForm }) => {
  return (
    <Form>
      {isSignup && (
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Entrez votre nom" />
        </Form.Group>
      )}

      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Entrez votre email" />
      </Form.Group>

      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
      </Form.Group>

      <Button type="submit" className="me-2 bg-dark colored-text">
        {isSignup ? "S'inscrire" : "Se connecter"}
      </Button>

      <div className="mt-3">
        <a href="#" onClick={toggleForm} className="text-light">
          {isSignup ? "Déjà un compte ? Connecte-toi ici !" : "Pas encore de compte ? Inscris-toi ici !"}
        </a>
      </div>
    </Form>
  );
};

export default AuthForm;