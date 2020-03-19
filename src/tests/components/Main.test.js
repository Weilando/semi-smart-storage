import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../components/Header';
import Body from '../../components/Body';

describe('snapshot tests for Header component', () => {
  it('should render Header component correctly', () => {
    const tree = renderer.create(
      <Header/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
