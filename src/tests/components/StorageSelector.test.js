import React from 'react';
import renderer from 'react-test-renderer';
import StorageSelectorNewItem from '../../components/StorageSelectorNewItem';

describe('snapshot tests for StorageSelectorNewItem component', () => {
  it('should render initial StorageSelectorNewItem component correctly', () => {
    const addAction = jest.fn();

    const tree = renderer.create(
      <StorageSelectorNewItem
        addStorage={addAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
