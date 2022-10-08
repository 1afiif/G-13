import styled from "styled-components";

const MainWrapper = styled.div`
  padding: 1em 5em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #0d263b;
  border: 1px solid black;
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
  height: 487px;
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
export { MainWrapper };