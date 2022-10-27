import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #222;
  align-items: center;
  gap: 60px;
  justify-content: space-around;
  padding: 0 130px;
`

const Logo = styled.div`
   font-size: 28px;
   color:#fff;
   font-weight: 800;
`
const NavItems = styled.ul`
   display: flex;
   align-items: center;
   gap:50px;
   
`
const NavItem = styled(NavLink)`
   font-size: 24px;
   font-weight: 700;
   color:#fff;
   list-style-type: none;
   text-decoration: none;
   `

const Login = styled.div`
   width: 130px;
   height: 40px;
   border-radius: 4px;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   background: green;
`
export {Container,Logo,NavItem,NavItems,Login}