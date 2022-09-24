import styled, { keyframes } from 'styled-components'

const frames = keyframes`
  from {
    background: red;
  } to {
    background: blue;
  }
`

const getType = (type) => {
    switch (type) {
        case 'primary':
            return {
                background: 'blue',
                color: 'white',
            };
        case 'secondary':
            return {
                background: 'white',
                border: '1px solid black',
                color: 'black'
            };
        default:
            return {
              background: '#46A358',
              color: 'white',
            };
    }
}

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;

width: ${({width}) => width && width};
margin-top: ${({ mt }) => mt && mt};
padding-bottom: ${({pb}) => pb && pb};
height: 40px;
font-weight: 700;

${({type}) => getType(type)};
:active{
    transform: scale(0.90);
}

@media (max-width:1000px) {
   font-size:10px;
}

animation: ${frames} 4s linear infinite;
`