import React from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { getAllStorages } from './services/StorageService';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStorage: {id: 0, name: ''},
      currentStorageContent: [],
      storageList: [{id: 0, name: ''}],
      itemList: [],
      unitList: [],
    }

    this.fetchStorageList = this.fetchStorageList.bind(this);
    this.fetchItemList = this.fetchItemList.bind(this);
    this.fetchUnitList = this.fetchUnitList.bind(this);
    this.fetchStorageContent = this.fetchStorageContent.bind(this);
    this.switchCurrentStorage = this.switchCurrentStorage.bind(this);
    this.addItemToStorage = this.addItemToStorage.bind(this);
    this.decrementQuantityForItem = this.decrementQuantityForItem.bind(this);
    this.incrementQuantityForItem = this.incrementQuantityForItem.bind(this);
    this.removeItemFromStorage = this.removeItemFromStorage.bind(this);
  }

  componentDidMount() {
    this.fetchStorageList();
    this.fetchItemList();
    this.fetchUnitList();
    this.switchCurrentStorage(this.state.storageList[0]);
  }

  switchCurrentStorage(storage) {
    this.setState({currentStorage: storage});
    this.fetchStorageContent(storage);
  }


  // GET methods
  fetchStorageList() { // TODO: remove dummy-data and add API-request
    //getAllStorages().then(storages => {
    //  this.setState({storageList: storages})
    //});
    console.log('Fetch storage-list.');
    this.setState({storageList: [
      {id: 0, name: 'Fridge'},
      {id: 1, name: 'Basement'},
      {id: 3, name: 'Garage'}
    ]});
  }

  fetchItemList() { // TODO: remove dummy-data and add API-request
    console.log('Fetch item-list.');
    this.setState({itemList: [
      {id: 0, name: "Sparkling water"},
      {id: 1, name: "Apple juice"},
      {id: 2, name: "Craft beer"},
      {id: 3, name: "Milk"},
      {id: 5, name: "Coke"}
    ]});
  }

  fetchUnitList() { // TODO: remove dummy-data and add API-request
    console.log('Fetch unit-list.');
    this.setState({unitList: [
      {id: 0, name: "0.33L"},
      {id: 1, name: "0.5L"},
      {id: 2, name: "0.75L"},
      {id: 3, name: "1.0L"}
    ]});
  }

  fetchStorageContent(storage) { // TODO: remove dummy-data and add API-request
    console.log('Fetch content of #'.concat(storage.id, ' (', storage.name, ').'));
    this.setState({currentStorageContent: [
      {id: 0, name: "Milk", unit: "1L", quantity: 2.7},
      {id: 1, name: "Coke", unit: "0.33L", quantity: 5},
      {id: 2, name: "Apple juice", unit: "0.5L", quantity: 2},
      {id: 4, name: "Craft Beer", unit: "0.33L", quantity: 6},
      {id: 5, name: "Sparkling water", unit: "0.75L", quantity: 21}
    ]});
  }


  // POST methods
  addStorage(name) {
    console.log('Add new storage: '.concat(name)); // TODO: Add api call
  }

  updateStorage(updateId, newName) {
    console.log('Update storage #'.concat(updateId, ': new name is ', newName)); // TODO: Add api call
  }

  deleteStorage(deleteId) {
    console.log('Delete storage: #'.concat(deleteId)); // TODO: Add api call
  }

  addUnit(name) {
    console.log('Add new unit: '.concat(name)); // TODO: Add api call
  }

  updateUnit(updateId, newName) {
    console.log('Update unit #'.concat(updateId, ': new name is ', newName)); // TODO: Add api call
  }

  deleteUnit(deleteId) {
    console.log('Delete unit: #'.concat(deleteId)); // TODO: Add api call
  }

  addItem(name) {
    console.log('Add new item: '.concat(name)); // TODO: Add api call
  }

  updateItem(updateId, newName) {
    console.log('Update item #'.concat(updateId, ': new name is ', newName)); // TODO: Add api call
  }

  deleteItem(deleteId) {
    console.log('Delete item: #'.concat(deleteId)); // TODO: Add api call
  }

  addItemToStorage(itemId, unitId, quantity) {
    console.log('Add item #'.concat(itemId, ' with quantity ', quantity, ' and unit #', unitId, ' to storage #', this.state.currentStorage.id, '.')); // TODO: Add api call
  }

  decrementQuantityForItem(itemId) {
    console.log('Decrement quantity for item #'.concat(itemId, ' from storage #', this.state.currentStorage.id, '.')); // TODO: Add api call
  }

  incrementQuantityForItem(itemId) {
    console.log('Increment quantity for item #'.concat(itemId, ' from storage #', this.state.currentStorage.id, '.')); // TODO: Add api call
  }

  removeItemFromStorage(itemId) {
    console.log('Remove item #'.concat(itemId, ' from storage #', this.state.currentStorage.id, '.')); // TODO: Add api call
  }


  // rendering
  render() {
    return (
      <div className="App">
        <Header
          itemList={this.state.itemList}
          unitList={this.state.unitList}
          addItemAction={this.addItem}
          addUnitAction={this.addUnit}
          deleteItemAction={this.deleteItem}
          deleteUnitAction={this.deleteUnit}
          updateItemAction={this.updateItem}
          updateUnitAction={this.updateUnit}
        />
        <Body
          currentStorage={this.state.currentStorage}
          currentStorageContent={this.state.currentStorageContent}
          storageList={this.state.storageList}
          itemList={this.state.itemList}
          unitList={this.state.unitList}
          addStorageAction={this.addStorage}
          deleteStorageAction={this.deleteStorage}
          switchStorageAction={this.switchCurrentStorage}
          updateStorageAction={this.updateStorage}
          addItemToStorageAction={this.addItemToStorage}
          decrementQuantityForItemAction={this.decrementQuantityForItem}
          incrementQuantityForItemAction={this.incrementQuantityForItem}
          removeItemFromStorageAction={this.removeItemFromStorage}
        />
      </div>
    );
  }
}

export default App;
