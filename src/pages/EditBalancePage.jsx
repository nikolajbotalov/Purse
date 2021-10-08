import React from 'react';
import { useDispatch } from 'react-redux';

import { editBalanceItem, deleteBalanceItem } from '../redux/actions/newBalanceItem';
import { BalanceInput, Button, Description, Header } from '../components';
import { Link } from 'react-router-dom';

// TODO: Написать редирект для кнопки удаления, стилизовать кнопку, превратив в компонент

const EditBalancePage = ({ location }) => {
  const dispatch = useDispatch();
  const { id, balanceName, balance } = location.state;
  const [newName, setNewName] = React.useState(null);

  const changeNameHandler = (e) => {
    setNewName(e.target.value);
  };

  const editBalanceName = () => {
    dispatch(editBalanceItem({ newName, balanceName }));
  };

  const removeBalanceItem = () => {
    dispatch(deleteBalanceItem({ id, balance }));
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
      <div className="list-controller">
        <Link to="/">
          <Button btnText="удалить список" onClick={removeBalanceItem} classname="remove" />
        </Link>
      </div>
    </div>
  );
};

export default EditBalancePage;
