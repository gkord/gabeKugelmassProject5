import React from 'react'

const Modal = props => {
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? "translateY(0vh)" : "translateY(-50vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
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