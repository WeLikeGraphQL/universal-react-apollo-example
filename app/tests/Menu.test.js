import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Menu from 'components/Menu/Menu';
import NavMenu from 'components/NavMenu/NavMenu';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';

describe('Test suite for Menu Component', () => {
  it('should render the component after loading', () => {
    const wrapper = shallow(<Menu />);

    expect(wrapper.find(NavMenu).length).to.equal(1);
    expect(wrapper.find(DropdownMenu).length).to.equal(1);
  });
});
