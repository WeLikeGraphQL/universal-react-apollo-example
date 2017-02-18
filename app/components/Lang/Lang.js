import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import setLanguage from 'actions';
import LangIcon from 'components/LangIcon/LangIcon';
import { PAGE_QUERY } from 'components/Page/Page';
import { MENU_QUERY } from 'components/NavMenu/NavMenu';
import s from './lang.css';

export class Lang extends React.Component {

  /* eslint-disable no-unused-expressions, array-callback-return */
  prefetchData(languages) {
    languages && languages.map((language) => {
      this.props.client.query({
        variables: { lang: language.slug },
        query: PAGE_QUERY
      });
      this.props.client.query({
        variables: { lang: language.slug },
        query: MENU_QUERY
      });
    });
  }
  /* eslint-enable no-unused-expressions, array-callback-return */

  render() {
    const {
      language,
      changeLang,
      data: { loading, wp_query }
    } = this.props;

    if (loading) return (null);
    const { terms } = wp_query;
    const languages = terms[0].children;
    this.prefetchData(languages);

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
  }
}

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

const PageWithDataAndState = graphql(LANG_QUERY)(LangWithState);

export default withApollo(PageWithDataAndState);
