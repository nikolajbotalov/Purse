import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  // removeSourceOfBalance,
  // renameSourceOfBalance,
  // updateTotalBalance,
} from "../redux/actions/sources";
import { removeItem } from "../redux/actions/balanceItems";
// import { AuthContext } from "../context/AuthContext";
import {
  // BalanceInput,
  Button,
  // Confirm,
  // Description,
  // Error,
  Header,
} from "../components";

const EditItemBalancePage = ({ location }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector(({ budgetReducer }) => budgetReducer.errorText);
  const { id, itemBalance, itemName, type, source } = location.state;
  // const { token } = React.useContext(AuthContext);
  // const [messageError, setMessageError] = React.useState("");
  //   const [showModal, setShowModal] = React.useState(false);
  // const [editedItem, setEditedItem] = React.useState({
  //   itemName: "",
  //   price: "",
  // });

  // const getEditedItem = (e) => {
  //   setMessageError("");
  //   setEditedItem({
  //     ...editedItem,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const showConfirmModalHandler = () => {
  //   setShowModal(true);
  // };

  // const editItemHandler = () => {
  //   const { itemName, price } = editedItem;
  //   dispatch(editItem({ _id: id, itemName, price }));
  //   dispatch(updateItemBalance({ id: source, link: type, price }));
  //   // dispatch(
  //   //   updateTotalBalance({
  //   //     balance: price,
  //   //     changeSign: null,
  //   //     link: type,
  //   //     token: { Authorization: `Bearer ${token}` },
  //   //   })
  //   // );

  //   if (itemName !== "" && price !== "") {
  //     history.push("/");
  //   }
  // };

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

  const removeHandler = async () => { 
    await dispatch(removeItem(id));
  }

  return (
    <div>
      <Header
        backBtnText="назад"
        prevPage="/"       
      />
      <div className="list-controller edit-page">
        <Button
          btnText="удалить предмет"
            onClick={removeHandler}
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
