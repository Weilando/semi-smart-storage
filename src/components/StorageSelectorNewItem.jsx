import React from 'react';
import PropTypes from 'prop-types';
import { AddMode } from '../constants/enums';
import '../styles/StorageSelector.css';

class StorageSelectorNewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    addStorage: PropTypes.func.isRequired,
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addStorage(AddMode.STORAGE_LIST, this.state.name);
    this.setState({name: ''});
  }

  render() {
    return (
      <li className="StorageSelector">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="StorageSelector"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            className="StorageSelector"
            value="Add"
            disabled={this.state.name === ''}
          />
        </form>
      </li>
    );
  }

}

export default StorageSelectorNewItem;
