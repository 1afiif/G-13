import React from 'react'
import { Carousel } from 'react-bootstrap'

export const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className='d-block w-100'
            src='https://images.pexels.com/photos/8721646/pexels-photo-8721646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className='d-block w-100'
            src='https://images.pexels.com/photos/12909949/pexels-photo-12909949.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://images.pexels.com/photos/10353602/pexels-photo-10353602.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider
