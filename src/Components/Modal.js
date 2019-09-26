import React from "react";

const Modal = props => {
  return (
    <div>
      <div className="modalWrapper w3-animate-opacity">
        <div className="modalHeader">
          <span className="closeModalButton" onClick={props.close}>
            ×
          </span>
        </div>
        <div className="modalBody">
          <p>{props.lyrics}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
