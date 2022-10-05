import React, { Component } from 'react'
import { Container, SwiperReact } from './style'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import Image from '../../assets/img.png'
import Image2 from '../../assets/img2.png'

class SwiperCarousel extends Component {
  render() {
    return (
      <Container>
        <SwiperReact
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Mousewheel, Keyboard, Autoplay]}
          className='mySwiper'
        >
          <SwiperReact.Slide
            style={{ backgroundImage: `url(${Image})` }}
          ></SwiperReact.Slide>
          <SwiperReact.Slide
            style={{ backgroundImage: `url(${Image2})` }}
          ></SwiperReact.Slide>
          <SwiperReact.Slide
            style={{ backgroundImage: `url(${Image})` }}
          ></SwiperReact.Slide>
          <SwiperReact.Slide
            style={{ backgroundImage: `url(${Image2})` }}
          ></SwiperReact.Slide>
          <SwiperReact.Slide
            style={{ backgroundImage: `url(${Image})` }}
          ></SwiperReact.Slide>
          <SwiperReact.Slide
            style={{ backgroundImage: `url(${Image2})` }}
          ></SwiperReact.Slide>
        </SwiperReact>
        <SwiperReact.ButtonWrapper>
          <SwiperReact.SwiperPrev className='swiper-button-prev' />
        </SwiperReact.ButtonWrapper>
        <SwiperReact.ButtonWrapper>
          <SwiperReact.SwiperNext />
        </SwiperReact.ButtonWrapper>
      </Container>
    );
  }
}

export default SwiperCarousel
