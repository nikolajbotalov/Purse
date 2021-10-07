import React from 'react';
import { useDispatch } from 'react-redux';

import { editBalanceItem, deleteBalanceItem } from '../redux/actions/newBalanceItem';
import { BalanceInput, Description, Header } from '../components';

const EditBalancePage = ({ location }) => {
  const dispatch = useDispatch();
  const { balanceName } = location.state;
  const [newName, setNewName] = React.useState(null);

  const changeNameHandler = (e) => {
    setNewName(e.target.value);
  };

  const editBalanceName = () => {
    dispatch(editBalanceItem({ newName, balanceName }));
  };

  const removeBalanceItem = () => {
    dispatch(deleteBalanceItem(balanceName));
  };

  return (
    <div>
      <Header
        backBtnText="назад"
        saveBtnText="сохранить"
        prevPage="/"
        saveHandle={editBalanceName}
      />
      <BalanceInput
        placeholder={balanceName}
        classname="balance-input"
        onChange={changeNameHandler}
      />
      <Description
        text="Измените название списка для счета"
        classname="balance-input__description"
      />
      <button onClick={removeBalanceItem}>delete</button>
    </div>
  );
};

export default EditBalancePage;
