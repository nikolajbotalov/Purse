import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSourceItems } from '../redux/actions/balanceItems';
import { Header, BalanceBlock, BalanceItem } from '../components';

const BalancePage = ({ location }) => {
  const dispatch = useDispatch();
  const balanceItem = useSelector(({ budgetReducer }) => budgetReducer.balanceItems);
  const { id, balanceName, balance } = location.state;

  React.useEffect(() => {
    dispatch(getSourceItems(id))
  }, [dispatch, id]);

  return (
    <div>
      <Header
        id={id}
        backBtnText="назад"
        prevPage="/"
        balanceName={balanceName}
        balance={balance}
      />
      <BalanceBlock id={id} hideBtns={true} balance={balance} balanceName={balanceName} />
      {balanceItem &&
        balanceItem.map((item) => {
          return <BalanceItem key={item._id} name={item.itemName} balance={item.price} type={item.paidType} />;
        })}
    </div>
  );
};

export default BalancePage;
