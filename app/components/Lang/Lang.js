import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import setLanguage from 'actions';
import LangIcon from 'components/LangIcon/LangIcon';
import { PAGE_QUERY } from 'components/Page/Page';
import { MENU_QUERY } from 'components/NavMenu/NavMenu';
import { mapStateToProps, withLoadingComponent, getOptions } from 'helpers';
import s from './lang.css';

/* eslint-disable no-unused-expressions, array-callback-return */
const prefetchData = (languages, client) => {
  languages && languages.map((language) => {
    client && client.query({
      variables: { lang: language.slug },
      query: PAGE_QUERY
    });
    client && client.query({
      variables: { lang: language.slug },
      query: MENU_QUERY
    });
  });
};
/* eslint-enable no-unused-expressions, array-callback-return */

export const Lang = ({ language, changeLang, client, terms }) => {
  const languages = terms[0].children;
  prefetchData(languages, client);

  return (
    <DropdownButton
      bsStyle="default" title={[<LangIcon language={language} />]} id="Lang"
      className={s.dropdown}
    >
      {languages && languages.map(lang => (
        <MenuItem key={lang.term_id} onClick={() => changeLang(lang.slug)} className={s['dropdown-menu']}>
          <LangIcon language={lang.slug} />
        </MenuItem>
      ))}
    </DropdownButton>
  );
};

export const LANG_QUERY = gql`
  query getTerms {
    wp_query {
      terms(slug: "languages") {
        term_id
        children {
          term_id
          slug
        }
      }
    }
  }
`;

const mapDispatchToProps = dispatch => ({
  changeLang: (lang) => {
    dispatch(setLanguage(lang));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(LANG_QUERY, getOptions(['terms'])),
  withApollo,
  withLoadingComponent
)(Lang);

