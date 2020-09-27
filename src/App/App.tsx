import React, { ReactElement } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NonAuthRoutes, AuthRoutes} from '../types/enums/app-routes.enum';


// Import Components
import Navbar from '../components/TheNavbar';
import TheFooter from '../components/TheFooter';
import AuthRoute from '../routes'


// Import Pages
import HomePage from '../pages/HomePage';
import SelectPage from '../pages/SelectPage';
import RegisterCheckoutPage from '../pages/Register&CheckoutPage';
import ConfirmationPage from '../pages/ConfirmationPage';
import InfoPage from '../pages/InfoPage';


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
          <AuthRoute 
            path={AuthRoutes.SELECT} 
            Component={SelectPage}
          />
          <AuthRoute
            path={AuthRoutes.REGISTER} 
            Component={RegisterCheckoutPage}
          />
          <AuthRoute 
            path = {AuthRoutes.CONFIRMATION}
            Component={ConfirmationPage}
          />
          <Route 
            path = {NonAuthRoutes.INFO}
            component = {InfoPage}
          />
        </Switch>
        <TheFooter/>
      </Router>
    </div>
  )
}

export default PickaScore
