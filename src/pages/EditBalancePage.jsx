import React from 'react';
import { useDispatch } from 'react-redux';

import { editSourceBalance, removeSourceBalance } from '../redux/actions/newBalanceItem';
import { BalanceInput, Button, Description, Header } from '../components';
import { Link } from 'react-router-dom';

// TODO: Написать редирект для кнопки удаления, стилизовать кнопку, превратив в компонент

const EditBalancePage = ({ location }) => {
  const dispatch = useDispatch();
  const { id, balanceName, balance } = location.state;
  const [newSourceBalanceName, setNewSourceBalanceName] = React.useState(null);

  const getNewSourceBalanceName = (e) => {
    setNewSourceBalanceName(e.target.value);
  };

  const editSourceBalanceHandler = () => {
    dispatch(editSourceBalance({ newSourceBalanceName, balanceName }));
  };

  const removeSourceBalanceHandler = () => {
    dispatch(removeSourceBalance({ id, balance }));
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
        <Link to="/">
          <Button
            btnText="удалить список"
            onClick={removeSourceBalanceHandler}
            classname="remove"
          />
        </Link>
      </div>
    </div>
  );
};

export default EditBalancePage;
