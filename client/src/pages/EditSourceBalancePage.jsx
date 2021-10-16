import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useHttp } from '../hooks/http.hook';
// import { editSourceBalance } from '../redux/actions/BalanceActions';
import { BalanceInput, Button, Description, Header } from '../components';

const EditSourceBalancePage = ({ location }) => {
  const history = useHistory();
  const { request } = useHttp();
  const dispatch = useDispatch();
  const { id, balanceName } = location.state;
  const [newSourceBalanceName, setNewSourceBalanceName] = React.useState(null);

  const getNewSourceBalanceName = (e) => {
    setNewSourceBalanceName(e.target.value);
  };

  const editSourceBalanceHandler = async () => {
    try {
      await request('/api/sourcebalance/renamesourceofbalance', 'PATCH', {
        _id: id,
        balanceName: newSourceBalanceName,
      });
    } catch (e) {}
    // dispatch(editSourceBalance({ newSourceBalanceName, balanceName }));
  };

  const removeSourceBalanceHandler = async () => {
    try {
      await request('/api/sourcebalance/removesourceofbalance', 'DELETE', {
        _id: id,
      });
      history.push('/');
    } catch (e) {}
  };

  return (
    <div>
      <Header
        backBtnText="назад"
        saveBtnText="сохранить"
        prevPage="/"
        saveHandle={editSourceBalanceHandler}
      />
      <BalanceInput
        placeholder={balanceName}
        classname="balance-input"
        onChange={getNewSourceBalanceName}
      />
      <Description
        text="Измените название списка для счета"
        classname="balance-input__description"
      />
      <div className="list-controller">
        <Button btnText="удалить список" onClick={removeSourceBalanceHandler} classname="remove" />
      </div>
    </div>
  );
};

export default EditSourceBalancePage;
