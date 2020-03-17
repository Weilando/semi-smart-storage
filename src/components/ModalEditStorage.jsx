import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';

function ModalEditStorage(props) {
  ModalEditStorage.propTypes = {
    show: PropTypes.bool.isRequired,
    sName: PropTypes.string.isRequired,
    buffer: PropTypes.string.isRequired,
    closeAction: PropTypes.func.isRequired,
    changeAction: PropTypes.func.isRequired,
    updateAction: PropTypes.func.isRequired,
    deleteAction: PropTypes.func.isRequired,
  }

  return(
    <div className={'modal '.concat(props.show ? 'show' : 'hide')}>
      <div className="modal-main">
        <span className="close" onClick={props.closeAction}>&times;</span>
        <p>Change things for {props.sName}.</p>
        <form onSubmit={props.updateAction}>
          <input
            type="text"
            className="StorageSelector"
            value={props.buffer}
            onChange={props.changeAction}
          />
          <input
            type="submit"
            className="StorageSelector"
            value="Update name"
            disabled={props.sName === ''}
          />
        </form>
        <button onClick={props.deleteAction}>
          Delete Storage
        </button>
      </div>
    </div>
  );
}

export default ModalEditStorage;
