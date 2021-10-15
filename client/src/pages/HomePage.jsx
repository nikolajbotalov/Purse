import React from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { HomeHeader, BalanceBlock, BalanceItem } from '../components';

// TODO: подумать на реализации подсчета общего баланса

const Home = () => {
  const { token } = React.useContext(AuthContext);
  const totalBalance = 0;
  const { request } = useHttp();
  const [sourceBalance, setSourceBalance] = React.useState(null);

  const fetchedSourceBalance = React.useCallback(async () => {
    try {
      const data = await request('/api/sourcebalance/getsourceofbalance', 'GET', null, {
        Authorization: `Bearer ${token}`,
      });
      setSourceBalance(data);
    } catch (e) {}
  }, [token, request]);

  React.useEffect(() => {
    fetchedSourceBalance();
  }, [fetchedSourceBalance]);

  return (
    <div>
      <HomeHeader />
      <BalanceBlock classname="home" balance={totalBalance} />
      {sourceBalance &&
        sourceBalance.map((source) => {
          return (
            <Link
              key={source._id}
              to={{
                pathname: '/balancepage',
                state: {
                  id: source._id,
                  balanceName: source.balanceName,
                  balance: source.balance,
                },
              }}>
              <BalanceItem key={source.id} name={source.balanceName} balance={source.balance} />
            </Link>
          );
        })}
    </div>
  );
};

export default Home;
