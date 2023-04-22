import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/static/images/Banner1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/static/images/Banner1.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/public/home/Banner1.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;