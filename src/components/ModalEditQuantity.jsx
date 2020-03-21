import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';

function ModalEditQuantity(props) {
  ModalEditQuantity.propTypes = {
    show: PropTypes.bool.isRequired,
    quantity: PropTypes.number.isRequired,
    buffer: PropTypes.number.isRequired,
    changeAction: PropTypes.func.isRequired,
    closeAction: PropTypes.func.isRequired,
    updateAction: PropTypes.func.isRequired,
  }

  return(
    <div className={'modal '.concat(props.show ? 'show' : 'hide')}>
      <div className="modal-main">
        <span className="close" onClick={props.closeAction}>&times;</span>
        <h1>Change quantity</h1>
        <form onSubmit={props.updateAction} className="Modal">
          <input
            type="number"
            min="0"
            step="0.1"
            className="Modal"
            value={props.buffer}
            onChange={props.changeAction}
          />
          <input
            type="submit"
            className="Modal"
            value="Update quantity"
          />
        </form>
      </div>
    </div>
  );
}

export default ModalEditQuantity;
