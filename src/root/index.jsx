import React from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import About from '../components/About'
import Home from '../components/Home'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import NotFound from '../components/NotFound'
import Products from '../components/Products'

const Root = () => {
  const location = useLocation();
  console.log(location, 'location');
  return (
    <>
      <Switch>
        <Route path={'/'} exact component={Navbar} />
        <Route path={'/home'} component={Navbar} />
        <Route path={'/products'} component={Navbar} />
        <Route path={'/about'} component={Navbar} />
        <Route path={'/login'} component={Navbar} />
      </Switch>
      <Switch>
        <Route path={'/'} exact>
          <Redirect to={'/home'}/>
        </Route>
        <Route path={'/home'} component={Home}/>
        <Route path={'/products'} component={Products}/>
        <Route path={'/about'} component={About}/>
        <Route path={'/login'} component={Login}/>
        <Route path={'*'} component={NotFound}/>
      </Switch>
    </>
  );
}

export default Root
