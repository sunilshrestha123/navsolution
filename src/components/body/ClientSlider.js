import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../assets/image/a.png';
import image2 from '../assets/image/b.png';
import image3 from '../assets/image/c.png';
import image4 from '../assets/image/d.png';
import image5 from '../assets/image/f.png';
import image6 from '../assets/image/g.png';
import image7 from '../assets/image/h.png';
import image8 from '../assets/image/i.png';

class ClientSlider extends Component {
  render() {
    return (
      <div>
        <Carousel interval={1500}>
          <Carousel.Item>
            <img className='d-block w-100' src={image1} alt='First slide' />
            <Carousel.Caption />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image2} alt='Third slide' />

            <Carousel.Caption />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image3} alt='Third slide' />

            <Carousel.Caption />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image4} alt='First slide' />
            <Carousel.Caption />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image5} alt='First slide' />
            <Carousel.Caption />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image6} alt='First slide' />
            <Carousel.Caption />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image7} alt='First slide' />
            <Carousel.Caption />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image8} alt='First slide' />
            <Carousel.Caption />
          </Carousel.Item>
        </Carousel>
        ;
      </div>
    );
  }
}

export default ClientSlider;
