import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import {ReactComponent as btnPrev} from '../../assets/prev.svg'
import {ReactComponent as btnNext} from '../../assets/next.svg'

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const SwiperReact = styled(Swiper)`
  width: 100%;

  .swiper-button-next::after,.swiper-button-prev::after {
    font-size: 20px !important;
    width: 45px !important;
    height: 45px !important;
    background: #FFFF;
    opacity: 0.2;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
  }
`;

SwiperReact.SwiperPrev = styled(btnPrev)`
   position: absolute;
   z-index: 5;
`
SwiperReact.SwiperNext = styled(btnNext)``

SwiperReact.ButtonWrapper = styled.div`
    width: 45px;
    height: 45px;
    background: #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.2;
    background: red;
    border-radius: 50%;
`

SwiperReact.Slide = styled(SwiperSlide)`
  height: 571px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export { Container, SwiperReact };
