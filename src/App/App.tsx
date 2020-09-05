import React, { ReactElement } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AppRoutes as Routes} from '../types/enums/app-routes.enum';


// Import Components
import Navbar from '../components/TheNavbar';
import TheFooter from '../components/TheFooter';


// Import Pages
import HomePage from '../pages/HomePage';
import GamePage from '../pages/GamePage';
import SelectPage from '../pages/SelectPage';

const KmadaTech: React.FC = (): ReactElement => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={Routes.HOME} component={HomePage} />
          <Route exact path={Routes.GAME} component={GamePage} />
          <Route exact path={Routes.SELECT} component={SelectPage} />
        </Switch>
        <TheFooter/>
      </Router>
    </div>
  )
}

export default KmadaTech
