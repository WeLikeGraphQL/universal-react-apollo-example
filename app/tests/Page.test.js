import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/lib/test-utils';
import { print } from 'graphql-tag/printer';

import PageWithData, { PAGE_QUERY, Page } from 'components/Page/Page';

describe('Page Container', () => {
  it('renders without crashing', () => {
    const output = renderer.create(
      <MockedProvider>
        <PageWithData />
      </MockedProvider>,
    );
    expect(output.toJSON()).toMatchSnapshot();
  });
});

describe('Page Query', () => {
  it('should match expected shape', () => {
    expect(print(PAGE_QUERY)).toMatchSnapshot();
  });
});

describe('Page Component', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Page menu={[{ id: 1, title: 'ok' }]} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
