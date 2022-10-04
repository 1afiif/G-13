import React, { Component } from 'react'
import { Container, SwiperReact } from './style'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
// 4minut 2video
class SwiperCarousel extends Component {
  render() {
    return (
      <Container>
        <SwiperReact
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          pagination={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          modules={[Pagination,Navigation,Mousewheel,Keyboard,Autoplay]}
          className='mySwiper'
        >
          <SwiperReact.Slide>Slide 1</SwiperReact.Slide>
          <SwiperReact.Slide>Slide 2</SwiperReact.Slide>
          <SwiperReact.Slide>Slide 3</SwiperReact.Slide>
          <SwiperReact.Slide>Slide 4</SwiperReact.Slide>
          <SwiperReact.Slide>Slide 5</SwiperReact.Slide>
          <SwiperReact.Slide>Slide 6</SwiperReact.Slide>
          <SwiperReact.Slide>Slide 7</SwiperReact.Slide>
          <SwiperReact.Slide>Slide 8</SwiperReact.Slide>
          <SwiperReact.Slide>Slide 9</SwiperReact.Slide>
        </SwiperReact>
      </Container>
    );
  }
}

export default SwiperCarousel
