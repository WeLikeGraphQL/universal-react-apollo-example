import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from 'components/Header/Header';
import Menu from 'components/Menu/Menu';
import Lang from 'components/Lang/Lang';

describe('Test suite for Header Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('should render the correct structure', () => {
    expect(wrapper.type()).to.equal('header');

    const child2 = wrapper.childAt(1);
    expect(child2.type()).to.equal('nav');

    const menu = child2.childAt(0);
    expect(menu.type()).to.equal(Menu);

    const lang = child2.childAt(1);
    expect(lang.type()).to.equal(Lang);
  });

  it('should animate logo', () => {
    const child1 = wrapper.childAt(0);
    expect(child1.type()).to.equal('div');
    expect(child1.prop('data-wow-delay')).to.equal('0.5s');
  });
});
