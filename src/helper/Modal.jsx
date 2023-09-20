import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        onClick={onClose}
      ></div>
      <div className="modal-container bg-white w-[1318px] h-[458px] mx-auto rounded-[33px] shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6 flex flex-col h-full justify-between">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
