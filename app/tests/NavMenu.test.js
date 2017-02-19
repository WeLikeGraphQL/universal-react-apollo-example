import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/lib/test-utils';
import { print } from 'graphql-tag/printer';

import NavMenuWithData, { MENU_QUERY, NavMenu } from 'components/NavMenu/NavMenu';

describe('NavMenu Container', () => {
  it('renders without crashing', () => {
    const output = renderer.create(
      <MockedProvider>
        <NavMenuWithData />
      </MockedProvider>,
    );
    expect(output.toJSON()).toMatchSnapshot();
  });
});

describe('NavMenu Query', () => {
  it('should match expected shape', () => {
    expect(print(MENU_QUERY)).toMatchSnapshot();
  });
});

describe('NavMenu Component', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <NavMenu menu={[{ id: 1, title: 'ok' }]} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
