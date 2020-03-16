import React from 'react';
import StorageView from './StorageView';
import StorageSelector from './StorageSelector';
import '../styles/Body.css';

class Body extends React.Component {
  render() {
    return (
      <div className="Body">
        <StorageSelector/>
        <StorageView/>
      </div>
    );
  }
}

export default Body;
