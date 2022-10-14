import styled from "styled-components";
import {ReactComponent as Basket} from '../../assets/icons/basket.svg'
import {ReactComponent as LogoIco} from '../../assets/icons/logo.svg'
const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #444444;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
Container.Logo = styled.h3`
  font-size: 23px;
  color: white;
  font-weight: 600;
`
Container.Link = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 400;
  cursor: pointer;
  :active{
    transform: scale(0.96);
  }
`
Container.IconWrap = styled.div`
  position: relative;
  cursor: pointer;
  :active{
    transform: scale(0.96);
  }
`
Container.Counter = styled.p`
  font-size: 12px;
  width: 18px;
  height: 18px;
  color: white;
  background: #46A358;
  border-radius: 50%;
  position: absolute;
  top: -8px;
  right: -8px;
  text-align: center;
`

Container.Icon = styled(Basket)``;
Container.LogoIcon = styled(LogoIco)``



export {Container}