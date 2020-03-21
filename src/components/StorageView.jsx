import React from 'react';
import PropTypes from 'prop-types';
import StorageViewHead from './StorageViewHead';
import StorageViewItem from './StorageViewItem';
import StorageViewNewItem from './StorageViewNewItem';
import '../styles/StorageView.css';

class StorageView extends React.Component {
  constructor(props) {
    super(props);

    this.editItem = this.editItem.bind(this);
  }

  static propTypes = {
    storage: PropTypes.shape(
      {id: PropTypes.number.isRequired, name: PropTypes.string.isRequired}
    ).isRequired,
    storageContent: PropTypes.arrayOf(
      PropTypes.shape(
        {id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired
        }
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
    updateAction: PropTypes.func.isRequired,
  }

  // edit-modal handling
  editItem(itemId) { // TODO: build modal
    alert('Edit item #'.concat(itemId, ' from storage #', this.props.storage.id, ' inside a modal.'));
  }


  // rendering
  unpackStorageContent() {
    const keys = [...Array(this.props.storageContent.length).keys()]; // Array with keys from 0 to entries.length

    return keys.map((currKey) =>
      <StorageViewItem
        key={this.props.storageContent[currKey].id}
        iId={this.props.storageContent[currKey].id}
        iName={this.props.storageContent[currKey].name}
        iUnit={this.props.storageContent[currKey].unit}
        iQuantity={this.props.storageContent[currKey].quantity}
        storageId={this.props.storage.id}
        deleteAction={this.props.deleteAction}
        editAction={this.editItem}
        updateAction={this.props.updateAction}
      />
    );
  }

  render() {
    let content = this.unpackStorageContent();

    return (
      <div className="StorageView">
        <table className="StorageView">
          <StorageViewHead/>

          <tbody>
            {content}
          </tbody>

          <StorageViewNewItem
            storageId={this.props.storage.id}
            itemList={this.props.itemList}
            unitList={this.props.unitList}
            addAction={this.props.addAction}
          />
        </table>
      </div>
    );
  }
}

export default StorageView;
