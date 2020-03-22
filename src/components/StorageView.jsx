import React from 'react';
import PropTypes from 'prop-types';
import StorageViewHead from './StorageViewHead';
import StorageViewItem from './StorageViewItem';
import StorageViewNewItem from './StorageViewNewItem';
import ModalEditQuantity from './ModalEditQuantity';
import { UpdateMode } from '../constants/enums';
import '../styles/StorageView.css';

class StorageView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editShow: false,
      editId: 0,
      editQuantity: 0,
      editBuffer: 0
    };

    this.showEditQuantityModal = this.showEditQuantityModal.bind(this);
    this.closeEditQuantityModal = this.closeEditQuantityModal.bind(this);
    this.generateEditQuantityModal = this.generateEditQuantityModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  static propTypes = {
    storage: PropTypes.shape(
      {id: PropTypes.number.isRequired, name: PropTypes.string.isRequired}
    ).isRequired,
    storageContent: PropTypes.arrayOf(
      PropTypes.shape(
        {id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired
        }
      )
    ).isRequired,
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
    addAction: PropTypes.func.isRequired,
    deleteAction: PropTypes.func.isRequired,
    updateAction: PropTypes.func.isRequired,
  }

  // edit-modal handling
  showEditQuantityModal(id, quantity) {
    if(this.state.editShow === false) {
      this.setState({editShow: true, editId: id, editQuantity: quantity, editBuffer: quantity});
    }
  }

  closeEditQuantityModal() {
    if(this.state.editShow === true) {
      this.setState({editShow: false});
    }
  }

  handleChange(event) {
    this.setState({editBuffer: Number(event.target.value)});
  }

  handleUpdate(event) {
    event.preventDefault();
    if(this.state.editBuffer !== this.state.editQuantity) {
      this.props.updateAction(UpdateMode.STORAGE_CONTENT_EDIT, this.state.editId, this.state.editBuffer, this.props.storage.id);
    }
    this.closeEditQuantityModal();
  }


  // rendering
  unpackStorageContent() {
    const keys = [...Array(this.props.storageContent.length).keys()]; // Array with keys from 0 to entries.length

    return keys.map((currKey) =>
      <StorageViewItem
        key={this.props.storageContent[currKey].id}
        iId={this.props.storageContent[currKey].id}
        iName={this.props.storageContent[currKey].name}
        iUnit={this.props.storageContent[currKey].unit}
        iQuantity={this.props.storageContent[currKey].quantity}
        storageId={this.props.storage.id}
        deleteAction={this.props.deleteAction}
        editAction={this.showEditQuantityModal}
        updateAction={this.props.updateAction}
      />
    );
  }

  generateEditQuantityModal() {
    return(
      <ModalEditQuantity
        show={this.state.editShow}
        quantity={this.state.editQuantity}
        buffer={Number(this.state.editBuffer)}
        closeAction={this.closeEditQuantityModal}
        changeAction={this.handleChange}
        updateAction={this.handleUpdate}
      />
    );
  }

  render() {
    let content = this.unpackStorageContent();
    let modal = this.generateEditQuantityModal();

    return (
      <div className="StorageView">
        <table className="StorageView">
          <StorageViewHead/>

          <tbody>
            {content}
          </tbody>

          <StorageViewNewItem
            storageId={this.props.storage.id}
            itemList={this.props.itemList}
            unitList={this.props.unitList}
            addAction={this.props.addAction}
          />
        </table>
        {modal}
      </div>
    );
  }
}

export default StorageView;
