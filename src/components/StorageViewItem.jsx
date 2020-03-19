import React from 'react';
import PropTypes from 'prop-types';

function StorageViewItem(props) {
  StorageViewItem.proptTypes = {
    iId: PropTypes.number.isRequired,
    iName: PropTypes.string.isRequired,
    iUnit: PropTypes.string.isRequired,
    iQuantity: PropTypes.number.isRequired,
    decrementAction: PropTypes.func.isRequired,
    incrementAction: PropTypes.func.isRequired,
    editAction: PropTypes.func.isRequired,
    removeAction: PropTypes.func.isRequired,
  };

  return(
    <tr>
      <td>{props.iName}</td>
      <td>{props.iUnit}</td>
      <td>{props.iQuantity}</td>
      <td>
        <button className='StorageView' onClick={() => props.decrementAction(props.iId)}>-</button>
        <button className='StorageView' onClick={() => props.incrementAction(props.iId)}>+</button>
        <button className='StorageView' onClick={() => props.editAction(props.iId)}>Edit</button>
        <button className='StorageView' onClick={() => props.removeAction(props.iId)}>Remove</button>
      </td>
    </tr>
  );
}

export default StorageViewItem;
