import React from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { BalanceBlock, BalanceItem, HomeHeader, Preloader } from '../components';

const Home = () => {
  const { token } = React.useContext(AuthContext);
  const { loading, request } = useHttp();
  const [sourceBalance, setSourceBalance] = React.useState(null);
  const [userBalance, setUserBalance] = React.useState(0);

  const getSourceBalance = React.useCallback(async () => {
    try {
      const data = await request('/api/sourcebalance/getsourceofbalance', 'GET', null, {
        Authorization: `Bearer ${token}`,
      });
      setSourceBalance(data);
    } catch (e) {}
  }, [token, request]);

  const getUserBalance = React.useCallback(async () => {
    try {
      const balance = await request('/api/user/getuserbalance', 'POST', null, {
        Authorization: `Bearer ${token}`,
      });
      setUserBalance(balance);
    } catch ({ message }) {
      console.log(message);
    }
  }, [token, request]);

  React.useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      getSourceBalance();
      getUserBalance();
    }

    return () => {
      unmounted = true;
    };
  }, [getSourceBalance, getUserBalance]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <HomeHeader />
      <BalanceBlock classname="home" balance={userBalance} />
      {!loading &&
        sourceBalance &&
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
