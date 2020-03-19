import React from 'react';
import PropTypes from 'prop-types';
import '../styles/StorageSelector.css';

function StorageSelectorItem(props) {
  StorageSelectorItem.propTypes = {
    storage: PropTypes.shape(
      {id: PropTypes.number.isRequired, name: PropTypes.string.isRequired}
    ).isRequired,
    editAction: PropTypes.func.isRequired,
    showAction: PropTypes.func.isRequired,
  }

  return (
    <li className="StorageSelector">
      <button className="Block" onClick={props.showAction}>
        <p>{props.storage.name}</p>
      </button>
      <button className="Round" onClick={() => props.editAction(Number(props.storage.id), props.storage.name)}>
        i
      </button>
    </li>
  );
}

export default StorageSelectorItem;
