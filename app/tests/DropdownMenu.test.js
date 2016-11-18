import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { DropdownMenu } from 'components/DropdownMenu/DropdownMenu';
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

describe('Test suite for DropdownMenu Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DropdownMenu {...mockedProps} />);
  });

  it('should render null when loading', () => {
    const mockedData = {
      loading: true
    };
    const wrapper = shallow(<DropdownMenu data={mockedData} />);
    expect(wrapper.type()).to.equal(null);
  });

  it('should not crash when menu is null', () => {
    const mockedData = {
      loading: false,
      wp_query: {
        menu: null
      }
    };
    shallow(<DropdownMenu data={mockedData} />);
  });

  it('should render the correct structure after loading', () => {
    expect(wrapper.type()).to.equal(DropdownButton);

    const menuItem1 = wrapper.childAt(0);
    expect(menuItem1.type()).to.equal(MenuItem);

    const langIcon1 = menuItem1.childAt(0);
    expect(langIcon1.type()).to.equal(MenuItemLink);

    const menuItem2 = wrapper.childAt(1);
    expect(menuItem2.type()).to.equal(MenuItem);

    const langIcon2 = menuItem2.childAt(0);
    expect(langIcon2.type()).to.equal(MenuItemLink);
  });

  it('should have DropdownButton with default style', () => {
    expect(wrapper.prop('bsStyle')).to.equal('default');
  });

  it('should have DropdownButton with noCaret', () => {
    expect(wrapper.prop('noCaret')).to.equal(true);
  });

  it('should have MenuItemLink with correct title prop', () => {
    const menuItem1 = wrapper.childAt(0);
    expect(menuItem1.type()).to.equal(MenuItem);

    const menuItemLink1 = menuItem1.childAt(0);
    expect(menuItemLink1.type()).to.equal(MenuItemLink);
    expect(menuItemLink1.props().title).to.equal('menu1');

    const menuItem2 = wrapper.childAt(1);
    expect(menuItem2.type()).to.equal(MenuItem);

    const menuItemLink2 = menuItem2.childAt(0);
    expect(menuItemLink2.type()).to.equal(MenuItemLink);
    expect(menuItemLink2.props().title).to.equal('menu2');
  });
});
