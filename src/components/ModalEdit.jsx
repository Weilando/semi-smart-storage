import React from 'react';
import PropTypes from 'prop-types';
import { ModalMode } from '../constants/modal';
import '../styles/Modal.css';

function ModalEdit(props) {
  ModalEdit.propTypes = {
    show: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    mode: PropTypes.oneOf([ModalMode.ITEM, ModalMode.UNIT, ModalMode.STORAGE]),
    buffer: PropTypes.string.isRequired,
    changeAction: PropTypes.func.isRequired,
    closeAction: PropTypes.func.isRequired,
    deleteAction: PropTypes.func.isRequired,
    updateAction: PropTypes.func.isRequired,
  }

  return(
    <div className={'modal '.concat(props.show ? 'show' : 'hide')}>
      <div className="modal-main">
        <span className="close" onClick={props.closeAction}>&times;</span>
        <h1>Settings for {props.mode} "{props.name}".</h1>


        <h2>Update name</h2>
        <form onSubmit={props.updateAction} className="Modal">
          <input
            type="text"
            className="Modal"
            value={props.buffer}
            onChange={props.changeAction}
          />
          <br/>
          <input
            type="submit"
            className="Modal"
            value="Update name"
            disabled={props.name === ''}
          />
        </form>

        <h2>Delete {props.mode}</h2>
        <p>
          {props.mode === ModalMode.STORAGE ? 'To delete the storage and all its content, click the button below. Items and units are not deleted.'
          : 'To delete the '.concat(props.mode, ', click the button below. All occurances in every storage will be deleted, too.')}
        </p>
        <button onClick={props.deleteAction} className="Modal">
          Delete {props.mode}
        </button>
      </div>
    </div>
  );
}

export default ModalEdit;
