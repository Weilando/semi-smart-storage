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
      dummy: true,
    }

    this.fetchStorageList = this.fetchStorageList.bind(this);
    this.fetchItemList = this.fetchItemList.bind(this);
    this.fetchUnitList = this.fetchUnitList.bind(this);
    this.fetchStorageContent = this.fetchStorageContent.bind(this);
    this.reload = this.reload.bind(this);
    this.switchDummy = this.switchDummy.bind(this);
    this.switchCurrentStorage = this.switchCurrentStorage.bind(this);
    this.addItemToStorage = this.addItemToStorage.bind(this);
    this.decrementQuantityForItem = this.decrementQuantityForItem.bind(this);
    this.incrementQuantityForItem = this.incrementQuantityForItem.bind(this);
    this.removeItemFromStorage = this.removeItemFromStorage.bind(this);

    this.addStorage = this.addStorage.bind(this);
    this.deleteStorage = this.deleteStorage.bind(this);
    this.updateStorage = this.updateStorage.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.addUnit = this.addUnit.bind(this);
    this.deleteUnit = this.deleteUnit.bind(this);
    this.updateUnit = this.updateUnit.bind(this);
    this.addItemToStorage = this.addItemToStorage.bind(this);
    this.decrementQuantityForItem = this.decrementQuantityForItem.bind(this);
    this.incrementQuantityForItem = this.incrementQuantityForItem.bind(this);
    this.removeItemFromStorage = this.removeItemFromStorage.bind(this);
  }

  componentDidMount() {
    this.reload();
  }

  reload() {
    this.fetchStorageList();
    this.fetchItemList();
    this.fetchUnitList();
    this.switchCurrentStorage(this.state.storageList[0]);
  }

  switchDummy() {
    if(this.state.dummy === true) {
      this.setState({dummy: false})
    } else {
      this.setState({dummy: true})
    }
    this.reload();
  }

  switchCurrentStorage(storage) {
    this.setState({currentStorage: storage});
    this.fetchStorageContent(storage);
  }


  // GET methods
  fetchStorageList() {
    if(this.state.dummy) {
      console.log('Fetch storage-list.');
      this.setState({storageList: [
        {id: 0, name: 'Fridge'}, {id: 1, name: 'Basement'}
      ]});
    } else {
      getAllStorages().then(storages => {
        this.setState({storageList: storages})
      });
    }
  }

  fetchItemList() {
    if(this.state.dummy) {
      console.log('Fetch item-list.');
      this.setState({itemList: [
        {id: 0, name: "Sparkling water"},
        {id: 1, name: "Apple juice"},
        {id: 2, name: "Craft beer"},
        {id: 3, name: "Milk"},
        {id: 5, name: "Coke"}
      ]});
    } else {
      // TODO: add API-request
    }
  }

  fetchUnitList() {
    if(this.state.dummy) {
      console.log('Fetch unit-list.');
      this.setState({unitList: [
        {id: 0, name: "0.33L"},
        {id: 1, name: "0.5L"},
        {id: 2, name: "0.75L"},
        {id: 3, name: "1.0L"}
      ]});
    } else {
      // TODO: add API-request
    }
  }

  fetchStorageContent(storage) {
    if(this.state.dummy) {
      console.log('Fetch content of #'.concat(storage.id, ' (', storage.name, ').'));
      this.setState({currentStorageContent: [
        {id: 0, name: "Milk", unit: "1L", quantity: 2.7},
        {id: 1, name: "Coke", unit: "0.33L", quantity: 5},
        {id: 2, name: "Apple juice", unit: "0.5L", quantity: 2},
        {id: 4, name: "Craft Beer", unit: "0.33L", quantity: 6},
        {id: 5, name: "Sparkling water", unit: "0.75L", quantity: 21}
      ]});
    } else {
      // TODO: add API-request
    }
  }


  // POST methods
  addStorage(name) {
    if(this.state.dummy) {
      console.log('Add new storage: '.concat(name));
      let newStorageList = this.state.storageList.slice();
      newStorageList.push({id: this.state.storageList[newStorageList.length-1].id+1, name: name});
      this.setState({storageList: newStorageList});
    } else {
      // TODO: Add api call
    }
  }

  updateStorage(updateId, newName) {
    if(this.state.dummy) {
      console.log('Update storage #'.concat(updateId, ': new name is ', newName));
      let newStorageList = this.state.storageList.slice();
      let updatedIndex = newStorageList.findIndex(x => x.id === updateId);
      newStorageList[updatedIndex].name = newName;
      this.setState({storageList: newStorageList});
    } else {
      // TODO: Add api call
    }
  }

  deleteStorage(deleteId) {
    if(this.state.dummy) {
      console.log('Delete storage: #'.concat(deleteId));
      let newStorageList = this.state.storageList.slice();
      let deletedIndex = newStorageList.findIndex(x => x.id === deleteId);
      newStorageList.splice(deletedIndex, 1);
      this.setState({storageList: newStorageList});
    } else {
      // TODO: Add api call
    }
  }

  addUnit(name) {
    if(this.state.dummy) {
      console.log('Add new unit: '.concat(name));
      let newUnitList = this.state.unitList.slice();
      newUnitList.push({id: this.state.unitList[newUnitList.length-1].id+1, name: name});
      this.setState({unitList: newUnitList});
    } else {
      // TODO: Add api call
    }
  }

  updateUnit(updateId, newName) {
    if(this.state.dummy) {
      console.log('Update unit #'.concat(updateId, ': new name is ', newName));
      let newUnitList = this.state.unitList.slice();
      let updatedIndex = newUnitList.findIndex(x => x.id === updateId);
      newUnitList[updatedIndex].name = newName;
      this.setState({unitList: newUnitList});
    } else {
      // TODO: Add api call
    }
  }

  deleteUnit(deleteId) {
    if(this.state.dummy) {
      console.log('Delete unit: #'.concat(deleteId));
      let newUnitList = this.state.unitList.slice();
      let deletedIndex = newUnitList.findIndex(x => x.id === deleteId);
      newUnitList.splice(deletedIndex, 1);
      this.setState({unitList: newUnitList});
    } else {
      // TODO: Add api call
    }
  }

  addItem(name) {
    if(this.state.dummy) {
      console.log('Add new item: '.concat(name));
      let newItemList = this.state.itemList.slice();
      newItemList.push({id: this.state.itemList[newItemList.length-1].id+1, name: name});
      this.setState({itemList: newItemList});
    } else {
      // TODO: Add api call
    }
  }

  updateItem(updateId, newName) {
    if(this.state.dummy) {
      console.log('Update item #'.concat(updateId, ': new name is ', newName));
      let newItemList = this.state.itemList.slice();
      let updatedIndex = newItemList.findIndex(x => x.id === updateId);
      newItemList[updatedIndex].name = newName;
      this.setState({itemList: newItemList});
    } else {
      // TODO: Add api call
    }
  }

  deleteItem(deleteId) {
    if(this.state.dummy) {
      console.log('Delete item: #'.concat(deleteId));
      let newItemList = this.state.itemList.slice();
      let deletedIndex = newItemList.findIndex(x => x.id === deleteId);
      newItemList.splice(deletedIndex, 1);
      this.setState({itemList: newItemList});
    } else {
      // TODO: Add api call
    }
  }

  addItemToStorage(itemId, unitId, quantity) {
    if(this.state.dummy) {
      console.log('Add item #'.concat(itemId, ' with quantity ', quantity, ' and unit #', unitId, ' to storage #', this.state.currentStorage.id, '.'));
      let newCurrentStorage = this.state.currentStorageContent.slice();
      let newItem = {
        id: newCurrentStorage[newCurrentStorage.length-1].id+1,
        name: this.state.itemList.find(x => x.id === itemId).name,
        unit: this.state.unitList.find(x => x.id === unitId).name,
        quantity: quantity
      };
      newCurrentStorage.push(newItem);
      this.setState({currentStorageContent: newCurrentStorage});
    } else {
      // TODO: Add api call
    }
  }

  decrementQuantityForItem(itemId) {
    if(this.state.dummy) {
      console.log('Decrement quantity for item #'.concat(itemId, ' from storage #', this.state.currentStorage.id, '.'));
      let newCurrentStorage = this.state.currentStorageContent.slice();
      let updatedIndex = newCurrentStorage.findIndex(x => x.id === itemId);
      if(newCurrentStorage[updatedIndex].quantity>0) {
        newCurrentStorage[updatedIndex].quantity--;
      }
      this.setState({currentStorageContent: newCurrentStorage});
    } else {
      // TODO: Add api call
    }
  }

  incrementQuantityForItem(itemId) {
    if(this.state.dummy) {
      console.log('Increment quantity for item #'.concat(itemId, ' from storage #', this.state.currentStorage.id, '.'));
      let newCurrentStorage = this.state.currentStorageContent.slice();
      let updatedIndex = newCurrentStorage.findIndex(x => x.id === itemId);
      newCurrentStorage[updatedIndex].quantity++;
      this.setState({currentStorageContent: newCurrentStorage});
    } else {
      // TODO: Add api call
    }
  }

  removeItemFromStorage(itemId) {
    if(this.state.dummy) {
      console.log('Remove item #'.concat(itemId, ' from storage #', this.state.currentStorage.id, '.'));
      let newCurrentStorage = this.state.currentStorageContent.slice();
      let deletedIndex = newCurrentStorage.findIndex(x => x.id === itemId);
      newCurrentStorage.splice(deletedIndex, 1);
      this.setState({currentStorageContent: newCurrentStorage});
    } else {
      // TODO: Add api call
    }
  }


  // rendering
  render() {
    return (
      <div className="App">
        <Header
          itemList={this.state.itemList}
          unitList={this.state.unitList}
          dummy={this.state.dummy}
          switchDummyAction={this.switchDummy}
          reloadAction={this.reload}
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
