import React from 'react';
import PropTypes from 'prop-types';
import StorageSelectorItem from './StorageSelectorItem';
import StorageSelectorNewItem from './StorageSelectorNewItem';
import ModalEdit from './ModalEdit';
import { DeleteMode, UpdateMode } from '../constants/enums';
import { ModalMode } from '../constants/enums';
import '../styles/StorageSelector.css';

class StorageSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

  static propTypes = {
    currentStorage: PropTypes.shape(
      {id: PropTypes.number.isRequired, name: PropTypes.string.isRequired}
    ).isRequired,
    storageList: PropTypes.arrayOf(
      PropTypes.shape(
        {id: PropTypes.number.isRequired, name: PropTypes.string.isRequired}
      )
    ).isRequired,
    addAction: PropTypes.func.isRequired,
    deleteAction: PropTypes.func.isRequired,
    switchAction: PropTypes.func.isRequired,
    updateAction: PropTypes.func.isRequired,
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
      this.props.updateAction(UpdateMode.STORAGE_LIST, this.state.editId, this.state.editBuffer);
    }
    this.closeEditModal();
  }

  handleDelete() {
    this.props.deleteAction(DeleteMode.STORAGE_LIST, this.state.editId);
    this.closeEditModal();
  }


  // rendering
  unpackStorageList() {
    return this.props.storageList.map((currStorage) =>
      <StorageSelectorItem
        key={currStorage.id}
        storage={currStorage}
        active={this.props.currentStorage === currStorage}
        showAction={this.props.switchAction}
        editAction={this.showEditModal}
      />
    );
  }

  generateEditModal() {
    return(
      <ModalEdit
        show={this.state.editShow}
        name={this.state.editName}
        mode={ModalMode.STORAGE}
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
          <StorageSelectorNewItem addStorage={this.props.addAction}/>
        </ul>

        {editModal}
      </div>
    );
  }
}

export default StorageSelector;
