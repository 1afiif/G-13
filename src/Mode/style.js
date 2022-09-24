import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
max-width: 1920px;
`
export const Navbar = styled.div`
display: flex;
width: 100%;
height: 60px;
align-items: center;
justify-content:space-between;
padding: 0 130px;
background: #E5E5E5;
`

Navbar.Title = styled.h3`
  color: #46A358
`

Navbar.UL = styled.ul`
display:flex;
align-items: center;
gap:20px

`

Navbar.LI = styled.li`
list-style-type: none;
`

export const Header = styled.div``

Header.Title = styled.h1``
