import React from 'react';
import PropTypes from 'prop-types';
import { AddMode } from '../constants/enums';

class StorageViewNewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: 0,
      unit: 0,
      quantity: 0,
    }

    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleUnitChange = this.handleUnitChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.addAction(AddMode.STORAGE_CONTENT, this.state.item, this.state.unit, this.state.quantity);
    this.setState({item: 0, unit: 0, quantity: 0});
  }

  // rendering
  unpackItemList() {
    const keys = [...Array(this.props.itemList.length).keys()]; // Array with keys from 0 to entries.length

    return keys.map((currKey) =>
      <option
        key={this.props.itemList[currKey].id}
        value={this.props.itemList[currKey].id}

      >
        {this.props.itemList[currKey].name}
      </option>
    );
  }

  unpackUnitList() {
    const keys = [...Array(this.props.unitList.length).keys()]; // Array with keys from 0 to entries.length

    return keys.map((currKey) =>
      <option
        key={this.props.unitList[currKey].id}
        value={this.props.unitList[currKey].id}
        //{currKey === 0 ? 'selected' : }
      >
        {this.props.unitList[currKey].name}
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
            <select id="Item" name="Item" onChange={this.handleItemChange}>
              {itemOptions}
            </select>
          </td>
          <td>
            <select id="Unit" name="Unit" onChange={this.handleUnitChange}>
              {unitOptions}
            </select>
          </td>
          <td>
            <input
              type="number"
              min="0"
              value={this.state.quantity}
              onChange={this.handleQuantityChange}
            />
          </td>
          <td>
            <button onClick={this.handleSubmit} disabled={this.state.quantity === ''}>
              Add
            </button>
          </td>
        </tr>
      </tfoot>
    );
  }
}

export default StorageViewNewItem;
