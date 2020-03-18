import React from 'react';
import StorageViewHead from './StorageViewHead';
import StorageViewItem from './StorageViewItem';
import StorageViewNewItem from './StorageViewNewItem';
import '../styles/StorageView.css';

class StorageView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storageId: 0,
      storageName: 'Fridge',
      storageContent: [{id: 0, name: "Milk", unit: "1L", quantity: 3}, {id: 1, name: "Coke", unit: "0.33L", quantity: 5}, {id: 2, name: "Apple juice", unit: "0.5L", quantity: 2}, {id: 4, name: "Craft Beer", unit: "0.33L", quantity: 6}],
      unitList: [{id: 0, name: "0.33L"}, {id: 1, name: "0.5L"}, {id: 2, name: "1.0L"}],
      itemList: [{id: 0, name: "Sparkling water"}, {id: 1, name: "Apple juice"}, {id: 2, name: "Craft beer"}, {id: 3, name: "Milk"}, {id: 5, name: "Coke"}]
    }

    this.addItem = this.addItem.bind(this);
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
  addItem(itemId, unitId, quantity) {
    alert('Add item #'.concat(itemId, ' with quantity ', quantity, ' and unit #', unitId, ' to storage #', this.state.storageId, '.'));
  }

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
  unpackStorageContent() {
    const keys = [...Array(this.state.storageContent.length).keys()]; // Array with keys from 0 to entries.length

    return keys.map((currKey) =>
      <StorageViewItem
        key={this.state.storageContent[currKey].id}
        iId={this.state.storageContent[currKey].id}
        iName={this.state.storageContent[currKey].name}
        iUnit={this.state.storageContent[currKey].unit}
        iQuantity={this.state.storageContent[currKey].quantity}
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
            itemList={this.state.itemList}
            unitList={this.state.unitList}
            addAction={this.addItem}
          />
        </table>
      </div>
    );
  }
}

export default StorageView;
