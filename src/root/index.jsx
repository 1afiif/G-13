import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AddedProducts from '../components/AddedProducts'
import Navbar from '../components/Navbar'
import NotFound from '../components/NotFound'
import Products from '../components/Products'
import Context from '../context'

const Root = () => {
  return (
    <>
        <Context>
      <Switch>
          <Route path={'/'} exact component={Navbar} />
          <Route path={'/products'} component={Navbar} />
          <Route path={'/Addedproducts'} component={Navbar} />
      </Switch>
      <Switch>
          <Route path={'/'} exact>
            <Redirect to={'/products'} />
          </Route>
          <Route path={'/products'} component={Products} />
          <Route path={'/Addedproducts'} component={AddedProducts} />
          <Route path={'*'} component={NotFound} />
      </Switch>
        </Context>
    </>
  );
}

export default Root