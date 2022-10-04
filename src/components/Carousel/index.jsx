import React, { Component } from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import { Block } from './style'
import Image1 from '../../assets/img.png'
import Image2 from '../../assets/img2.png'

class Slider extends Component {
  render() {
    return (
      <Block>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              style={{ height: '650px' }}
              className='d-block w-100'
              src={Image1}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              style={{ height: '650px' }}
              className='d-block w-100'
              src={Image2}
              alt='Second slide'
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '650px' }}
              className='d-block w-100'
              src={Image1}
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
      </Block>
    );
  }
}

export default Slider
