import React from 'react';
import PropTypes from 'prop-types';
import '../styles/StorageSelector.css';

function StorageSelectorItem(props) {
  StorageSelectorItem.proptTypes = {
    sName: PropTypes.string.isRequired,
    sId: PropTypes.number.isRequired
  }
  
  return (
    <li className="StorageSelector" onClick={function() { alert('click '.concat(props.sId)); }}>
      {props.sName}
    </li>
  );
}

export default StorageSelectorItem;
