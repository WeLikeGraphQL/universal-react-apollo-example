import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/lib/test-utils';

import Menu from 'components/Menu/Menu';

describe('Menu Component', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <MockedProvider><Menu /></MockedProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
