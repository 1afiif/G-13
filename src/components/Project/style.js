import styled from 'styled-components';
import { ReactComponent as Faceboo } from '../../assets/faceboook.svg'
import { ReactComponent as Googl } from '../../assets/google.svg'

const Facebook = styled(Faceboo)`

`;
const Google = styled(Googl)``;

const Container = styled.div`
  width: 45vw;
  height: auto;
  margin: 30px auto;
  padding: 2em;
`;

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  margin-bottom: 2em;
`;
const Btn = styled.button`
  border: none;
  outline: none;
  font-size: 24px;
  cursor: pointer;
  background: none;
  color: ${(p) => p.color};
`;
const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 14px;
    width: 55%;
    text-align: center;
    border-bottom: 1px solid #d1e0e0;
    line-height: 0.1em;
    margin: 10px 0 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    color :grey;
  }

  h2 span {
    background: #fff;
    padding: 0 10px;
  }
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  > p {
    font-weight: 300;
    color: #527a7a;
  }
  > input {
    padding-left: 1em;
    font-weight: 300;
    color: grey;
    width: 300px;
    height: 30px;
    border: 1px solid #d1e0e0;
    border-radius: 5px;
    outline: none;
    margin-top: 1.3em;
    :focus {
      border: 1px solid #008000;
    }
  }
  > button {
    background: #2eb82e;
    width: 320px;
    height: 40px;
    border: none;
    color: white;
    border-radius: 4px;
    font-size: 17px;
    margin: 1em 0;
    :active{
      transform: scale(0.97);
    }
  }
`;
const Divider = styled.span`
  border-left: 1px solid black;
  height: 30px;
`;

const LineWrap = styled.div`
  h2 {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin: 10px 0 20px;
  }

  h2 span {
    background: #fff;
    padding: 0 10px;
  }
`;

export { Container, BtnWrap, Btn, Divider, InputWrap,LineWrap,Google,Facebook};