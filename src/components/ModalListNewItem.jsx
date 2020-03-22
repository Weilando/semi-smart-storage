import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';

class ModalListNewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    addAction: PropTypes.func.isRequired,
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addAction(this.state.name);
    this.setState({name: ''});
  }

  render() {
    return (
      <li className="Modal">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="ModalList"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            className="ModalList"
            value="Add"
            disabled={this.state.name === ''}
          />
        </form>
      </li>
    );
  }

}

export default ModalListNewItem;
