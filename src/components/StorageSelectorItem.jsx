import React from 'react';
import PropTypes from 'prop-types';
import '../styles/StorageSelector.css';

function StorageSelectorItem(props) {
  StorageSelectorItem.proptTypes = {
    sId: PropTypes.number.isRequired,
    sName: PropTypes.string.isRequired,
    showAction: PropTypes.func.isRequired,
    editAction: PropTypes.func.isRequired,
  }

  return (
    <li className="StorageSelector">
      <button className="Block" onClick={props.showAction}>
        <p>{props.sName}</p>
      </button>
      <button className="Round" onClick={() => props.editAction(Number(props.sId), props.sName)}>
        i
      </button>
    </li>
  );
}

export default StorageSelectorItem;
