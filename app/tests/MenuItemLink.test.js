import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-scroll';

import MenuItemLink from 'components/MenuItemLink/MenuItemLink';

describe('Test suite for MenuItemLink Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MenuItemLink title="Title" />);
  });

  it('should render correctly', () => {
    expect(wrapper.type()).to.equal(Link);
  });

  it('should have lowercased title in `to` prop', () => {
    expect(wrapper.prop('to')).to.equal('title');
  });

  it('should invoke smooth navigation', () => {
    expect(wrapper.prop('smooth')).to.equal(true);
  });
});
