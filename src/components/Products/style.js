import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`

Container.Title = styled.h1``

const ContainerProd = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 30px;
`

ContainerProd.Item = styled.div`
   min-width: 300px;
   max-width: 400px;
   width: 100%;
   height: 400px;
   border: 1px solid black;
`

ContainerProd.ImgWrapper = styled.div`
   width: 100%;
   height: 300px;
   background-color: #999;
   margin-bottom: 10px;
`
ContainerProd.Title = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  :active {
    transform: scale(0.97);
  }
`;



export { Container,ContainerProd };