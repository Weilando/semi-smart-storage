import React from 'react';
import renderer from 'react-test-renderer';
import { ModalMode } from '../../constants/enums';
import ModalEdit from '../../components/ModalEdit';

describe('snapshot tests for ModalEdit component', () => {
  it('should render visible ModalEdit component for storages correctly', () => {
    const changeAction = jest.fn();
    const closeAction = jest.fn();
    const deleteAction = jest.fn();
    const updateAction = jest.fn();


    const tree = renderer.create(
      <ModalEdit
        show={true}
        name="Fridge"
        mode={ModalMode.STORAGE}
        buffer="Fridgerator"
        closeAction={closeAction}
        changeAction={changeAction}
        deleteAction={updateAction}
        updateAction={updateAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should render hidden ModalEdit component for storages correctly', () => {
    const changeAction = jest.fn();
    const closeAction = jest.fn();
    const deleteAction = jest.fn();
    const updateAction = jest.fn();


    const tree = renderer.create(
      <ModalEdit
        show={false}
        name="Fridge"
        mode={ModalMode.STORAGE}
        buffer="Fridge"
        closeAction={closeAction}
        changeAction={changeAction}
        deleteAction={updateAction}
        updateAction={updateAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
