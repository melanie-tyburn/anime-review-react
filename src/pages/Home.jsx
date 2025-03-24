import CarouselAnime from "../components/CarouselAnime";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <CarouselAnime />
      <Pricing />
      <Testimonials />
    </Container>
  );
};

export default Home;