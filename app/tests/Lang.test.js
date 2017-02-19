import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/lib/test-utils';
import { print } from 'graphql-tag/printer';

import LangWithData, { LANG_QUERY, Lang } from 'components/Lang/Lang';

describe('Lang Container', () => {
  it('renders without crashing', () => {
    const output = renderer.create(
      <MockedProvider>
        <LangWithData />
      </MockedProvider>,
    );
    expect(output.toJSON()).toMatchSnapshot();
  });
});

describe('Lang Query', () => {
  it('should match expected shape', () => {
    expect(print(LANG_QUERY)).toMatchSnapshot();
  });
});

describe('Lang Component', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Lang terms={[{ children: [{ term_id: 1, slug: 'gb' }] }]} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

