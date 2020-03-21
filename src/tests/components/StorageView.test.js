import React from 'react';
import renderer from 'react-test-renderer';
import StorageView from '../../components/StorageView';
import StorageViewHead from '../../components/StorageViewHead';
import StorageViewItem from '../../components/StorageViewItem';
import StorageViewNewItem from '../../components/StorageViewNewItem';
import { DummyItemListShort, DummyStorageContentShort, DummyUnitListShort} from '../../constants/dummyData';

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
    const addItemToStorageAction = jest.fn();
    const decrementQuantityForItemAction = jest.fn();
    const incrementQuantityForItemAction = jest.fn();
    const removeItemFromStorageAction = jest.fn();

    const tree = renderer.create(
      <StorageView
        storage={storage}
        storageContent={DummyStorageContentShort}
        itemList={DummyItemListShort}
        unitList={DummyUnitListShort}
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
    const tree = renderer.create(
      <StorageViewNewItem
        addAction={jest.fn()}
        itemList={[]}
        unitList={[]}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should render StorageViewNewItem component with units and items correctly', () => {
    const tree = renderer.create(
      <StorageViewNewItem
        addAction={jest.fn()}
        itemList={DummyItemListShort}
        unitList={DummyUnitListShort}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
