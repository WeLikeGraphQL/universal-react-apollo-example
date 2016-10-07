import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import setLanguage from 'actions';
import LangIcon from 'components/LangIcon/LangIcon';
import s from './lang';

const Lang = ({ language, changeLang, data }) => {
  const { loading } = data;

  if (loading) {
    return (null);
  }

  const { wp_query } = data;
  const { terms } = wp_query;
  const languages = terms[0].children;

  return (
    <DropdownButton
      bsStyle="default" title={[<LangIcon language={language} />]} id="Lang"
      className={s.dropdown}
    >
      {languages.map((lang) => {
        return (
          <MenuItem key={lang.term_id} onClick={() => changeLang(lang.slug)} className={s['dropdown-menu']}>
            <LangIcon language={lang.slug} />
          </MenuItem>
        );
      })}
    </DropdownButton>
  );
};

const mapStateToProps = state => ({
  language: state.language,
});
const mapDispatchToProps = dispatch => ({
  changeLang: (lang) => {
    dispatch(setLanguage(lang));
  },
});

const LangWithState = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lang);

const PageWithDataAndState = graphql(gql`
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
`)(LangWithState);

export default PageWithDataAndState;
