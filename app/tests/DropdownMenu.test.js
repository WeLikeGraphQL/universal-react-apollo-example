import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/lib/test-utils';
import { print } from 'graphql-tag/printer';

import DropdownMenuWithData, { MENU_QUERY, DropdownMenu } from 'components/DropdownMenu/DropdownMenu';

describe('DropdownMenu Container', () => {
  it('renders without crashing', () => {
    const output = renderer.create(
      <MockedProvider>
        <DropdownMenuWithData />
      </MockedProvider>,
    );
    expect(output.toJSON()).toMatchSnapshot();
  });
});

describe('DropdownMenu Query', () => {
  it('should match expected shape', () => {
    expect(print(MENU_QUERY)).toMatchSnapshot();
  });
});

describe('DropdownMenu Component', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <DropdownMenu menu={[{ id: 1, title: 'ok' }]} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
