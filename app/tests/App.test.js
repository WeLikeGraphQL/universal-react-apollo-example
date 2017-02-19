import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/lib/test-utils';
import WOW from 'wow.js/dist/wow.js';

import App from 'App';

describe('Test suite for App Component', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <MockedProvider>
        <App />
      </MockedProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
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
    expect(App.prototype.componentDidMount.calledOnce).toBe(true);
    expect(WOW.prototype.init.calledOnce).toBe(true);
  });
});
