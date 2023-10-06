import React,{ useCallback } from 'react';
// import styles from './Modal.module.css';
import { RiCloseLine } from "react-icons/ri";
import "../../styles/Modal.css";

const ModalDelete = ({ handleClose, handleConfirm, confirmMessage }) => {

  const onConfirm = useCallback(() => {
    handleConfirm();
    handleClose();
  }, [handleConfirm, handleClose])

  return (
    <>
      <div className="dark-bg" onClick={handleClose}></div>
      <div className="centered">
        <div className="modal">
          <div className="modal-header">
            <h5 className="heading">WARNING</h5>
          </div>
          <button
            className="close-btn"
            onClick={handleClose}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modal-content">
            Are you sure you want to delete the item?
          </div>
          <div className="modal-actions">
            <div className="actions-container">
              <button
                className="delete-btn"
                onClick={onConfirm}
              >
                {confirmMessage}
              </button>
              <button
                className="cancel-btn"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default ModalDelete;