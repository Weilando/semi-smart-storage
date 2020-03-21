import React from 'react';
import renderer from 'react-test-renderer';
import Body from '../../components/Body';
import Header from '../../components/Header';

describe('snapshot tests for Body component', () => {
  it('should render Body component correctly', () => {
    const storageList = [
      {id: 0, name: "Basement"},
      {id: 3, name: "Fridge"}
    ];
    const currentStorageContent = [
      {id: 0, name: "Milk", unit: "1L", quantity: 2.7},
      {id: 2, name: "Sparkling water", unit: "0.75L", quantity: 21},
    ];
    const itemList = [
      {id: 0, name: "Sparkling water"},
      {id: 1, name: "Apple juice"},
      {id: 3, name: "Milk"},
    ];
    const unitList = [
      {id: 1, name: "0.5L"},
      {id: 2, name: "0.75L"},
      {id: 3, name: "1.0L"}
    ];
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
        currentStorage={storageList[1]}
        currentStorageContent={currentStorageContent}
        storageList={storageList}
        itemList={itemList}
        unitList={unitList}
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
    const itemList = [
      {id: 0, name: "Sparkling water"},
      {id: 1, name: "Apple juice"},
      {id: 3, name: "Milk"},
    ];
    const unitList = [
      {id: 1, name: "0.5L"},
      {id: 2, name: "0.75L"},
      {id: 3, name: "1.0L"}
    ];
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
        itemList={itemList}
        unitList={unitList}
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
