import styled from 'styled-components';
import { ReactComponent as Delete } from '../../assets/Delete.svg';
import { ReactComponent as Edit } from '../../assets/Edit.svg';
import { ReactComponent as Save } from '../../assets/save.svg';
const MainWrapper = styled.div`
  padding: 1em 5em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #0d263b;
`;

MainWrapper.NavWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 89vw;
  h1 {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  > input {
    border: none;
    outline: none;
    background: none;
    border-bottom: 2px solid #e6e9ec;
    padding-left: 0.5em;
    width: 200px;
  }
`;

MainWrapper.Content = styled.div`
  margin: 2em 0;
  width: 89vw;
  height: 55vh;
  border: 2px solid #e6e9ec;
  box-shadow: rgba(13, 38, 59, 0.05);
  border-radius: 3px;
`;

MainWrapper.Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5em 1.5em;
  h1 {
    font-weight: 600;
    font-size: 16px;
  }
`;

MainWrapper.Body = styled.div`
  display: flex;
  height: 12vh;
  align-items: center;
  justify-content: space-between;
  margin: 1.5em 1.5em;
`;

MainWrapper.ImgContainer = styled.div`
  > img {
    width: 113px;
    height: 113px;
  }
`;
MainWrapper.TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin-right: 10em;
  h1 {
    font-size: 16px;
    font-weight: 600;
    > input {
      border: none;
      outline: none;
      background: none;
      border-bottom: 2px solid #e6e9ec;
      padding-left: 0.5em;
      width: 200px;
    }
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #696969;
    > input {
      border: none;
      outline: none;
      background: none;
      border-bottom: 2px solid #e6e9ec;
      padding-left: 0.5em;
      width: 200px;
    }
  }
`;
MainWrapper.Body2 = styled.div`
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

MainWrapper.DelIcon = styled(Delete)``;
MainWrapper.EdIcon = styled(Edit)``;
MainWrapper.SaveIcon = styled(Save)``;

MainWrapper.IconWrap = styled.div`
  display: flex;
  align-items: center;
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

export { MainWrapper };
