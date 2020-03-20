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
    addItemToStorageAction: PropTypes.func.isRequired,
    decrementQuantityForItemAction: PropTypes.func.isRequired,
    incrementQuantityForItemAction: PropTypes.func.isRequired,
    removeItemFromStorageAction: PropTypes.func.isRequired,
  }

  // edit-modal handling
  editItem(itemId) {
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
        decrementAction={this.props.decrementQuantityForItemAction}
        incrementAction={this.props.incrementQuantityForItemAction}
        editAction={this.editItem}
        removeAction={this.props.removeItemFromStorageAction}
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
            addAction={this.props.addItemToStorageAction}
          />
        </table>
      </div>
    );
  }
}

export default StorageView;
