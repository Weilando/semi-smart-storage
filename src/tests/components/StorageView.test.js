import React from 'react';
import renderer from 'react-test-renderer';
import StorageView from '../../components/StorageView';
import StorageViewHead from '../../components/StorageViewHead';
import StorageViewItem from '../../components/StorageViewItem';
import StorageViewNewItem from '../../components/StorageViewNewItem';

describe('snapshot tests for StorageView component', () => {
  it('should render empty StorageView component correctly', () => {
    const storage = {id: 0, name: "Basement"};
    const addItemToStorageAction = jest.fn();
    const decrementQuantityForItemAction = jest.fn();
    const incrementQuantityForItemAction = jest.fn();
    const removeItemFromStorageAction = jest.fn();

    const tree = renderer.create(
      <StorageView
        storage={storage}
        storageContent={[]}
        itemList={[]}
        unitList={[]}
        addItemToStorageAction={addItemToStorageAction}
        decrementQuantityForItemAction={decrementQuantityForItemAction}
        incrementQuantityForItemAction={incrementQuantityForItemAction}
        removeItemFromStorageAction={removeItemFromStorageAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should render StorageView component with content correctly', () => {
    const storage = {id: 3, name: "Fridge"};
    const storageContent = [
      {id: 0, name: "Milk", unit: "1L", quantity: 2.7},
      {id: 1, name: "Coke", unit: "0.33L", quantity: 5},
      {id: 3, name: "Sparkling water", unit: "0.75L", quantity: 21},
    ];
    const itemList = [
      {id: 0, name: "Sparkling water"},
      {id: 1, name: "Apple juice"},
      {id: 3, name: "Milk"},
      {id: 5, name: "Coke"}
    ];
    const unitList = [
      {id: 0, name: "0.33L"},
      {id: 1, name: "0.5L"},
      {id: 2, name: "0.75L"},
      {id: 3, name: "1.0L"}
    ];
    const addItemToStorageAction = jest.fn();
    const decrementQuantityForItemAction = jest.fn();
    const incrementQuantityForItemAction = jest.fn();
    const removeItemFromStorageAction = jest.fn();

    const tree = renderer.create(
      <StorageView
        storage={storage}
        storageContent={storageContent}
        itemList={itemList}
        unitList={unitList}
        addItemToStorageAction={addItemToStorageAction}
        decrementQuantityForItemAction={decrementQuantityForItemAction}
        incrementQuantityForItemAction={incrementQuantityForItemAction}
        removeItemFromStorageAction={removeItemFromStorageAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});

describe('snapshot tests for StorageViewHead component', () => {
  it('should render StorageViewHead component correctly', () => {
    const tree = renderer.create(
      <StorageViewHead/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});

describe('snapshot tests for StorageViewItem component', () => {
  it('should render StorageViewItem component correctly', () => {
    const editAction = jest.fn();
    const decrementAction = jest.fn();
    const incrementAction = jest.fn();
    const removeAction = jest.fn();

    const tree = renderer.create(
      <StorageViewItem
        iId={42}
        iName="Milk"
        iUnit="1L"
        iQuantity={2.5}
        decrementAction={decrementAction}
        incrementAction={incrementAction}
        editAction={editAction}
        removeAction={removeAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});

describe('snapshot tests for StorageViewNewItem component', () => {
  it('should render empty StorageViewNewItem component correctly', () => {
    const addAction = jest.fn();
    const items = [];
    const units = [];

    const tree = renderer.create(
      <StorageViewNewItem
        addAction={addAction}
        itemList={items}
        unitList={units}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should render StorageViewNewItem component with units and items correctly', () => {
    const addAction = jest.fn();
    const items = [{id: 0, name: "Sparkling water"}, {id: 1, name: "Apple juice"}, {id: 2, name: "Craft beer"}, {id: 3, name: "Milk"}, {id: 5, name: "Coke"}];
    const units = [{id: 0, name: "0.33L"}, {id: 1, name: "0.5L"}, {id: 2, name: "1.0L"}];

    const tree = renderer.create(
      <StorageViewNewItem
        addAction={addAction}
        itemList={items}
        unitList={units}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
