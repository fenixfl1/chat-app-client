import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as path from './constant/routes'
import Login from './pages/Login'
import ProtectedRouterWrapper from './components/ProtectedRouterWrapper'
import HomePage from './pages/HomePage'

const Routes = (): React.ReactElement => {
  return (
    <Router>
      <Switch>
        <Route exact path={path.PATH_LOGIN} component={Login} />
        <ProtectedRouterWrapper>
          <Route exact path={'/'} component={HomePage} />
        </ProtectedRouterWrapper>
      </Switch>
    </Router>
  )
}

export default Routes
