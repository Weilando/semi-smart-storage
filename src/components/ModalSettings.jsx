import React from 'react';
import PropTypes from 'prop-types';
import { BASEURL } from '../constants/urlConstants';
import '../styles/Modal.css';

function ModalSettings(props) {
  ModalSettings.propTypes = {
    dummy: PropTypes.bool.isRequired,
    show: PropTypes.bool.isRequired,
    closeAction: PropTypes.func.isRequired,
    switchDummyAction: PropTypes.func.isRequired,
  }

  return (
    <div className={'modal '.concat(props.show ? 'show' : 'hide')}>
      <div className="modal-main">
        <span className="close" onClick={props.closeAction}>&times;</span>
        <h1>Settings</h1>
        <h2>Information</h2>
        <p>Currently the backend-url is <i>{BASEURL}</i>.
          It can only be changed during development.</p>

        <h2>Click-dummy</h2>
        <p>This option enables fake-data to showcase the UI.
        Neither an active network connection, nor a running backend are necessary.
        Changes are not persistent.</p>
        <button name="toggle" onClick={props.switchDummyAction}>
          {(props.dummy) ? 'Switch click-dummy off' : 'Switch click-dummy on'}
        </button>
      </div>
    </div>
  );
}

export default ModalSettings;
