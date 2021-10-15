import React from 'react';

import { useHttp } from '../hooks/http.hook';
import { Header, BalanceBlock, BalanceItem } from '../components';

const BalancePage = ({ location }) => {
  const [paidItems, setPaidItems] = React.useState(null);
  const { request } = useHttp();
  const { id, balanceName, balance } = location.state;

  const fetchPaidItems = React.useCallback(async () => {
    try {
      const data = await request('/api/balanceitem/getpaiditems', 'POST', { id });
      setPaidItems(data);
    } catch (e) {}
  }, [id, request]);

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
