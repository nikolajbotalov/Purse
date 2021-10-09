import React from 'react';
import { Route } from 'react-router';

import {
  BalancePage,
  ChangeBalancePage,
  EditSourceBalancePage,
  HomePage,
  NewSourceBalancePage,
} from './pages';

const App = () => {
  return (
    <div className="wrapper">
      <Route path="/" component={HomePage} exact />
      <Route path="/newsourcebalancepage" component={NewSourceBalancePage} exact />
      <Route path="/editsourcebalancepage" component={EditSourceBalancePage} exact />
      <Route path="/balancepage" component={BalancePage} />
      <Route path="/changebalancepage" component={ChangeBalancePage} />
    </div>
  );
};

export default App;
