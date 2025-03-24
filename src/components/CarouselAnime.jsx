import { Carousel } from 'react-bootstrap';
const CarouselAnime = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-600" src="images/anime1.jpg" alt="Anime 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="images/anime2.jpg" alt="Anime 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="images/anime3.jpg" alt="Anime 3" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="images/anime4.jpg" alt="Anime 4" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="images/anime5.jpg" alt="Anime 5" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselAnime;