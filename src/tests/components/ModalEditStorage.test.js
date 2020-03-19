import React from 'react';
import renderer from 'react-test-renderer';
import ModalEditStorage from '../../components/ModalEditStorage';

describe('snapshot tests for ModalEditStorage component', () => {
  it('should render visible ModalEditStorage component correctly', () => {
    const changeAction = jest.fn();
    const closeAction = jest.fn();
    const deleteAction = jest.fn();
    const updateAction = jest.fn();


    const tree = renderer.create(
      <ModalEditStorage
        show={true}
        sName="Fridge"
        buffer="Fridgerator"
        closeAction={closeAction}
        changeAction={changeAction}
        deleteAction={updateAction}
        updateAction={updateAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should render hidden ModalEditStorage component correctly', () => {
    const changeAction = jest.fn();
    const closeAction = jest.fn();
    const deleteAction = jest.fn();
    const updateAction = jest.fn();


    const tree = renderer.create(
      <ModalEditStorage
        show={false}
        sName="Fridge"
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
