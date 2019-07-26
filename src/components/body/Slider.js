import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../assets/image/image1.jpg';
import image2 from '../assets/image/image2.jpg';
import image3 from '../assets/image/image3.jpg';
import image4 from '../assets/image/image4.jpg';
import image5 from '../assets/image/image5.jpg';
import image6 from '../assets/image/image6.jpg';
import image7 from '../assets/image/image7.jpg';
import image8 from '../assets/image/image8.jpg';

class Slider extends Component {
  render() {
    return (
      <div>
        <Carousel interval={1500}>
          <Carousel.Item>
            <img className='d-block w-100' src={image1} alt='First slide' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image2} alt='Third slide' />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image3} alt='Third slide' />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image4} alt='First slide' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image5} alt='First slide' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image6} alt='First slide' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image7} alt='First slide' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image8} alt='First slide' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        ;
        <h1>HELLO NEPAL </h1>
      </div>
    );
  }
}

export default Slider;
