import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import WOW from 'wow.js/dist/wow.js';

import App from 'App';
import Header from 'components/Header/Header';
import Page from 'components/Page/Page';

describe('Test suite for App Component', () => {
  it('should render the correct structure', () => {
    const wrapper = shallow(<App />);

    const child1 = wrapper.childAt(0);
    expect(child1.type()).to.equal(Header);

    const child2 = wrapper.childAt(1);
    expect(child2.type()).to.equal(Page);
  });

  it('should init WOW.js in `componentDidMount`', () => {
    const component = (
      <MockedProvider>
        <App />
      </MockedProvider>
    );

    sinon.spy(App.prototype, 'componentDidMount');
    sinon.spy(WOW.prototype, 'init');
    mount(component);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
    expect(WOW.prototype.init.calledOnce).to.equal(true);
  });
});
