import React from 'react';
import { Route } from 'react-router';

import { Home, NewBalance } from './pages';

const App = () => {
  return (
    <div className="wrapper">
      <Route path="/" component={Home} exact />
      <Route path="/newbalance" component={NewBalance} exact />
    </div>
  );
};

export default App;
