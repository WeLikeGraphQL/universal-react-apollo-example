import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { NavMenu } from 'components/NavMenu/NavMenu';
import MenuItemLink from 'components/MenuItemLink/MenuItemLink';

const mockedProps = {
  data: {
    loading: false,
    wp_query: {
      menu: [
        {
          id: 1,
          title: 'menu1'
        },
        {
          id: 2,
          title: 'menu2'
        }
      ]
    }
  }
};

describe('Test suite for NavMenu Component', () => {
  it('should render null when loading', () => {
    const mockedData = {
      loading: true
    };
    const wrapper = shallow(<NavMenu data={mockedData} />);
    expect(wrapper.type()).to.equal(null);
  });

  it('should not crash when menu is null', () => {
    const mockedData = {
      loading: false,
      wp_query: {
        menu: null
      }
    };
    shallow(<NavMenu data={mockedData} />);
  });

  it('should render the correct structure', () => {
    const wrapper = shallow(<NavMenu {...mockedProps} />);

    expect(wrapper.type()).to.equal('ul');

    const menuItem1 = wrapper.childAt(0);
    expect(menuItem1.type()).to.equal('li');

    const menuItemLink1 = menuItem1.childAt(0);
    expect(menuItemLink1.type()).to.equal(MenuItemLink);
    expect(menuItemLink1.props().title).to.equal('menu1');

    const menuItem2 = wrapper.childAt(1);
    expect(menuItem2.type()).to.equal('li');

    const menuItemLink2 = menuItem2.childAt(0);
    expect(menuItemLink2.type()).to.equal(MenuItemLink);
    expect(menuItemLink2.props().title).to.equal('menu2');
  });
});
