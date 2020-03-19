import React from 'react';
import PropTypes from 'prop-types';
import '../styles/StorageSelector.css';

function StorageSelectorItem(props) {
  StorageSelectorItem.propTypes = {
    storage: PropTypes.shape(
      {id: PropTypes.number.isRequired, name: PropTypes.string.isRequired}
    ).isRequired,
    active: PropTypes.bool.isRequired,
    editAction: PropTypes.func.isRequired,
    showAction: PropTypes.func.isRequired,
  }

  return (
    <li className={props.active ? "StorageSelectorActive" : "StorageSelector"}>
      <button className="Block" onClick={() => props.showAction(props.storage)}>
        <p className={props.active ? "Active" : ""}>{props.storage.name}</p>
      </button>
      <button className="Round" onClick={() => props.editAction(Number(props.storage.id), props.storage.name)}>
        i
      </button>
    </li>
  );
}

export default StorageSelectorItem;
