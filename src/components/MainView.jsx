import React from 'react';
import StorageView from './StorageView';
import StorageSelector from './StorageSelector';
import './Views.css';

class MainView extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="MainView">
        <StorageSelector/>
        <StorageView/>
      </div>
    );
  }
}

export default MainView;
