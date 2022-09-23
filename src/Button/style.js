import styled,{css} from 'styled-components'

export const center = css`
display: flex;
justify-content: center;
align-items: center;
`
export const Container = styled.div`
${center}
border-radius: 6px;
width: ${(props) => props.width ? props.width : '100px'};
height: 40px;
background:${(props) => props.bg ? props.bg : 'blue'};
font-weight: 100;
font-size: 16px;
line-height: 20px;
margin: 10px;
text-transform: uppercase;
color: ${(props) => props.color ? props.color : 'white'};
`