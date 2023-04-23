import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from "./Item";
import Banner from '../../helper/banner.json';

function CarouselComponent() {
  return (
    <Carousel>
      {Banner.map(item => <Item key={item.id} item={item} />)}
    </Carousel>
  )
}

export default CarouselComponent;