import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 2em 4em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

Container.Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`

Container.Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap:2em;
`

Container.Card = styled.div`
  width: 300px;
  height: 400px;
  margin-top:2em;
`
Container.ImgWrap = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`
Container.CardText = styled.div`
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
  h5 {
    font-size: 16px;
    font-weight: 250;
    color: rgba(61, 61, 61, 1);
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
    color: rgba(70, 163, 88, 1);
    margin-top: 0.5em;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
  button {
    border-radius: 3px;
    background: #46a358;
    color: white;
    width: 80px;
    height: 30px;
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    :active{
        transform: scale(0.95);
    }
}
`;
export { Container };