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
    const switchStorageAction = jest.fn();

    const tree = renderer.create(
      <Body
        currentStorage={storageList[1]}
        currentStorageContent={currentStorageContent}
        storageList={storageList}
        itemList={itemList}
        unitList={unitList}
        switchStorageAction={switchStorageAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});

describe('snapshot tests for Header component', () => {
  it('should render Header component correctly', () => {
    const tree = renderer.create(
      <Header/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
