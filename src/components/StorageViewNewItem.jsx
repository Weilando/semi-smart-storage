import React from 'react';
import PropTypes from 'prop-types';
import { AddMode } from '../constants/enums';
import '../styles/StorageView.css';

class StorageViewNewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: -1,
      unit: -1,
      quantity: 0,
    }

    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleUnitChange = this.handleUnitChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    storageId: PropTypes.number.isRequired,
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
  }


  // handling inputs
  handleItemChange(event) {
    this.setState({item: Number(event.target.value)});
  }

  handleUnitChange(event) {
    this.setState({unit: Number(event.target.value)});
  }

  handleQuantityChange(event) {
    this.setState({quantity: Number(event.target.value)});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addAction(AddMode.STORAGE_CONTENT, this.state.item, this.state.unit, this.state.quantity, this.props.storageId);
    this.setState({item: -1, unit: -1, quantity: 0});
  }

  // rendering
  unpackItemList() {
    return this.props.itemList.map((currItem) =>
      <option key={currItem.id} value={currItem.id}>
        {currItem.name}
      </option>
    );
  }

  unpackUnitList() {
    return this.props.unitList.map((currUnit) =>
      <option key={currUnit.id} value={currUnit.id}>
        {currUnit.name}
      </option>
    );
  }

  render() {
    let itemOptions = this.unpackItemList();
    let unitOptions = this.unpackUnitList();

    return(
      <tfoot>
        <tr>
          <td>
            <select id="Item" name="Item" onChange={this.handleItemChange} value={this.state.item}>
              <option className="choose" value={-1}>-Choose item-</option>
              {itemOptions}
            </select>
          </td>
          <td>
            <select id="Unit" name="Unit" onChange={this.handleUnitChange} value={this.state.unit}>
              <option className="choose" value={-1}>-Choose unit-</option>
              {unitOptions}
            </select>
          </td>
          <td colSpan="2">
            <form onSubmit={this.handleSubmit}>
              <input type="number"
                min="0" step="0.05"
                value={this.state.quantity}
                onChange={this.handleQuantityChange}
              />
              <input type="submit" value="Add"
                disabled={(this.state.quantity === '') || (this.state.item===-1) || (this.state.unit===-1)}
              />
            </form>
          </td>
        </tr>
      </tfoot>
    );
  }
}

export default StorageViewNewItem;
