import React from 'react';
import renderer from 'react-test-renderer';
import ModalList from '../../components/ModalList';
import ModalListItem from '../../components/ModalListItem';
import ModalListNewItem from '../../components/ModalListNewItem';
import { ModalMode } from '../../constants/enums';
import { DummyItemListShort, DummyUnitListShort } from '../../constants/dummyData';

describe('snapshot tests for ModalList component', () => {
  it('should render visible ModalList component for items correctly', () => {
    const addAction = jest.fn();
    const closeAction = jest.fn();
    const editAction = jest.fn();

    const tree = renderer.create(
      <ModalList
        show={true}
        list={DummyItemListShort}
        mode={ModalMode.ITEM}
        addAction={addAction}
        closeAction={closeAction}
        editAction={editAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should render hidden ModalEdit component for units correctly', () => {
    const addAction = jest.fn();
    const closeAction = jest.fn();
    const editAction = jest.fn();

    const tree = renderer.create(
      <ModalList
        show={false}
        list={DummyUnitListShort}
        mode={ModalMode.ITEM}
        addAction={addAction}
        closeAction={closeAction}
        editAction={editAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});

describe('snapshot tests for ModalListItem component', () => {
  it('should render ModalListItem component correctly', () => {
    const obj = {id: 0, name: "Sparkling water"}
    const editAction = jest.fn();

    const tree = renderer.create(
      <ModalListItem
        obj={obj}
        editAction={editAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});

describe('snapshot tests for ModalListNewItem component', () => {
  it('should render ModalListNewItem component correctly', () => {
    const addAction = jest.fn();

    const tree = renderer.create(
      <ModalListNewItem
        addAction={addAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
