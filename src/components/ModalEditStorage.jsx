import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';

function ModalEditStorage(props) {
  ModalEditStorage.propTypes = {
    show: PropTypes.bool.isRequired,
    sName: PropTypes.string.isRequired,
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
        <h1>Settings for storage "{props.sName}".</h1>

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
            disabled={props.sName === ''}
          />
        </form>

        <h2>Delete storage</h2>
        <p>To delete the storage and all its content, click the button below.
        Items and units are not deleted.</p>
        <button onClick={props.deleteAction} className="Modal">
          Delete Storage
        </button>
      </div>
    </div>
  );
}

export default ModalEditStorage;
