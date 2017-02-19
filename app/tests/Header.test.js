import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/lib/test-utils';

import Header from 'components/Header/Header';

describe('Header Component', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <MockedProvider>
        <Header />
      </MockedProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
