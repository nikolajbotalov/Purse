import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getSourceItems } from "../redux/actions/balanceItems";
import { Header, BalanceBlock, BalanceItem } from "../components";

const BalancePage = ({ location }) => {
  const dispatch = useDispatch();
  const balanceItem = useSelector(
    ({ budgetReducer }) => budgetReducer.balanceItems
  );
  const { id, balanceName, balance } = location.state;

  React.useEffect(() => {
    dispatch(getSourceItems(id));
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
      <BalanceBlock
        id={id}
        hideBtns={true}
        balance={balance}
        balanceName={balanceName}
      />
      {balanceItem &&
        balanceItem.map((item) => {
          return (
            <Link
              to={{
                pathname: "/edititembalancepage",
                state: {
                  id: item._id,
                  itemName: item.itemName,
                  itemBalance: item.price,
                  type: item.paidType,
                  source: item.sourceBalance,
                } 
              }}
            >
              <BalanceItem
                key={item._id}
                name={item.itemName}
                balance={item.price}
                type={item.paidType}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default BalancePage;

//
// return <BalanceItem key={item._id} name={item.itemName} balance={item.price} type={item.paidType} />;
