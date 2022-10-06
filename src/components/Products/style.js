import styled from 'styled-components';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { ReactComponent as Minus } from '../../assets/minus.svg'

const Container = styled.div`
  width: 400px;
  background-color: #ec8171;
  border-radius: 5px;
  margin: auto;
  margin-top: 50px;
  padding: 5px;
`;

Container.Wrapper = styled.div`
    width: 100%;
    position: relative;
`;

Container.Fruits = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 height: 500px;
`;

Container.Block = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1.7em 0em;
`

Container.Checkbox = styled.input`
  width: 18px;
  height: 18px;
`
Container.Title = styled.h4`
  color: white;
  font-size: 23px;
  margin-left: 10px;
  text-decoration: ${({check}) => check && 'line-through'};
`



Container.Icon = styled(Plus)`
  position: absolute;
  top: 10px;
  right: 10px;
  fill: #ec8171;
`;


Container.Plus = styled(Plus)`
  width: 17px;
  height: 17px;
  :active {
     transform: scale(0.97);
  }
`
Container.Box = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`
Container.Count = styled.h5`
  font-size: 23px;
  color: white;
`
Container.Total = styled.h4`
  font-size: 24px;
  color: white;
  font-weight: 800;
  text-align: right;
`

Container.Minus = styled(Minus)``

Container.Input = styled.input`
  width: 100%;
  height: 45px;
  outline: none;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
  background-color: #fdcec6;
  font-size: 20px;
  color: #ec8171;
`;

export { Container };
