import React from 'react';
import renderer from 'react-test-renderer';
import Body from '../../components/Body';
import Header from '../../components/Header';
import { DummyItemListShort, DummyStorageContentShort, DummyStorageListShort, DummyUnitListShort } from '../../constants/dummyData';

describe('snapshot tests for Body component', () => {
  it('should render Body component correctly', () => {
    const addStorageAction = jest.fn();
    const deleteStorageAction = jest.fn();
    const switchStorageAction = jest.fn();
    const updateStorageAction = jest.fn();
    const addItemToStorageAction = jest.fn();
    const decrementQuantityForItemAction = jest.fn();
    const incrementQuantityForItemAction = jest.fn();
    const removeItemFromStorageAction = jest.fn();

    const tree = renderer.create(
      <Body
        currentStorage={DummyStorageListShort[1]}
        currentStorageContent={DummyStorageContentShort}
        storageList={DummyStorageListShort}
        itemList={DummyItemListShort}
        unitList={DummyUnitListShort}
        addStorageAction={addStorageAction}
        deleteStorageAction={deleteStorageAction}
        switchStorageAction={switchStorageAction}
        updateStorageAction={updateStorageAction}
        addItemToStorageAction={addItemToStorageAction}
        decrementQuantityForItemAction={decrementQuantityForItemAction}
        incrementQuantityForItemAction={incrementQuantityForItemAction}
        removeItemFromStorageAction={removeItemFromStorageAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});

describe('snapshot tests for Header component', () => {
  it('should render Header component correctly', () => {
    const reloadAction = jest.fn();
    const switchDummyAction = jest.fn();
    const addItemAction = jest.fn();
    const addUnitAction = jest.fn();
    const deleteItemAction = jest.fn();
    const deleteUnitAction = jest.fn();
    const updateItemAction = jest.fn();
    const updateUnitAction = jest.fn();

    const tree = renderer.create(
      <Header
        itemList={DummyItemListShort}
        unitList={DummyUnitListShort}
        dummy={true}
        reloadAction={reloadAction}
        switchDummyAction={switchDummyAction}
        addItemAction={addItemAction}
        addUnitAction={addUnitAction}
        deleteItemAction={deleteItemAction}
        deleteUnitAction={deleteUnitAction}
        updateItemAction={updateItemAction}
        updateUnitAction={updateUnitAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
