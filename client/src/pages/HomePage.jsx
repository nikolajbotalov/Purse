import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUserSources, getUserTotalBalance } from '../redux/actions/sources';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { BalanceBlock, BalanceItem, HomeHeader, Preloader } from '../components';

const Home = () => {
  const dispatch = useDispatch();
  const { token } = React.useContext(AuthContext);
  const { loading } = useHttp();
  const sourceBalance = useSelector(({ budgetReducer }) => budgetReducer.sourceOfBalance);
  const totalBalance = useSelector(({ budgetReducer }) => budgetReducer.totalBalance);

  React.useEffect(() => {
    dispatch(getUserSources({ Authorization: `Bearer ${token}` }));
    dispatch(getUserTotalBalance({ Authorization: `Bearer ${token}` }));    
  }, [dispatch, token]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <HomeHeader />
      <BalanceBlock classname="home" balance={totalBalance} />
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
