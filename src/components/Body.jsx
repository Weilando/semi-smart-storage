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
        name: PropTypes.string.isRequired,
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
  }

  return (
    <div className="Body">
      <StorageSelector
        currentStorage={props.currentStorage}
        storageList={props.storageList}
      />
      <StorageView
        storage={props.currentStorage}
        storageContent={props.currentStorageContent}
        itemList={props.itemList}
        unitList={props.unitList}
      />
    </div>
  );
}

export default Body;
