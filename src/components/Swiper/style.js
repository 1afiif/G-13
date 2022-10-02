import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const Container = styled.div`
  width: 100%;
`;

const SwiperReact = styled(Swiper)`
  width: 100%;
`;

SwiperReact.Slide = styled(SwiperSlide)`
  width: 100%;
  height: 571px;
  background-color: crimson;
`;

export { Container, SwiperReact };
