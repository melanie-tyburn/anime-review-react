import { Container, Row, Col, Card, Image } from 'react-bootstrap';
const Testimonials = () => {
  const reviews = [
    { name: "Gasai Yuno", text: "Yuuuuukiiiii... Oups pardon, superbe appli !", image: "src/assets/images/profil/yuno.png" },
    { name: "Enoshima Junko", text: "Très pratique entre 2 tueries de masse pour retrouver mes animes préférés.", image: "src/assets/images/profil/junko.png" },
    { name: "Kaneki Ken", text: "Parfois je partage ma liste à des humains avant de les bouffer, c'est cool...", image: "src/assets/images/profil/ken.png" },
    { name: "Kamado Tanjiro", text: "Nezuko utilise l'appli tous les jours pendant qu'elle est dans sa boite, elle ne s'ennuie pas !", image: "src/assets/images/profil/tanjiro.png" }
  ];

  return (
    <Container className="my-5 p-0">
      <h2 className="text-center mb-4">Qu'en pensent les Reviewers ?</h2>
      <Row className="justify-content-center">
        {reviews.map((review, index) => (
          <Col key={index} lg={3} md={6} sm={6} xs={12} className="d-flex">
            <Card className="w-100 shadow-sm">
              <Card.Body>
              <Image 
                src={review.image}
                alt={review.name} 
                roundedCircle 
                className="mx-auto mb-3 profil"
                style={{ width: "80px", height: "80px", objectFit: "cover" }} 
              />
                <Card.Title className='colored-text'>{review.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{review.anime}</Card.Subtitle>
                <Card.Text className='text-light'>{review.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;