import React from 'react';
import renderer from 'react-test-renderer';
import Body from '../../components/Body';
import Header from '../../components/Header';
import { DummyItemListShort, DummyStorageContentShort, DummyStorageListShort, DummyUnitListShort } from '../../constants/dummyData';

describe('snapshot tests for Body component', () => {
  it('should render Body component correctly', () => {
    const addAction = jest.fn();
    const deleteAction = jest.fn();
    const switchStorageAction = jest.fn();
    const updateAction = jest.fn();

    const tree = renderer.create(
      <Body
        currentStorage={DummyStorageListShort[1]}
        currentStorageContent={DummyStorageContentShort}
        storageList={DummyStorageListShort}
        itemList={DummyItemListShort}
        unitList={DummyUnitListShort}
        addAction={addAction}
        deleteAction={deleteAction}
        switchStorageAction={switchStorageAction}
        updateAction={updateAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});

describe('snapshot tests for Header component', () => {
  it('should render Header component correctly', () => {
    const addAction = jest.fn();
    const deleteAction = jest.fn();
    const reloadAction = jest.fn();
    const switchDummyAction = jest.fn();
    const updateAction = jest.fn();

    const tree = renderer.create(
      <Header
        itemList={DummyItemListShort}
        unitList={DummyUnitListShort}
        dummy={true}
        addAction={addAction}
        deleteAction={deleteAction}
        reloadAction={reloadAction}
        switchDummyAction={switchDummyAction}
        updateAction={updateAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
