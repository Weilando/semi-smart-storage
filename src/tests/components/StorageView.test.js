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
    const addAction = jest.fn();
    const deleteAction = jest.fn();
    const updateAction = jest.fn();

    const tree = renderer.create(
      <StorageView
        storage={storage}
        storageContent={[]}
        itemList={[]}
        unitList={[]}
        addAction={addAction}
        deleteAction={deleteAction}
        updateAction={updateAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should render StorageView component with content correctly', () => {
    const storage = {id: 3, name: "Fridge"};
    const addAction = jest.fn();
    const deleteAction = jest.fn();
    const updateAction = jest.fn();

    const tree = renderer.create(
      <StorageView
        storage={storage}
        storageContent={DummyStorageContentShort}
        itemList={DummyItemListShort}
        unitList={DummyUnitListShort}
        addAction={addAction}
        deleteAction={deleteAction}
        updateAction={updateAction}
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
    const deleteAction = jest.fn();
    const editAction = jest.fn();
    const updateAction = jest.fn();
    const removeAction = jest.fn();

    const tree = renderer.create(
      <StorageViewItem
        iId={42}
        iName="Milk"
        iUnit="1L"
        iQuantity={2.5}
        storageId={3}
        deleteAction={deleteAction}
        editAction={editAction}
        updateAction={updateAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});

describe('snapshot tests for StorageViewNewItem component', () => {
  it('should render empty StorageViewNewItem component correctly', () => {
    const tree = renderer.create(
      <StorageViewNewItem
        storageId={7}
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
        storageId={7}
        addAction={jest.fn()}
        itemList={DummyItemListShort}
        unitList={DummyUnitListShort}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
