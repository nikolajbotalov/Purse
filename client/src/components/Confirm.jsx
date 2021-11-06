import React from "react";

const Confirm = ({ btnConfirm, btnCancel, text }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <span>{`Вы уверены, что хотите ${text}?`}</span>
        <div className="modal-control">
          <button className="confirm" onClick={btnConfirm}>да</button>
          <button className="cancel" onClick={btnCancel}>нет</button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
