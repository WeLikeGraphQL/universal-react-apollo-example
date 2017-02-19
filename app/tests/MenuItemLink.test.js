import React from 'react';
import renderer from 'react-test-renderer';

import MenuItemLink from 'components/MenuItemLink/MenuItemLink';

describe('MenuItemLink Component', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <MenuItemLink title="title" />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
