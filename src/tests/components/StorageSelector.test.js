import React from 'react';
import renderer from 'react-test-renderer';
import StorageSelector from '../../components/StorageSelector';
import StorageSelectorItem from '../../components/StorageSelectorItem';
import StorageSelectorNewItem from '../../components/StorageSelectorNewItem';

describe('snapshot tests for StorageSelector component', () => {
  it('should render initial StorageSelector component correctly', () => {
    const storageList = [
      {id: 0, name: 'Fridge'},
      {id: 1, name: 'Basement'}
    ];
    const switchStorageAction = jest.fn();

    const tree = renderer.create(
      <StorageSelector
        currentStorage={storageList[0]}
        storageList={storageList}
        switchStorageAction={switchStorageAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});

describe('snapshot tests for StorageSelectorItem component', () => {
  it('should render initial active StorageSelectorItem component correctly', () => {
    const storage = {id: 0, name: 'Fridge'};
    const editAction = jest.fn();
    const showAction = jest.fn();

    const tree = renderer.create(
      <StorageSelectorItem
        storage={storage}
        editAction={editAction}
        showAction={showAction}
        active={true}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should render initial inactive StorageSelectorItem component correctly', () => {
    const storage = {id: 0, name: 'Fridge'};
    const editAction = jest.fn();
    const showAction = jest.fn();

    const tree = renderer.create(
      <StorageSelectorItem
        storage={storage}
        editAction={editAction}
        showAction={showAction}
        active={false}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});

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
