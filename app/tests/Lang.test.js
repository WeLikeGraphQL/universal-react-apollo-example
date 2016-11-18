import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { Lang } from 'components/Lang/Lang';
import LangIcon from 'components/LangIcon/LangIcon';

const mockedProps = {
  langauge: 'pl',
  changeLang: '',
  data: {
    loading: false,
    wp_query: {
      terms: [
        {
          term_id: 1,
          children: [
            {
              term_id: 2,
              slug: 'pl'
            },
            {
              term_id: 3,
              slug: 'gb'
            }
          ]
        }
      ]
    }
  }
};

describe('Test suite for Lang Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Lang {...mockedProps} />);
  });

  it('should render null when loading', () => {
    const mockedData = {
      loading: true
    };
    const wrapper = shallow(<Lang data={mockedData} />);
    expect(wrapper.type()).to.equal(null);
  });

  it('should render the correct structure after loading', () => {
    expect(wrapper.type()).to.equal(DropdownButton);

    const menuItem1 = wrapper.childAt(0);
    expect(menuItem1.type()).to.equal(MenuItem);

    const langIcon1 = menuItem1.childAt(0);
    expect(langIcon1.type()).to.equal(LangIcon);

    const menuItem2 = wrapper.childAt(1);
    expect(menuItem2.type()).to.equal(MenuItem);

    const langIcon2 = menuItem2.childAt(0);
    expect(langIcon2.type()).to.equal(LangIcon);
  });

  it('should have DropdownButton with default style', () => {
    expect(wrapper.prop('bsStyle')).to.equal('default');
  });

  // TODO: how to test it?
  it('should have LangIcon in DropdownButton title prop', () => {
    // const wrapper = mount(<Lang {...mockedProps} />);

    // it is undefined
    // console.log(wrapper.childAt(0).props().title);
  });

  it('should have LangIcon with correct language prop', () => {
    const menuItem1 = wrapper.childAt(0);
    const langIcon1 = menuItem1.childAt(0);
    expect(langIcon1.prop('language')).to.equal('pl');

    const menuItem2 = wrapper.childAt(1);
    const langIcon2 = menuItem2.childAt(0);
    expect(langIcon2.prop('language')).to.equal('gb');
  });

  it('should have MenuItem with onClick function passed as a prop', () => {
    const changeLang = sinon.spy();
    const wrapper = shallow(<Lang {...mockedProps} changeLang={changeLang} />);

    const menuItem1 = wrapper.childAt(0);
    menuItem1.simulate('click');
    expect(changeLang.calledOnce).to.equal(true);
  });
});


describe('Test suite for Lang Container', () => {
  // TODO: make it passing without errors in the console (it passes now)
  // it("should render the container", () => {
  //   const wrapper = mount(
  //     <MockedProvider mocks={[
  //       {request: {query: LANG_QUERY}, result: {data: {}}}
  //     ]}>
  //       <LangContainer />
  //     </MockedProvider>
  //   );
  //
  //   const container = wrapper.find(LangContainer);
  //   expect(container.length).to.equal(1);
  //   expect(container.find(Lang).length).to.equal(1);
  // })

  // TODO: make it working
  // it should work according to: http://airbnb.io/enzyme/docs/api/mount.html
  it('should perform changeLang function', () => {
    // const changeLangStub = sinon.spy();
    // const wrapper = mount(<Lang language="" changeLang={changeLangStub} data={mockedProps} />);
    //
    // const menuItem = wrapper.find(MenuItem).first();
    // expect(menuItem.type()).to.equal(MenuItem);
    // menuItem.simulate('click');
    // expect(changeLangStub.callCount).to.equal(1);
  });
});
