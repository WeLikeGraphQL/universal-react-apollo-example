import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { compose } from 'recompose';

import MenuItemLink from 'components/MenuItemLink/MenuItemLink';
import { withLoadingComponent, getOptions, mapStateToProps } from 'helpers';
import s from './dropdownMenu.css';


export const DropdownMenu = ({ menu }) => (
  <DropdownButton id="dropdown" bsStyle="default" noCaret title={[<span />]} className={s.dropdown}>
    {menu && menu.map(menuItem => (
      <MenuItem key={menuItem.id} className={s['dropdown-menu']}>
        <MenuItemLink title={menuItem.title} />
      </MenuItem>
    ))}
  </DropdownButton>
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
  withLoadingComponent,
  connect(mapStateToProps),
  graphql(MENU_QUERY, getOptions(['menu'])),
)(DropdownMenu);

