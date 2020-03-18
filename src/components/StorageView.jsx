import React from 'react';
import StorageViewHead from './StorageViewHead';
import StorageViewItem from './StorageViewItem';
import '../styles/StorageView.css';

class StorageView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storageId: 0,
      storageName: 'Fridge',
      itemList: [{id: 0, name: "Milk", unit: "1L", quantity: 3}, {id: 1, name: "Coke", unit: "0.33L", quantity: 5}, {id: 2, name: "Apple juice", unit: "0.5L", quantity: 2}]
    }

    this.decrementQuantityForItem = this.decrementQuantityForItem.bind(this);
    this.incrementQuantityForItem = this.incrementQuantityForItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }


  // edit-modal handling
  editItem(itemId) {
    alert('Edit item #'.concat(itemId, ' from storage #', this.state.storageId, ' inside a modal.'));
  }


  // POST api-operations
  decrementQuantityForItem(itemId) {
    alert('Decrement quantity for item #'.concat(itemId, ' from storage #', this.state.storageId, '.'));
  }

  incrementQuantityForItem(itemId) {
    alert('Increment quantity for item #'.concat(itemId, ' from storage #', this.state.storageId, '.'));
  }

  removeItem(itemId) {
    alert('Remove item #'.concat(itemId, ' from storage #', this.state.storageId, '.'));
  }


  // rendering
  unpackItemList() {
    const keys = [...Array(this.state.itemList.length).keys()]; // Array with keys from 0 to entries.length

    return keys.map((currKey) =>
      <StorageViewItem
        key={this.state.itemList[currKey].id}
        iId={this.state.itemList[currKey].id}
        iName={this.state.itemList[currKey].name}
        iUnit={this.state.itemList[currKey].unit}
        iQuantity={this.state.itemList[currKey].quantity}
        incrementAction={this.incrementQuantityForItem}
        decrementAction={this.decrementQuantityForItem}
        editAction={this.editItem}
        removeAction={this.removeItem}
      />
    );
  }

  render() {
    let itemList = this.unpackItemList();

    return (
      <div className="StorageView">
        <table className="StorageView">
          <StorageViewHead/>
          {itemList}
        </table>
      </div>
    );
  }
}

export default StorageView;
