import React from 'react';
import renderer from 'react-test-renderer';
import StorageViewHead from '../../components/StorageViewHead';
import StorageViewItem from '../../components/StorageViewItem';
import StorageViewNewItem from '../../components/StorageViewNewItem';

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
