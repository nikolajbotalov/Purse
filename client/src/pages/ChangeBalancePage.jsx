import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { createSourceItem, updateItemBalance } from '../redux/actions/balanceItems';
import { updateTotalBalance } from '../redux/actions/sources';
import { AuthContext } from '../context/AuthContext';
import { BalanceBlock, BalanceInput, Error, Header } from '../components';

const ChangeBalancePage = ({ location }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector(({budgetReducer}) => budgetReducer.errorText);
  const { token } = React.useContext(AuthContext);
  const { balance, link, id } = location.state;
  const [messageError, setMessageError] = React.useState(error);
  const [sourceItem, setSourceItem] = React.useState({
    itemName: '',
    price: '',
  });

  const getChangeData = (e) => {
    setMessageError('');
    setSourceItem({ ...sourceItem, [e.target.name]: e.target.value });
  };

  const changeUserData = () => {
    const { itemName, price } = sourceItem;
    dispatch(createSourceItem({id, itemName, price, link, token: { Authorization: `Bearer ${token}` } }));
    dispatch(updateItemBalance({id, link, price}));
    dispatch(updateTotalBalance({balance: price, changeSign: null, link, token: { Authorization: `Bearer ${token}` }}))

    if (itemName !== '') {
      history.push('/')
    } else {
      return null
    }
  };

  React.useEffect(() => {
    setMessageError(error)
  }, [error])

  return (
    <div>
      <Header
        backBtnText="отмена"
        saveBtnText="сохранить"
        prevPage="/"
        saveHandle={changeUserData}
      />
      <BalanceBlock classname={link} balance={balance} />
      <div className="description">
        <BalanceInput
          name="itemName"
          placeholder={`Введите описание ${link === 'cost' ? 'расхода' : 'дохода'}`}
          onChange={getChangeData}
        />
        <BalanceInput name="price" placeholder="Введите сумму" onChange={getChangeData} />
        <Error errorText={messageError} />
      </div>
    </div>
  );
};

export default ChangeBalancePage;
