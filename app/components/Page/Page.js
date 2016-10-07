/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { animateScroll } from 'react-scroll';

import './banner';
import './contact';
import './details';
import './features';
import './footer';
import './page';

const Page = ({ data }) => {
  const { loading } = data;

  if (loading) {
    return (null);
  }

  const { posts } = data.wp_query;

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.title} dangerouslySetInnerHTML={{ __html: post.content }} />
        );
      })}
      <a className="toTop" onClick={() => animateScroll.scrollToTop()} />
    </div>
  );
};

const PageWithData = graphql(gql`
  query getPosts ($lang: String!) {
    wp_query {
      posts (category_name: $lang) {
        title
        content
      }
    }
  }
`, {
  options: ({ language }) => ({
    variables: { lang: language || 'gb' },
  }),
}
)(Page);

const PageWithDataAndState = connect(
  state => ({ language: state.language })
)(PageWithData);

export default PageWithDataAndState;
