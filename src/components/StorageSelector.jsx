import React from 'react';
import '../styles/StorageSelector.css';
import StorageSelectorItem from './StorageSelectorItem';
import StorageSelectorNewItem from './StorageSelectorNewItem';
import { getAllStorages } from '../services/StorageService';

class StorageSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storageList: [{id: "0", name: "Fridge"}, {id: "1", name: "Basement"}, {id: "2", name: "Garage"}],
    }
  }

  componentDidMount() {
    this.getStorageList();
  }

  getStorageList() {
    // fetch available storages from Raspberry
    getAllStorages().then(storages => {
      this.setState({storageList: storages})
    });
  }

  addStorage(name) {
    alert('add new storage: '.concat(name)); // TODO: Add api call
  }

  unpackStorageList() {
    const keys = [...Array(this.state.storageList.length).keys()]; // Array with keys from 0 to entries.length

    return keys.map((currKey) =>
      <StorageSelectorItem
        sId={this.state.storageList[currKey].id}
        sName={this.state.storageList[currKey].name}
      />
    );
  }

  render() {
    let storageList = this.unpackStorageList();

    return (
      <div className="StorageSelector">
        <ul className="StorageSelector">
          {storageList}
          <StorageSelectorNewItem addStorage={this.addStorage}/>
        </ul>
      </div>
    );
  }
}

export default StorageSelector;
