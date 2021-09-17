import React from 'react';
import { Route } from 'react-router';

import { BalancePage, HomePage, NewBalancePage } from './pages';

const App = () => {
  return (
    <div className="wrapper">
      <Route path="/" component={HomePage} exact />
      <Route path="/newbalance" component={NewBalancePage} exact />
      <Route path="/balancepage" component={BalancePage} />
    </div>
  );
};

export default App;
