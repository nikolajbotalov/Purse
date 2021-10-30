import React from 'react';

import { balanceItemsAPI } from '../api';
import { Header, BalanceBlock, BalanceItem } from '../components';

const BalancePage = ({ location }) => {
  const { id, balanceName, balance } = location.state;
  const [paidItems, setPaidItems] = React.useState(null);

  const fetchPaidItems = React.useCallback(async () => {
    await balanceItemsAPI
      .getBalancetems(id)
      .then(({ data }) => setPaidItems(data))
      .catch();
  }, [id]);

  React.useEffect(() => {
    fetchPaidItems();
  }, [fetchPaidItems]);

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
      {paidItems &&
        paidItems.map((item) => {
          return <BalanceItem key={item._id} name={item.paidItemName} balance={item.price} />;
        })}
    </div>
  );
};

export default BalancePage;
