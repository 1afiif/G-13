import { Navigate } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Login from "../components/Login";
import ProductDetail from "../components/ProductDetail";
import Products from "../components/Products";

const navbarData = [
  {
    id: 1,
    title: 'Home',
    path: '/home',
    element: <Home />,
    isPrivate: false,
    hidden: false,
  },
  {
    id: 2,
    title: 'Products',
    path: '/products',
    element: <Products />,
    isPrivate: true,
    hidden: false,
  },
  {
    id: 3,
    title: 'ProductDetails',
    path: '/products/:id',
    element: <ProductDetail />,
    isPrivate: false,
    hidden: true,
  },
  {
    id: 4,
    title: 'About',
    path: '/about',
    element: <About />,
    isPrivate: false,
    hidden: false,
  },
  {
    id: 5,
    title: 'Login',
    path: '/login',
    element: <Login />,
    isPrivate: false,
    hidden: false,
  },
  {
    id: 6,
    title: '',
    path: '/',
    element: <Navigate to='/home'/>,
    isPrivate: false,
    hidden: true,
  },
];

export {navbarData}