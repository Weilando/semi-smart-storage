import React from 'react';
import renderer from 'react-test-renderer';
import { ModalMode } from '../../constants/modal';
import ModalList from '../../components/ModalList';
import ModalListItem from '../../components/ModalListItem';
import ModalListNewItem from '../../components/ModalListNewItem';

describe('snapshot tests for ModalList component', () => {
  it('should render visible ModalList component for items correctly', () => {
    const itemList = [
      {id: 0, name: "Sparkling water"},
      {id: 1, name: "Apple juice"},
      {id: 3, name: "Milk"},
    ];
    const addAction = jest.fn();
    const closeAction = jest.fn();
    const editAction = jest.fn();


    const tree = renderer.create(
      <ModalList
        show={true}
        list={itemList}
        mode={ModalMode.ITEM}
        addAction={addAction}
        closeAction={closeAction}
        editAction={editAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should render hidden ModalEdit component for units correctly', () => {
    const unitList = [
      {id: 1, name: "0.5L"},
      {id: 2, name: "0.75L"},
      {id: 3, name: "1.0L"}
    ];
    const addAction = jest.fn();
    const closeAction = jest.fn();
    const editAction = jest.fn();


    const tree = renderer.create(
      <ModalList
        show={false}
        list={unitList}
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
