import React from 'react';
import './Views.css';
import { getAllStorages } from '../services/StorageService';

class StorageSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storageList: [],
    }
  }

  componentDidMount() {
    getAllStorages().then(storages => {
      this.setState({storageList: storages})
    });
  }

  render() {
    return (
      <div className="StorageSelector">
        <p>StorageSelector</p>
      </div>
    );
  }
}

export default StorageSelector;
