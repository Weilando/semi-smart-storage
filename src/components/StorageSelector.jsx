import React from 'react';
import '../styles/StorageSelector.css';
import StorageSelectorItem from './StorageSelectorItem';
import StorageSelectorNewItem from './StorageSelectorNewItem';
import ModalEditStorage from './ModalEditStorage';
import { getAllStorages } from '../services/StorageService';

class StorageSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storageList: [{id: "0", name: "Fridge"}, {id: "1", name: "Basement"}, {id: "2", name: "Garage"}],
      editShow: false,
      editId: 0,
      editName: 'Fridge',
      editBuffer: ''
    };

    this.showEditModal = this.showEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
    this.generateEditModal = this.generateEditModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.getStorageList();
  }


  // modal-handling
  showEditModal(id, name) {
    if(this.state.editShow === false) {
      this.setState({editShow: true, editId: id, editName: name, editBuffer: name});
    }
  }

  closeEditModal() {
    if(this.state.editShow === true) {
      this.setState({editShow: false});
    }
  }

  handleChange(event) {
    this.setState({editBuffer: event.target.value});
  }

  handleUpdate(event) {
    event.preventDefault();
    if(this.state.editBuffer.localeCompare(this.state.editName) !== 0) {
      this.updateStorage(this.state.editId, this.state.editBuffer);
    }
    this.closeEditModal();
  }

  handleDelete() {
    this.deleteStorage(this.state.editId);
    this.closeEditModal();
  }


  // GET api-operations
  getStorageList() {
    getAllStorages().then(storages => {
      this.setState({storageList: storages})
    });
  }


  // POST api-operations
  addStorage(name) {
    alert('Add new storage: '.concat(name)); // TODO: Add api call
  }

  updateStorage(updateId, newName) {
    alert('Update storage #'.concat(updateId, ': new name is ', newName)); // TODO: Add api call
  }

  deleteStorage(deleteId) {
    alert('Delete storage: #'.concat(deleteId)); // TODO: Add api call
  }


  // rendering
  unpackStorageList() {
    const keys = [...Array(this.state.storageList.length).keys()]; // Array with keys from 0 to entries.length

    return keys.map((currKey) =>
      <StorageSelectorItem
        key={this.state.storageList[currKey].id}
        sId={this.state.storageList[currKey].id}
        sName={this.state.storageList[currKey].name}
        showAction={function() { alert('Show storage´s content...'); }}
        editAction={this.showEditModal}
      />
    );
  }

  generateEditModal() {
    return(
      <ModalEditStorage
        show={this.state.editShow}
        sName={this.state.editName}
        buffer={this.state.editBuffer}
        closeAction={this.closeEditModal}
        changeAction={this.handleChange}
        updateAction={this.handleUpdate}
        deleteAction={this.handleDelete}
      />
    );
  }

  render() {
    let storageList = this.unpackStorageList();
    let editModal = this.generateEditModal();

    return (
      <div className="StorageSelector">
        <ul className="StorageSelector">
          {storageList}
          <StorageSelectorNewItem addStorage={this.addStorage}/>
        </ul>

        {editModal}
      </div>
    );
  }
}

export default StorageSelector;
