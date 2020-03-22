import React from 'react';
import PropTypes from 'prop-types';
import { DeleteMode, UpdateMode } from '../constants/enums';
import '../styles/StorageView.css';

function StorageViewItem(props) {
  StorageViewItem.propTypes = {
    iId: PropTypes.number.isRequired,
    iName: PropTypes.string.isRequired,
    iUnit: PropTypes.string.isRequired,
    iQuantity: PropTypes.number.isRequired,
    storageId: PropTypes.number.isRequired,
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
        <button className="StorageView"
          disabled={props.iQuantity < 1}
          onClick={() => props.updateAction(UpdateMode.STORAGE_CONTENT_DECR, props.iId, props.storageId)}
        >-</button>
        <button className="StorageView"
          onClick={() => props.updateAction(UpdateMode.STORAGE_CONTENT_INCR, props.iId, props.storageId)}
        >+</button>
        <button className="StorageView" onClick={() => props.editAction(props.iId, props.iQuantity)}>Edit</button>
        <button className="StorageView" onClick={() => props.deleteAction(DeleteMode.STORAGE_CONTENT, props.iId, props.storageId)}>Remove</button>
      </td>
    </tr>
  );
}

export default StorageViewItem;
