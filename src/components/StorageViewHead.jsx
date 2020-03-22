import React from 'react';
import '../styles/StorageView.css';

function StorageViewHead(props) {
  return (
    <thead>
      <tr>
        <th width="50%">Name</th>
        <th width="20%">Unit</th>
        <th width="20%">Quantity</th>
        <th width="10%">Options</th>
      </tr>
    </thead>
  );
}

export default StorageViewHead;
