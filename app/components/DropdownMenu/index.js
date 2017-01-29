import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { MenuItemLink } from 'components';
import s from './dropdownMenu.css';


export const DropdownMenu = ({ data: { loading, wp_query } }) => {
  if (loading) return (null);

  const { menu } = wp_query;

  return (
    <DropdownButton id="dropdown" bsStyle="default" noCaret title={[<span />]} className={s.dropdown}>
      {menu && menu.map(menuItem => (
        <MenuItem key={menuItem.id} className={s['dropdown-menu']}>
          <MenuItemLink title={menuItem.title} />
        </MenuItem>
      ))}
    </DropdownButton>
  );
};

export const MENU_QUERY = gql`
  query getMenu ($lang: String!) {
    wp_query {
      menu (name: $lang) {
        id
        title
      }
    }
  }
`;

const DropdownMenuWithData = graphql(MENU_QUERY, {
  options: ({ language }) => ({
    variables: { lang: language || 'gb' },
  }),
}
)(DropdownMenu);

const DropdownMenuWithDataAndState = connect(
  state => ({ language: state.language })
)(DropdownMenuWithData);

export default DropdownMenuWithDataAndState;

