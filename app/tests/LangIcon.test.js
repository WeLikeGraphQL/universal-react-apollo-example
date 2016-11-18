import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import LangIcon from 'components/LangIcon/LangIcon';

describe('Test suite for LangIcon Component', () => {
  it('should render span with correct classes', () => {
    const wrapper = shallow(<LangIcon language="gb" />);

    expect(wrapper.prop('className')).to.equal('flag-icon flag-icon-gb');
  });
});
