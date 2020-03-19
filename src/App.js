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
  }

  componentDidMount() {
    this.fetchStorageList();
    this.fetchItemList();
    this.fetchUnitList();
    this.setState({currentStorage: this.state.storageList[0]});
    this.fetchStorageContent(this.state.currentStorage);
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


  // rendering
  render() {
    return (
      <div className="App">
        <Header
          itemList={this.state.itemList}
          unitList={this.state.unitList}
        />
        <Body
          currentStorage={this.state.currentStorage}
          currentStorageContent={this.state.currentStorageContent}
          storageList={this.state.storageList}
          itemList={this.state.itemList}
          unitList={this.state.unitList}
          switchStorageAction={this.switchCurrentStorage}
        />
      </div>
    );
  }
}

export default App;
