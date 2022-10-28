import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`

const textDecor = 'none' 

const Nav = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  background-color: #222;
  align-items: center;

  .nav-item {
    font-size: 22px;
    color: white;
    text-decoration: none;
  }
  `

export { Container,Nav,textDecor }
