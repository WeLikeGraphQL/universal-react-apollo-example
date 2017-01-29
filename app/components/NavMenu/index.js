import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import { MenuItemLink } from 'components';
import s from './navMenu.css';


export const NavMenu = ({ data: { loading, wp_query } }) => {
  if (loading) return (null);

  const { menu } = wp_query;

  return (
    <ul className={s.menu}>
      {menu && menu.map(menuItem => (
        <li key={menuItem.id}>
          <MenuItemLink title={menuItem.title} />
        </li>
      ))}
    </ul>
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

const NavMenuWithData = graphql(MENU_QUERY, {
  options: ({ language }) => ({
    variables: { lang: language || 'gb' },
  }),
}
)(NavMenu);

const NavMenuWithDataAndState = connect(
  state => ({ language: state.language })
)(NavMenuWithData);

export default NavMenuWithDataAndState;

