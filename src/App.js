import React from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { AddMode, DeleteMode, FetchMode, UpdateMode} from './constants/enums';
import { DummyItemList, DummyStorageContent, DummyStorageList, DummyUnitList } from './constants/dummyData';
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

    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.fetch = this.fetch.bind(this);
    this.reload = this.reload.bind(this);
    this.switchDummy = this.switchDummy.bind(this);
    this.switchCurrentStorage = this.switchCurrentStorage.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.reload();
  }

  reload() {
    this.fetch(FetchMode.STORAGE_LIST);
    this.fetch(FetchMode.ITEM_LIST);
    this.fetch(FetchMode.UNIT_LIST);
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
    this.fetch(FetchMode.STORAGE_CONTENT, storage);
  }


  // GET methods
  fetch(fetchMode) {
    if(fetchMode === FetchMode.ITEM_LIST) {
      if(this.state.dummy) {
        console.log('Fetch item-list.');
        this.setState({itemList: DummyItemList});
      } else {
        // TODO: add API-request
      }
    } else if(fetchMode === FetchMode.STORAGE_CONTENT) {
      const storage = arguments[1];
      if(this.state.dummy) {
        console.log('Fetch content of #'.concat(storage.id, ' (', storage.name, ').'));
        this.setState({currentStorageContent: DummyStorageContent});
      } else {
        // TODO: add API-request
      }
    } else if(fetchMode === FetchMode.STORAGE_LIST) {
      if(this.state.dummy) {
        console.log('Fetch storage-list.');
        this.setState({storageList: DummyStorageList});
      } else {
        getAllStorages().then(storages => {
          this.setState({storageList: storages})
        });
      }
    } else if(fetchMode === FetchMode.UNIT_LIST)  {
      if(this.state.dummy) {
        console.log('Fetch unit-list.');
        this.setState({unitList: DummyUnitList});
      } else {
        // TODO: add API-request
      }
    } else {
      console.log('Invalid fetch-mode.');
    }
  }


  // POST methods
  add(addMode, name) {
    if(addMode === AddMode.ITEM_LIST) {
      if(this.state.dummy) {
        console.log('Add new item: '.concat(name));
        let newItemList = this.state.itemList.slice();
        newItemList.push({id: this.state.itemList[newItemList.length-1].id+1, name: name});
        this.setState({itemList: newItemList});
      } else {
        // TODO: Add api call
      }
    } else if(addMode === AddMode.STORAGE_CONTENT) {
      if(this.state.dummy) {
        const itemId = arguments[1]
        const unitId = arguments[2]
        const quantity = arguments[3]
        console.log('Add item #'.concat(itemId, ' with quantity ', quantity, ' and unit #', unitId, ' to storage #', this.state.currentStorage.id, '.'));
        let newCurrentStorage = this.state.currentStorageContent.slice();
        const newItem = {
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
    } else if(addMode === AddMode.STORAGE_LIST) {
      if(this.state.dummy) {
        console.log('Add new storage: '.concat(name));
        let newStorageList = this.state.storageList.slice();
        newStorageList.push({id: this.state.storageList[newStorageList.length-1].id+1, name: name});
        this.setState({storageList: newStorageList});
      } else {
        // TODO: Add api call
      }
    } else if(addMode === AddMode.UNIT_LIST) {
      if(this.state.dummy) {
        console.log('Add new unit: '.concat(name));
        let newUnitList = this.state.unitList.slice();
        newUnitList.push({id: this.state.unitList[newUnitList.length-1].id+1, name: name});
        this.setState({unitList: newUnitList});
      } else {
        // TODO: Add api call
      }
    } else {
      console.log('Invalid add-mode.');
    }
  }

  delete(deleteMode, deleteId) {
    if(deleteMode === DeleteMode.ITEM_LIST) {
      if(this.state.dummy) {
        console.log('Delete item: #'.concat(deleteId));
        let newItemList = this.state.itemList.slice();
        let deletedIndex = newItemList.findIndex(x => x.id === deleteId);
        newItemList.splice(deletedIndex, 1);
        this.setState({itemList: newItemList});
      } else {
        // TODO: Add api call
      }
    } else if(deleteMode === DeleteMode.STORAGE_CONTENT) {
      if(this.state.dummy) {
        console.log('Delete item #'.concat(deleteId, ' from storage #', this.state.currentStorage.id, '.'));
        let newCurrentStorage = this.state.currentStorageContent.slice();
        let deletedIndex = newCurrentStorage.findIndex(x => x.id === deleteId);
        newCurrentStorage.splice(deletedIndex, 1);
        this.setState({currentStorageContent: newCurrentStorage});
      } else {
        // TODO: Add api call
      }
    } else if(deleteMode === DeleteMode.STORAGE_LIST) {
      if(this.state.dummy) {
        console.log('Delete storage: #'.concat(deleteId));
        let newStorageList = this.state.storageList.slice();
        let deletedIndex = newStorageList.findIndex(x => x.id === deleteId);
        newStorageList.splice(deletedIndex, 1);
        this.setState({storageList: newStorageList});
      } else {
        // TODO: Add api call
      }
    } else if(deleteMode === DeleteMode.UNIT_LIST) {
      if(this.state.dummy) {
        console.log('Delete unit: #'.concat(deleteId));
        let newUnitList = this.state.unitList.slice();
        let deletedIndex = newUnitList.findIndex(x => x.id === deleteId);
        newUnitList.splice(deletedIndex, 1);
        this.setState({unitList: newUnitList});
      } else {
        // TODO: Add api call
      }
    } else {
      console.log('Invalid delete-mode.');
    }
  }

  update(updateMode, updateId, newName) {
    if(updateMode === UpdateMode.ITEM_LIST) {
      if(this.state.dummy) {
        console.log('Update item #'.concat(updateId, ': new name is ', newName));
        let newItemList = this.state.itemList.slice();
        let updatedIndex = newItemList.findIndex(x => x.id === updateId);
        newItemList[updatedIndex].name = newName;
        this.setState({itemList: newItemList});
      } else {
        // TODO: Add api call
      }
    } else if(updateMode === UpdateMode.STORAGE_CONTENT_DECR) {
      if(this.state.dummy) {
        console.log('Decrement quantity for item #'.concat(updateId, ' from storage #', this.state.currentStorage.id, '.'));
        let newCurrentStorage = this.state.currentStorageContent.slice();
        let updatedIndex = newCurrentStorage.findIndex(x => x.id === updateId);
        if(newCurrentStorage[updatedIndex].quantity>0) {
          newCurrentStorage[updatedIndex].quantity--;
        }
        this.setState({currentStorageContent: newCurrentStorage});
      } else {
        // TODO: Add api call
      }
    } else if(updateMode === UpdateMode.STORAGE_CONTENT_EDIT) {

    } else if(updateMode === UpdateMode.STORAGE_CONTENT_INCR) {
      if(this.state.dummy) {
        console.log('Increment quantity for item #'.concat(updateId, ' from storage #', this.state.currentStorage.id, '.'));
        let newCurrentStorage = this.state.currentStorageContent.slice();
        let updatedIndex = newCurrentStorage.findIndex(x => x.id === updateId);
        newCurrentStorage[updatedIndex].quantity++;
        this.setState({currentStorageContent: newCurrentStorage});
      } else {
        // TODO: Add api call
      }
    } else if(updateMode === UpdateMode.STORAGE_LIST) {
      if(this.state.dummy) {
        console.log('Update storage #'.concat(updateId, ': new name is ', newName));
        let newStorageList = this.state.storageList.slice();
        let updatedIndex = newStorageList.findIndex(x => x.id === updateId);
        newStorageList[updatedIndex].name = newName;
        this.setState({storageList: newStorageList});
      } else {
        // TODO: Add api call
      }
    } else if(updateMode === UpdateMode.UNIT_LIST) {
      if(this.state.dummy) {
        console.log('Update unit #'.concat(updateId, ': new name is ', newName));
        let newUnitList = this.state.unitList.slice();
        let updatedIndex = newUnitList.findIndex(x => x.id === updateId);
        newUnitList[updatedIndex].name = newName;
        this.setState({unitList: newUnitList});
      } else {
        // TODO: Add api call
      }
    } else {
      console.log('Invalid update-mode.');
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
          addAction={this.add}
          deleteAction={this.delete}
          reloadAction={this.reload}
          switchDummyAction={this.switchDummy}
          updateAction={this.update}
        />
        <Body
          currentStorage={this.state.currentStorage}
          currentStorageContent={this.state.currentStorageContent}
          storageList={this.state.storageList}
          itemList={this.state.itemList}
          unitList={this.state.unitList}
          addAction={this.add}
          deleteAction={this.delete}
          switchStorageAction={this.switchCurrentStorage}
          updateAction={this.update}
        />
      </div>
    );
  }
}

export default App;
