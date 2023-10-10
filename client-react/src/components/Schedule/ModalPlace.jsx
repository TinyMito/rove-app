import React,{ useCallback } from 'react';
// import styles from './Modal.module.css';
import { RiCloseLine } from "react-icons/ri";
import Place from '../Place/Place'
import '../../styles/Modal.scss';

const ModalPlace = ({ placeId, handleClose }) => {

  return (
    <>
      <div 
        className="dark-bg" 
        onClick={handleClose}
      />
      <div className="centered-place">
        <button 
          className="close-btn"
          onClick={handleClose}
        >
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>          
        <Place 
          placeId={placeId} 
          containerClassName='modal-place-container' 
          hideAddTripButton
        />
      </div>
    </>
  )
};

export default ModalPlace;