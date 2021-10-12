import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  AuthPage,
  BalancePage,
  ChangeBalancePage,
  EditSourceBalancePage,
  HomePage,
  NewSourceBalancePage,
  Settings,
} from './pages';

const UseRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/newsourcebalancepage" component={NewSourceBalancePage} exact />
        <Route path="/editsourcebalancepage" component={EditSourceBalancePage} exact />
        <Route path="/balancepage" component={BalancePage} />
        <Route path="/changebalancepage" component={ChangeBalancePage} />
        <Route path="/settings" component={Settings} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/authpage" component={AuthPage} exact />
      <Redirect to="/authpage" />
    </Switch>
  );
};

export default UseRoutes;
