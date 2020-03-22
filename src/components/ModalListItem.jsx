import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';

function ModalListItem(props) {
  ModalListItem.propTypes = {
    obj: PropTypes.shape(
      {id: PropTypes.number.isRequired, name: PropTypes.string.isRequired}
    ).isRequired,
    editAction: PropTypes.func.isRequired,
  }

  return (
    <li className="Modal">
      <button className="Block"><p>{props.obj.name}</p></button>
      <button className="Round" onClick={() => props.editAction(props.obj)}>
        i
      </button>
    </li>
  );
}

export default ModalListItem;
