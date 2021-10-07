import React from 'react';
import { useDispatch } from 'react-redux';

import { editBalanceItem, deleteBalanceItem } from '../redux/actions/newBalanceItem';
import { BalanceInput, Description, Header } from '../components';

// TODO: Написать редирект для кнопки удаления, стилизовать кнопку, превратив в компонент

const EditBalancePage = ({ location }) => {
  const dispatch = useDispatch();
  const { id, balanceName } = location.state;
  const [newName, setNewName] = React.useState(null);

  const changeNameHandler = (e) => {
    setNewName(e.target.value);
  };

  const editBalanceName = () => {
    dispatch(editBalanceItem({ newName, balanceName }));
  };

  const removeBalanceItem = () => {
    dispatch(deleteBalanceItem(id));
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
