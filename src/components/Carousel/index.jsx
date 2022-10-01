import React, { Component } from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import { Block } from './style'

class Slider extends Component {
  render() {
    return (
      <Block>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              style={{ height: '650px', }}
              className='d-block w-100'
              src='https://images.pexels.com/photos/5105622/pexels-photo-5105622.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
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
              src='https://images.pexels.com/photos/7031412/pexels-photo-7031412.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
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
              src='https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
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
