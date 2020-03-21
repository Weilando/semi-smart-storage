import React from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import DummyService from './services/DummyService';
import { AddMode, DeleteMode, FetchMode, UpdateMode} from './constants/enums';
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

    this.dummyService = new DummyService();

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

  async reload() {
    await this.fetch(FetchMode.STORAGE_LIST);
    await this.fetch(FetchMode.ITEM_LIST);
    await this.fetch(FetchMode.UNIT_LIST);
    await this.switchCurrentStorage(this.state.storageList[0]);
  }

  switchDummy() {
    if(this.state.dummy === true) {
      this.setState({dummy: false})
    } else {
      this.setState({dummy: true})
    }
    this.reload();
  }

  async switchCurrentStorage(storage) {
    await this.setState({currentStorage: storage});
    await this.fetch(FetchMode.STORAGE_CONTENT, storage.id);
  }


  // GET methods
  async fetch(fetchMode) {
    if(fetchMode === FetchMode.ITEM_LIST) {
      if(this.state.dummy) {
        await this.setState({itemList: this.dummyService.getAllItems()});
      } else {
        // TODO: add API-request
      }
    } else if(fetchMode === FetchMode.STORAGE_CONTENT) {
      const storageId = arguments[1];
      if(this.state.dummy) {
        await this.setState({currentStorageContent: this.dummyService.getAllItemsInStorage(storageId)});
      } else {
        // TODO: add API-request
      }
    } else if(fetchMode === FetchMode.STORAGE_LIST) {
      if(this.state.dummy) {
        await this.setState({storageList: this.dummyService.getAllStorages()});
      } else {
        getAllStorages().then(storages => {
          this.setState({storageList: storages})
        });
      }
    } else if(fetchMode === FetchMode.UNIT_LIST)  {
      if(this.state.dummy) {
        await this.setState({unitList: this.dummyService.getAllUnits()});
      } else {
        // TODO: add API-request
      }
    } else {
      console.log('Invalid fetch-mode.');
    }
  }


  // POST methods
  async add(addMode, name) {
    if(addMode === AddMode.ITEM_LIST) {
      if(this.state.dummy) {
        await this.dummyService.addItem(name);
      } else {
        // TODO: Add api call
      }
      await this.fetch(FetchMode.ITEM_LIST);
    } else if(addMode === AddMode.STORAGE_CONTENT) {
      const itemId = arguments[1];
      const unitId = arguments[2];
      const quantity = arguments[3];
      const storageId = arguments[4];

      if(this.state.dummy) {
        await this.dummyService.addItemToStorage(itemId, unitId, quantity, storageId);
      } else {
        // TODO: Add api call
      }
      await this.fetch(FetchMode.STORAGE_CONTENT, storageId);
    } else if(addMode === AddMode.STORAGE_LIST) {
      if(this.state.dummy) {
        await this.dummyService.addStorage(name);
      } else {
        // TODO: Add api call
      }
      await this.fetch(FetchMode.STORAGE_LIST);
    } else if(addMode === AddMode.UNIT_LIST) {
      if(this.state.dummy) {
        await this.dummyService.addUnit(name);
      } else {
        // TODO: Add api call
      }
      await this.fetch(FetchMode.UNIT_LIST);
    } else {
      console.log('Invalid add-mode.');
    }
  }

  async delete(deleteMode, deleteId) {
    if(deleteMode === DeleteMode.ITEM_LIST) {
      if(this.state.dummy) {
        await this.dummyService.deleteItem(deleteId);
      } else {
        // TODO: Add api call
      }
      await this.fetch(FetchMode.ITEM_LIST);
    } else if(deleteMode === DeleteMode.STORAGE_CONTENT) {
      const storageId = arguments[2];

      if(this.state.dummy) {
        await this.dummyService.deleteItemFromStorage(deleteId, storageId);
      } else {
        // TODO: Add api call
      }
      await this.fetch(FetchMode.STORAGE_CONTENT, storageId);
    } else if(deleteMode === DeleteMode.STORAGE_LIST) {
      if(this.state.dummy) {
        await this.dummyService.deleteStorage(deleteId);
      } else {
        // TODO: Add api call
      }
      await this.fetch(FetchMode.STORAGE_LIST);
    } else if(deleteMode === DeleteMode.UNIT_LIST) {
      if(this.state.dummy) {
        await this.dummyService.deleteUnit(deleteId);
      } else {
        // TODO: Add api call
      }
      await this.fetch(FetchMode.UNIT_LIST);
    } else {
      console.log('Invalid delete-mode.');
    }
  }

  async update(updateMode, updateId, newName) {
    if(updateMode === UpdateMode.ITEM_LIST) {
      if(this.state.dummy) {
        this.dummyService.updateItem(updateId, newName);
      } else {
        // TODO: Add api call
      }
      await this.fetch(FetchMode.ITEM_LIST);
    } else if(updateMode === UpdateMode.STORAGE_CONTENT_DECR) {
      const storageId = arguments[2];

      if(this.state.dummy) {
        this.dummyService.decrementQuantityForItemInStorage(updateId, storageId);
      } else {
        // TODO: Add api call
      }
      await this.fetch(FetchMode.STORAGE_CONTENT, storageId);
    } else if(updateMode === UpdateMode.STORAGE_CONTENT_EDIT) {
      const quantity = arguments[2];
      const storageId = arguments[3];

      if(this.state.dummy) {
        this.dummyService.updateQuantityForItemInStorage(updateId, quantity, storageId);
      } else {
        // TODO: Add api call
      }
      await this.fetch(FetchMode.STORAGE_CONTENT, storageId);
    } else if(updateMode === UpdateMode.STORAGE_CONTENT_INCR) {
      const storageId = arguments[2];

      if(this.state.dummy) {
        this.dummyService.incrementQuantityForItemInStorage(updateId, storageId);
      } else {
        // TODO: Add api call
      }
      await this.fetch(FetchMode.STORAGE_CONTENT, storageId);
    } else if(updateMode === UpdateMode.STORAGE_LIST) {
      if(this.state.dummy) {
        this.dummyService.updateStorage(updateId, newName);
      } else {
        // TODO: Add api call
      }
      await this.fetch(FetchMode.STORAGE_LIST);
    } else if(updateMode === UpdateMode.UNIT_LIST) {
      if(this.state.dummy) {
        this.dummyService.updateUnit(updateId, newName);
      } else {
        // TODO: Add api call
      }
      await this.fetch(FetchMode.UNIT_LIST);
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
