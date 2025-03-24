import { Card, Row, Col, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { IoPricetags,IoLibrary } from 'react-icons/io5';
const Pricing = () => {
  return (
      <Card className="my-5 shadow-lg border-0 w-100 p-0" id="a-propos">
        <Row className="align-items-center">
          <Col className="px-4 py-4 d-flex flex-column align-items-center">
            <div className="d-flex align-items-center mb-3">
              <IoLibrary size={30} className="me-2 icon" />
              <Card.Title className="fs-3 m-0 text-light">Découvre Anime Review</Card.Title>
            </div>
            <Card.Text className='text-light'>
              Sauvegarde tes meilleurs animes dans une bibliothèque en ligne et partage tes propres critiques avec d'autres passionés !
            </Card.Text>
            <Nav.Link as={Link} to="/prices">
              <IoPricetags className="me-2" />Voir les offres
            </Nav.Link>
          </Col>
          <Col md={6} className="text-center">
            <img 
              src="src/assets/accueil.png" 
              alt="full logo anime review" 
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Card>
  );
};

export default Pricing;