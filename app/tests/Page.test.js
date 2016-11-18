import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { animateScroll } from 'react-scroll';

import { Page } from 'components/Page/Page';

const mockedData = {
  loading: false,
  wp_query: {
    posts: [
      {
        title: 'post1',
        content: 'content1'
      },
      {
        title: 'post2',
        content: 'content2'
      }
    ]
  }
};

describe('Test suite for Page Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Page data={mockedData} />);
  });

  it('should render null when loading', () => {
    const mockedData = {
      loading: true
    };
    const wrapper = shallow(<Page data={mockedData} />);
    expect(wrapper.type()).to.equal(null);
  });

  it('should render the component after loading', () => {
    const post1 = wrapper.childAt(0);
    expect(post1.key()).to.equal('post1');
    expect(post1.prop('dangerouslySetInnerHTML')).to.deep.equal({ __html: 'content1' });

    const post2 = wrapper.childAt(1);
    expect(post2.key()).to.equal('post2');
    expect(post2.prop('dangerouslySetInnerHTML')).to.deep.equal({ __html: 'content2' });
  });

  it('should render `toTop` at the bottom', () => {
    animateScroll.scrollToTop = sinon.spy();
    const spy = animateScroll.scrollToTop;

    const toTop = wrapper.childAt(2);
    toTop.simulate('click');
    expect(spy.calledOnce).to.equal(true);
  });
});

// TODO: make it passing without errors in the console (it passes now)
// describe("Test suite for Page Container", () => {
//   it("should render the container", () => {
//     const wrapper = mount(
//       <MockedProvider mocks={[
//         {request: {query: ""}, result: {data: mockedData}}
//       ]}>
//         <PageContainer />
//       </MockedProvider>
//     );
//
//     const container = wrapper.find(PageContainer);
//     expect(container.length).to.equal(1);
//     expect(wrapper.find(Page).length).to.equal(1);
//   })
// });
