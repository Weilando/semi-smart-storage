import React from 'react';
import PropTypes from 'prop-types';
import ModalEdit from './ModalEdit';
import ModalSettings from './ModalSettings';
import ModalList from './ModalList';
import { AddMode, DeleteMode, UpdateMode } from '../constants/enums';
import { ModalMode } from '../constants/enums';
import '../styles/Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMode: ModalMode.ITEM,
      settingsShow: false,
      unitListShow: false,
      itemListShow: false,
      editShow: false,
      editId: 0,
      editName: '',
      editBuffer: '',
    }

    this.closeEditModal = this.closeEditModal.bind(this);
    this.closeItemListModal = this.closeItemListModal.bind(this);
    this.closeUnitListModal = this.closeUnitListModal.bind(this);
    this.closeSettingsModal = this.closeSettingsModal.bind(this);
    this.generateEditModal = this.generateEditModal.bind(this);
    this.generateListModal = this.generateListModal.bind(this);
    this.generateSettingsModal = this.generateSettingsModal.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
    this.showItemListModal = this.showItemListModal.bind(this);
    this.showUnitListModal = this.showUnitListModal.bind(this);
    this.showSettingsModal = this.showSettingsModal.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleItemAdd = this.handleItemAdd.bind(this);
    this.handleUnitAdd = this.handleUnitAdd.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleUnitDelete = this.handleUnitDelete.bind(this);
    this.handleItemUpdate = this.handleItemUpdate.bind(this);
    this.handleUnitUpdate = this.handleUnitUpdate.bind(this);
  }

  static propTypes = {
    itemList: PropTypes.arrayOf(
      PropTypes.shape(
        {id: PropTypes.number.isRequired, name: PropTypes.string.isRequired}
      )
    ).isRequired,
    unitList: PropTypes.arrayOf(
      PropTypes.shape(
        {id: PropTypes.number.isRequired, name: PropTypes.string.isRequired}
      )
    ).isRequired,
    dummy: PropTypes.bool.isRequired,
    addAction: PropTypes.func.isRequired,
    deleteAction: PropTypes.func.isRequired,
    reloadAction: PropTypes.func.isRequired,
    switchDummyAction: PropTypes.func.isRequired,
    updateAction: PropTypes.func.isRequired,
  }


  // modal-handling
  showEditModal(obj) {
    if(this.state.editShow === false) {
      this.setState({editShow: true, editId: obj.id, editName: obj.name, editBuffer: obj.name});
    }
  }

  closeEditModal() {
    if(this.state.editShow === true) {
      this.setState({editShow: false});
    }
  }

  showItemListModal() {
    if(this.state.itemListShow === false) {
      this.setState({itemListShow: true, currentMode: ModalMode.ITEM});
    }
  }

  closeItemListModal() {
    if(this.state.itemListShow === true) {
      this.setState({itemListShow: false});
    }
  }

  showUnitListModal() {
    if(this.state.unitListShow === false) {
      this.setState({unitListShow: true, currentMode: ModalMode.UNIT});
    }
  }

  closeUnitListModal() {
    if(this.state.unitListShow === true) {
      this.setState({unitListShow: false});
    }
  }

  showSettingsModal() {
    if(this.state.settingsShow === false) {
      this.setState({settingsShow: true});
    }
  }

  closeSettingsModal() {
    if(this.state.settingsShow === true) {
      this.setState({settingsShow: false});
    }
  }


  // action handling
  handleEditChange(event) {
    this.setState({editBuffer: event.target.value});
  }

  handleNewNameChange(event) {
    this.setState({newNameBuffer: event.target.value});
  }

  handleItemAdd(name) {
    this.props.addAction(AddMode.ITEM_LIST, name);
  }

  handleItemUpdate(event) {
    event.preventDefault();
    if(this.state.editBuffer.localeCompare(this.state.editName) !== 0) {
      this.props.updateAction(UpdateMode.ITEM_LIST, this.state.editId, this.state.editBuffer);
    }
    this.closeEditModal();
  }

  handleItemDelete() {
    this.props.deleteAction(DeleteMode.ITEM_LIST, this.state.editId);
    this.closeEditModal();
  }

  handleUnitAdd(name) {
    this.props.addAction(AddMode.UNIT_LIST, name);
  }

  handleUnitUpdate(event) {
    event.preventDefault();
    if(this.state.editBuffer.localeCompare(this.state.editName) !== 0) {
      this.props.updateAction(UpdateMode.UNIT_LIST, this.state.editId, this.state.editBuffer);
    }
    this.closeEditModal();
  }

  handleUnitDelete() {
    this.props.deleteAction(DeleteMode.UNIT_LIST, this.state.editId);
    this.closeEditModal();
  }


  // rendering
  generateEditModal() {
    return(
      <ModalEdit
        show={this.state.editShow}
        name={this.state.editName}
        mode={this.state.currentMode}
        buffer={this.state.editBuffer}
        changeAction={this.handleEditChange}
        closeAction={this.closeEditModal}
        deleteAction={(this.state.currentMode === ModalMode.UNIT) ? this.handleUnitDelete : this.handleItemDelete}
        updateAction={(this.state.currentMode === ModalMode.UNIT) ? this.handleUnitUpdate : this.handleItemUpdate}
      />
    );
  }

  generateListModal(mode) {
    return(
      <ModalList
        show={(mode === ModalMode.UNIT) ? this.state.unitListShow : this.state.itemListShow}
        mode={mode}
        list={(mode === ModalMode.UNIT) ? this.props.unitList : this.props.itemList}
        addAction={(mode === ModalMode.UNIT) ? this.handleUnitAdd : this.handleItemAdd}
        closeAction={(mode === ModalMode.UNIT) ? this.closeUnitListModal : this.closeItemListModal}
        editAction={this.showEditModal}
      />
    );
  }

  generateSettingsModal() {
    return(
      <ModalSettings
        dummy={this.props.dummy}
        show={this.state.settingsShow}
        closeAction={this.closeSettingsModal}
        switchDummyAction={this.props.switchDummyAction}
      />
    );
  }

  render() {
    const itemListModal = this.generateListModal(ModalMode.ITEM);
    const unitListModal = this.generateListModal(ModalMode.UNIT);
    const settingsModal = this.generateSettingsModal();
    const editModal = this.generateEditModal();

    return (
      <div className="Header">
        <button className="Header" onClick={this.props.reloadAction}>
          Reload
        </button>
        <button className="Header" onClick={this.showSettingsModal}>
          Settings
        </button>
        <button className="Header" onClick={this.showUnitListModal}>
          Units
        </button>
        <button className="Header" onClick={this.showItemListModal}>
          Items
        </button>

        <h1 className="Header">SemiSmartStorage</h1>

        {itemListModal}
        {unitListModal}
        {settingsModal}
        {editModal}
      </div>
    );
  }
}

export default Header;
