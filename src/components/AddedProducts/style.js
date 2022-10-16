import styled from "styled-components";
import { ReactComponent as Pluss } from '../../assets/icons/plus.svg';
import { ReactComponent as Minuss } from '../../assets/icons/minus.svg';
import { ReactComponent as Trash } from '../../assets/icons/delete.svg';

const IconWrap = styled.div``
IconWrap.PlusIcon = styled(Pluss)`
  fill: #46a358;
`;
IconWrap.MinusIcon = styled(Minuss)`
  fill: #46a358;
`;
IconWrap.DeleteIcon = styled(Trash)`
  fill: #46a358;
`;

const Container = styled.div`
  width: 80%;
`
Container.Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5em 1.5em;
  h1 {
    font-weight: 500;
    font-size: 16px;
  }
`;
Container.Body = styled.div`
  display: flex;
  height: 12vh;
  align-items: center;
  justify-content: space-between;
  margin: 1.5em 1.5em;
  background: #fbfbfb;
`;
Container.ImgContainer = styled.div`
  > img {
    width: 113px;
    height: 113px;
  }
`;
Container.TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin-right: 10em;
  h1 {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #696969;
  }
`;

Container.Body2 = styled.div`
  width: 58%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  h1 {
    color: #696969;
    font-size: 14px;
    font-weight: 400;
  }
`;
Container.IconWrap = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: #46a358;
    font-weight: 700;
  }
  gap: 1em;
  > button {
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    :active {
      transform: scale(0.9);
    }
  }
`;

const Btn = styled.button`
    border-radius: 3px;
    background: #46a358;
    color: white;
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    :active {
      transform: scale(0.95);
    }
  
`;

export {Container,IconWrap,Btn}