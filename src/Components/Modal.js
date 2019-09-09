import React from "react";

const Modal = props => {
  return (
    <div>
      <div className="modal-wrapper">
        <div className="modal-header">
          <span className="close-modal-btn" onClick={props.close}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <p>{props.lyrics}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
