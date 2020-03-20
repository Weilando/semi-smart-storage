import React from 'react';
import PropTypes from 'prop-types';
import ModalListItem from './ModalListItem';
import ModalListNewItem from './ModalListNewItem';
import { ModalMode } from '../constants/modal';
import '../styles/Modal.css';

function unpackList(list, editAction) {
  const keys = [...Array(list.length).keys()]; // Array with keys from 0 to entries.length

  return keys.map((currKey) =>
    <ModalListItem
      key={list[currKey].id}
      obj={list[currKey]}
      editAction={editAction}
    />
  );
}

function ModalList(props) {
  ModalList.propTypes = {
    show: PropTypes.bool.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape(
        {id: PropTypes.number.isRequired, name: PropTypes.string.isRequired}
      )
    ).isRequired,
    mode: PropTypes.oneOf([ModalMode.ITEM, ModalMode.UNIT]),
    addAction: PropTypes.func.isRequired,
    closeAction: PropTypes.func.isRequired,
    editAction: PropTypes.func.isRequired,
  }

  const list = unpackList(props.list, props.editAction);

  return(
    <div className={'modal '.concat(props.show ? 'show' : 'hide')}>
      <div className="modal-main">
        <span className="close" onClick={props.closeAction}>&times;</span>

        <h1>Settings for {props.mode}</h1>
        <p>Click the edit-button next to the {props.mode} you want to edit and perform your changes.</p>

        <ul className="Modal">
          {list}
          <ModalListNewItem addAction={props.addAction}/>
        </ul>
      </div>
    </div>
  );
}

export default ModalList;
