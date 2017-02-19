import React from 'react';
import renderer from 'react-test-renderer';

import LangIcon from 'components/LangIcon/LangIcon';

describe('LangIcon Component', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <LangIcon />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
