import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container className="text-center">
        <p>© {new Date().getFullYear()} Anime Review - Tous droits réservés</p>
      </Container>
    </footer>
  );
};

export default Footer;