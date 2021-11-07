import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  // removeSourceOfBalance,
  // renameSourceOfBalance,
  updateTotalBalance,
} from "../redux/actions/sources";
import { editItem } from "../redux/actions/balanceItems";
import { AuthContext } from "../context/AuthContext";
import {
  BalanceInput,
  Button,
  // Confirm,
  Description,
  Error,
  Header,
} from "../components";

const EditItemBalancePage = ({ location }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector(({ budgetReducer }) => budgetReducer.errorText);
  const { id, itemBalance, itemName, type, source } = location.state;
    const { token } = React.useContext(AuthContext);
  const [messageError, setMessageError] = React.useState("");
  //   const [showModal, setShowModal] = React.useState(false);
  const [editedItem, setEditedItem] = React.useState({
    itemName: "",
    price: "",
  });

  const getEditedItem = (e) => {
    setMessageError("");
    setEditedItem({
      ...editedItem,
      [e.target.name]: e.target.value,
    });
  };

  // const showConfirmModalHandler = () => {
  //   setShowModal(true);
  // };

  const editItemHandler = () => {
    const { itemName, price } = editedItem;
    dispatch(editItem({ _id: id, itemName, price }));
    // dispatch(updateTotalBalance({ id: source, link: type, price}));

    if (itemName !== "" && price !== "") {
      history.push('/'); 
    }
  };

  //   const removeHandler = async () => {
  //     await dispatch(removeAllItems({ id }));
  //     await dispatch(
  //       updateTotalBalance({
  //         balance,
  //         changeSign: "reduce",
  //         token: { Authorization: `Bearer ${token}` },
  //       })
  //     );
  //     await dispatch(removeSourceOfBalance({ id }));
  //     history.push("/");
  //   };

  React.useEffect(() => {
    setMessageError(error);
  }, [error]);

  return (
    <div>
      <Header
        backBtnText="назад"
        saveBtnText="сохранить"
        prevPage="/"
        saveHandle={editItemHandler}
      />
      <BalanceInput
        placeholder={itemName}
        name="itemName"
        classname="balance-input"
        onChange={getEditedItem}
      />
      <Description
        text="Измените название предмета для источника счета"
        classname="balance-input__description"
      />
      <BalanceInput
        placeholder={itemBalance}
        name="price"
        classname="balance-input"
        onChange={getEditedItem}
      />
      <Description
        text="Измените сумму для источника счета"
        classname="balance-input__description"
      />
      <Error errorText={messageError} />
      <div className="list-controller">
        <Button
          btnText="удалить предмет"
          //   onClick={showConfirmModalHandler}
          classname="remove"
        />
      </div>
      {/* {showModal ? (
        <Confirm
          btnConfirm={removeHandler}
          btnCancel={() => setShowModal(false)}
          text="удалить источник баланса"
        />
      ) : null} */}
    </div>
  );
};

export default EditItemBalancePage;
