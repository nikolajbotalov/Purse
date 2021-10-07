import React from 'react';
import { Route } from 'react-router';

import { BalancePage, EditBalancePage, HomePage, NewBalancePage, PaidPage } from './pages';

const App = () => {
  return (
    <div className="wrapper">
      <Route path="/" component={HomePage} exact />
      <Route path="/newbalance" component={NewBalancePage} exact />
      <Route path="/editbalancepage" component={EditBalancePage} exact />
      <Route path="/balancepage" component={BalancePage} />
      <Route path="/paidpage" component={PaidPage} />
    </div>
  );
};

export default App;
