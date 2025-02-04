import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Tutup
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
