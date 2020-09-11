import React, { ReactElement } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NonAuthRoutes, AuthRoutes} from '../types/enums/app-routes.enum';


// Import Components
import Navbar from '../components/TheNavbar';
import TheFooter from '../components/TheFooter';
import AuthRoute from '../routes'


// Import Pages
import HomePage from '../pages/HomePage';
import GamePage from '../pages/GamePage';
import SelectPage from '../pages/SelectPage';
import RegisterCheckoutPage from '../pages/Register&CheckoutPage';

const PickaScore: React.FC = (): ReactElement => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route 
            exact path={NonAuthRoutes.HOME} 
            component={HomePage} 
          />
          {/* <Route 
            exact path={AppRoutes.HOME} 
            component={HomePage} 
          />
            <Route 
            exact path={AppRoutes.SELECT} 
            component={SelectPage} 
          />
            <Route 
            exact path={AppRoutes.GAME} 
            component={GamePage} 
          />
          <Route 
            exact path={AppRoutes.REGISTER} 
            component={RegisterCheckoutPage} 
          /> */}
          <AuthRoute 
            path={AuthRoutes.SELECT} 
            Component={SelectPage}
          />
          <AuthRoute
            exact path={AuthRoutes.GAME} 
            Component={GamePage}
          />
          <AuthRoute
            exact path={AuthRoutes.REGISTER} 
            Component={RegisterCheckoutPage}
          />
        </Switch>
        <TheFooter/>
      </Router>
    </div>
  )
}

export default PickaScore
