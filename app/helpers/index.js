import React from 'react';
import { branch, renderComponent } from 'recompose';

const Loading = () => (
  <div>Loading....</div>
);

export const withLoadingComponent = branch(
  props => props.loading,
  renderComponent(Loading),
);

// eslint-disable-next-line no-unused-vars
export const getOptions = dataToFetch => ({
  options: ({ language }) => ({
    variables: { lang: language || 'gb' },
  }),
  props: ({
    data: {
      loading,
      wp_query: {
        ...dataToFetch
      } = {}
    }
  }) => ({
    loading,
    ...dataToFetch
  })
});

export const mapStateToProps = state => ({ language: state.language });
