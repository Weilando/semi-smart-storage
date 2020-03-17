import React from 'react';
import PropTypes from 'prop-types';
import '../styles/StorageSelector.css';

class StorageSelectorNewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    addStorage: PropTypes.func.isRequired,
  }

  handleChange(event) {
    this.setState({content: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addStorage(this.state.content);
    this.setState({content: ''});
  }

  render() {
    return (
      <li className="StorageSelector">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="StorageSelector"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            className="StorageSelector"
            value="Add"
            disabled={this.state.content === ''}
          />
        </form>
      </li>
    );
  }

}

export default StorageSelectorNewItem;
