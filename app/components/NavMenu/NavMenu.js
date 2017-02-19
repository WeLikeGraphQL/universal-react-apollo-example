import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import MenuItemLink from 'components/MenuItemLink/MenuItemLink';
import { withLoadingComponent, getOptions, mapStateToProps } from 'utility';
import s from './navMenu.css';


export const NavMenu = ({ menu }) => (
  <ul className={s.menu}>
    {menu && menu.map(menuItem => (
      <li key={menuItem.id}>
        <MenuItemLink title={menuItem.title} />
      </li>
    ))}
  </ul>
);

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

export default compose(
  connect(mapStateToProps),
  graphql(MENU_QUERY, getOptions(['menu'])),
  withLoadingComponent
)(NavMenu);

