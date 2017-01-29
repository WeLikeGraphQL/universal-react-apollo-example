/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { animateScroll } from 'react-scroll';

import './banner.css';
import './contact.css';
import './details.css';
import './features.css';
import './footer.css';
import './page.css';

export const Page = ({ data: { loading, wp_query } }) => {
  if (loading) return (null);

  const { posts } = wp_query;

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <div>
      {posts && posts.map(post => (
        <div key={post.title} dangerouslySetInnerHTML={{ __html: post.content }} />
      ))}
      <a className="toTop" onClick={scrollToTop} />
    </div>
  );
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

const PageWithData = graphql(PAGE_QUERY, {
  options: ({ language }) => ({
    variables: { lang: language || 'gb' },
  }),
}
)(Page);

const PageWithDataAndState = connect(
  state => ({ language: state.language })
)(PageWithData);

export default PageWithDataAndState;
