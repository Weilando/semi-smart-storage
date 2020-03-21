import React from 'react';
import PropTypes from 'prop-types';
import { DeleteMode, UpdateMode } from '../constants/enums';

function StorageViewItem(props) {
  StorageViewItem.proptTypes = {
    iId: PropTypes.number.isRequired,
    iName: PropTypes.string.isRequired,
    iUnit: PropTypes.string.isRequired,
    iQuantity: PropTypes.number.isRequired,
    deleteAction: PropTypes.func.isRequired,
    editAction: PropTypes.func.isRequired,
    updateAction: PropTypes.func.isRequired,
  };

  return(
    <tr>
      <td>{props.iName}</td>
      <td>{props.iUnit}</td>
      <td>{props.iQuantity}</td>
      <td>
        <button className='StorageView'
          onClick={() => props.updateAction(UpdateMode.STORAGE_CONTENT_DECR, props.iId, undefined)}
        >-</button>
        <button className='StorageView'
          onClick={() => props.updateAction(UpdateMode.STORAGE_CONTENT_INCR, props.iId, undefined)}
        >+</button>
        <button className='StorageView' onClick={() => props.editAction(props.iId)}>Edit</button>
        <button className='StorageView' onClick={() => props.deleteAction(DeleteMode.STORAGE_CONTENT, props.iId)}>Remove</button>
      </td>
    </tr>
  );
}

export default StorageViewItem;
