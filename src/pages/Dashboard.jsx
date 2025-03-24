import { useState } from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';

const Dashboard = () => {
  const [animes, setAnimes] = useState([
    { id: 1, name: "One Piece", type: "Shonen", genre: "Aventure", rating: 5, comment: "Incroyable !" },
    { id: 2, name: "Attack on Titan", type: "Shonen", genre: "Action", rating: 5, comment: "Épique !" }
  ]);

  const [newAnime, setNewAnime] = useState({ name: "", type: "", genre: "", rating: 0, comment: "" });

  const handleAddAnime = () => {
    if (newAnime.name) {
      setAnimes([...animes, { id: Date.now(), ...newAnime }]);
      setNewAnime({ name: "", type: "", genre: "", rating: 0, comment: "" });
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Mon Tableau de Bord</h2>
      
      <Row className="mb-4">
        <Col>
          <h4>Ajouter un Anime</h4>
          <Form>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Nom de l'anime"
                  value={newAnime.name}
                  onChange={(e) => setNewAnime({ ...newAnime, name: e.target.value })}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Type (Shonen, Shojo, etc.)"
                  value={newAnime.type}
                  onChange={(e) => setNewAnime({ ...newAnime, type: e.target.value })}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Genre (Action, Drame, etc.)"
                  value={newAnime.genre}
                  onChange={(e) => setNewAnime({ ...newAnime, genre: e.target.value })}
                />
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Note sur 5"
                  value={newAnime.rating}
                  onChange={(e) => setNewAnime({ ...newAnime, rating: Number(e.target.value) })}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Commentaire"
                  value={newAnime.comment}
                  onChange={(e) => setNewAnime({ ...newAnime, comment: e.target.value })}
                />
              </Col>
            </Row>

            <Button variant="primary" className="mt-3" onClick={handleAddAnime}>
              Ajouter
            </Button>
          </Form>
        </Col>
      </Row>

      <h4>Mes Animes</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Type</th>
            <th>Genre</th>
            <th>Note</th>
            <th>Commentaire</th>
          </tr>
        </thead>
        <tbody>
          {animes.map(anime => (
            <tr key={anime.id}>
              <td>{anime.name}</td>
              <td>{anime.type}</td>
              <td>{anime.genre}</td>
              <td>{anime.rating}/5</td>
              <td>{anime.comment}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;