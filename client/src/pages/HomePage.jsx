import React from 'react';
import { Link } from 'react-router-dom';

import { sourceBalanceAPI, userAPI } from '../api';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { BalanceBlock, BalanceItem, HomeHeader, Preloader } from '../components';

const Home = () => {
  const { token } = React.useContext(AuthContext);
  const { loading } = useHttp();
  const [sourceBalance, setSourceBalance] = React.useState(null);
  const [userBalance, setUserBalance] = React.useState(0);

  const getSourceBalance = React.useCallback(async () => {
    await sourceBalanceAPI
      .getAll({ Authorization: `Bearer ${token}` })
      .then(({ data }) => setSourceBalance(data))
      .catch();
  }, [token]);

  const getUserBalance = React.useCallback(async () => {
    await userAPI
      .getTotalBalance({ Authorization: `Bearer ${token}` })
      .then(({ data }) => setUserBalance(data))
      .catch();
  }, [token]);

  React.useEffect(() => {
    getSourceBalance();
    getUserBalance();
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
