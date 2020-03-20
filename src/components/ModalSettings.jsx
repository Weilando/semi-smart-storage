import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';

function ModalSettings(props) {
  ModalSettings.propTypes = {
    closeAction: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
  }

  return (
    <div className={'modal '.concat(props.show ? 'show' : 'hide')}>
      <div className="modal-main">
        <span className="close" onClick={props.closeAction}>&times;</span>
        <h1>Settings</h1>
        <p>Settings may be added later.</p>
      </div>
    </div>
  );
}

export default ModalSettings;
