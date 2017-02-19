/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { animateScroll } from 'react-scroll';
import { compose, withHandlers } from 'recompose';

import { withLoadingComponent, getOptions, mapStateToProps } from 'helpers';

import './banner.css';
import './contact.css';
import './details.css';
import './features.css';
import './footer.css';
import './page.css';

export const Page = ({ posts, scrollToTop }) => (
  <div>
    {posts && posts.map(post => (
      <div key={post.title} dangerouslySetInnerHTML={{ __html: post.content }} />
    ))}
    <a className="toTop" onClick={scrollToTop} />
  </div>
);

const handlers = {
  scrollToTop: () => () => { animateScroll.scrollToTop(); }
};

export const PAGE_QUERY = gql`
  query getPosts ($lang: String!) {
    wp_query {
      posts (category_name: $lang) {
        title
        content
      }
    }
  }
`;

export default compose(
  connect(mapStateToProps),
  graphql(PAGE_QUERY, getOptions(['posts'])),
  withLoadingComponent,
  withHandlers(handlers)
)(Page);

