import React from 'react';

import { BalanceBlock, Header } from '../components';

const PaidPage = () => {
  return (
    <div>
      <Header backBtnText="отмена" saveBtnText="сохранить" prevPage="/" />
      <BalanceBlock classname="cost" />
      <div>
        <p>Описание</p>
        <input type="text" placeholder="Введите описания расхода" />
      </div>
    </div>
  );
};

export default PaidPage;
