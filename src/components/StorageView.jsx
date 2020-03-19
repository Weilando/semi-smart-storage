import React from 'react';
import PropTypes from 'prop-types';
import StorageViewHead from './StorageViewHead';
import StorageViewItem from './StorageViewItem';
import StorageViewNewItem from './StorageViewNewItem';
import '../styles/StorageView.css';

class StorageView extends React.Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
    this.decrementQuantityForItem = this.decrementQuantityForItem.bind(this);
    this.incrementQuantityForItem = this.incrementQuantityForItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
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
  }

  // edit-modal handling
  editItem(itemId) {
    alert('Edit item #'.concat(itemId, ' from storage #', this.props.storage.id, ' inside a modal.'));
  }


  // POST api-operations
  addItem(itemId, unitId, quantity) {
    alert('Add item #'.concat(itemId, ' with quantity ', quantity, ' and unit #', unitId, ' to storage #', this.props.storage.id, '.'));
  }

  decrementQuantityForItem(itemId) {
    alert('Decrement quantity for item #'.concat(itemId, ' from storage #', this.props.storage.id, '.'));
  }

  incrementQuantityForItem(itemId) {
    alert('Increment quantity for item #'.concat(itemId, ' from storage #', this.props.storage.id, '.'));
  }

  removeItem(itemId) {
    alert('Remove item #'.concat(itemId, ' from storage #', this.props.storage.id, '.'));
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
        decrementAction={this.decrementQuantityForItem}
        incrementAction={this.incrementQuantityForItem}
        editAction={this.editItem}
        removeAction={this.removeItem}
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
            itemList={this.props.itemList}
            unitList={this.props.unitList}
            addAction={this.addItem}
          />
        </table>
      </div>
    );
  }
}

export default StorageView;
