import React from 'react';
import PropTypes from 'prop-types';
import StorageView from './StorageView';
import StorageSelector from './StorageSelector';
import '../styles/Body.css';

function Body(props) {
  Body.propTypes = {
    currentStorage: PropTypes.shape(
      {id: PropTypes.number.isRequired, name: PropTypes.string.isRequired}
    ).isRequired,
    currentStorageContent: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        item: PropTypes.string.isRequired,
        unit: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
      }).isRequired
    ).isRequired,
    storageList: PropTypes.arrayOf(
      PropTypes.shape(
        {id: PropTypes.number.isRequired, name: PropTypes.string.isRequired}
      )
    ).isRequired,
    itemList: PropTypes.arrayOf(
      PropTypes.shape(
        {id: PropTypes.number.isRequired, name: PropTypes.string.isRequired}
      )
    ).isRequired,
    unitList: PropTypes.arrayOf(
      PropTypes.shape(
        {id: PropTypes.number.isRequired, name: PropTypes.string.isRequired}
      )
    ).isRequired,
    addAction: PropTypes.func.isRequired,
    deleteAction: PropTypes.func.isRequired,
    switchStorageAction: PropTypes.func.isRequired,
    updateAction: PropTypes.func.isRequired,
  }

  return (
    <div className="Body">
      <StorageSelector
        currentStorage={props.currentStorage}
        storageList={props.storageList}
        addAction={props.addAction}
        deleteAction={props.deleteAction}
        switchAction={props.switchStorageAction}
        updateAction={props.updateAction}
      />
      <StorageView
        storage={props.currentStorage}
        storageContent={props.currentStorageContent}
        itemList={props.itemList}
        unitList={props.unitList}
        addAction={props.addAction}
        deleteAction={props.deleteAction}
        updateAction={props.updateAction}
      />
    </div>
  );
}

export default Body;
