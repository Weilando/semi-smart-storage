import React from 'react';
import renderer from 'react-test-renderer';
import ModalEditQuantity from '../../components/ModalEditQuantity';

describe('snapshot tests for ModalEditQuantity component', () => {
  it('should render visible ModalEditQuantity component correctly', () => {
    const changeAction = jest.fn();
    const closeAction = jest.fn();
    const updateAction = jest.fn();

    const tree = renderer.create(
      <ModalEditQuantity
        show={true}
        quantity={4}
        buffer={5}
        closeAction={closeAction}
        changeAction={changeAction}
        updateAction={updateAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should render hidden ModalEditQuantity component correctly', () => {
    const changeAction = jest.fn();
    const closeAction = jest.fn();
    const updateAction = jest.fn();

    const tree = renderer.create(
      <ModalEditQuantity
        show={false}
        quantity={4}
        buffer={5}
        closeAction={closeAction}
        changeAction={changeAction}
        updateAction={updateAction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
