import React, { useCallback } from 'react';
// import styles from './Modal.module.css';
import { RiCloseLine } from "react-icons/ri";


const Modal = React.memo(({ tripId, deleteTrip, setIsOpen }) => {
  const handleDelete = useCallback(() => {
    setIsOpen(false);
    deleteTrip(tripId);
  }, [deleteTrip, setIsOpen, tripId]);

  const darkBG = {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100vw',
    height: '100vh',
    zIndex: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  };
  
  const centered = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  
  const modal = {
    width: '250px',
    height: '170px',
    background: 'white',
    color: 'white',
    zIndex: 10,
    borderRadius: '16px',
    boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.04)',
  };
  
  const modalHeader = {
    height: '50px',
    background: 'white',
    overflow: 'hidden',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  };
  
  const heading = {
    margin: 0,
    padding: '10px',
    color: '#2c3e50',
    fontWeight: 500,
    fontSize: '18px',
    textAlign: 'center',
  };
  
  const modalContent = {
    padding: '10px',
    fontSize: '14px',
    color: '#2c3e50',
    textAlign: 'center',
  };
  
  const modalActions = {
    position: 'absolute',
    bottom: '2px',
    marginBottom: '10px',
    width: '100%',
  };
  
  const actionsContainer = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };
  
  const closeBtn = {
    cursor: 'pointer',
    fontWeight: 500,
    padding: '4px 8px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '18px',
    color: '#2c3e50',
    background: 'white',
    transition: 'all 0.25s ease',
    boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.06)',
    position: 'absolute',
    right: '0',
    top: '0',
    alignSelf: 'flex-end',
    marginTop: '-7px',
    marginRight: '-7px',
  };
  
  const deleteBtn = {
    marginTop: '10px',
    cursor: 'pointer',
    fontWeight: 500,
    padding: '11px 28px',
    borderRadius: '12px',
    fontSize: '0.8rem',
    border: 'none',
    color: '#fff',
    background: '#ff3e4e',
    transition: 'all 0.25s ease',
  };
  
  const cancelBtn = {
    marginTop: '10px',
    cursor: 'pointer',
    fontWeight: 500,
    padding: '11px 28px',
    borderRadius: '12px',
    fontSize: '0.8rem',
    border: 'none',
    color: '#2c3e50',
    background: '#fcfcfc',
    transition: 'all 0.25s ease',
  };
  
  const hoverStyles = {
    closeBtn: {
      ':hover': {
        boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.04)',
        transform: 'translate(-4px, 4px)',
      },
    },
    deleteBtn: {
      ':hover': {
        boxShadow: '0 10px 20px -10px rgba(255, 62, 78, 0.6)',
        transform: 'translateY(-5px)',
        background: '#ff3e4e',
      },
    },
    cancelBtn: {
      ':hover': {
        boxShadow: 'none',
        transform: 'none',
        background: 'whitesmoke',
      },
    },
  };
  console.log('deleteTrip in modal', deleteTrip);
  console.log('tripId', tripId)

  return (
    <>
      <div
        styles={darkBG}
        onClick={() => setIsOpen(false)} />
      <div style={centered}>
        <div style={modal}>
          <div style={modalHeader}>
            <h5 style={heading}>Dialog</h5>
          </div>
          <button 
            style={closeBtn}
            onClick={() => setIsOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div style={modalContent}>
            Are you sure you want to delete the item?
          </div>
          <div style={modalActions}>
            <div style={actionsContainer}>
              <button 
                style={deleteBtn}
                onClick={handleDelete}
              >
                Delete 
              </button>
              <button
                style={cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
          // ...
        </div>
      </div>
    </>
  )
});

export default Modal;