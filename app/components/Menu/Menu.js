import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

// import MenuItemLink from '../MenuItemLink/MenuItemLink';
import s from './menu';


const Menu = ({ data }) => {
  const { loading } = data;

  if (loading) {
    return (null);
  }

  const { wp_query } = data;
  const { menu } = wp_query;

  return (
    <div>
      <ul className={s.menu}>
        {menu.map((menuItem) => {
          return (
            <li key={menuItem.id}><Link to={menuItem.title.toLowerCase()} smooth>{menuItem.title}</Link></li>
          );
        })}
      </ul>
      <DropdownButton id="dropdown" bsStyle="default" noCaret title={[<span />]} className={s.dropdown}>
        {menu.map((menuItem) => {
          return (
            <MenuItem key={menuItem.id} className={s['dropdown-menu']}>
              <Link to={menuItem.title.toLowerCase()} smooth>{menuItem.title}</Link>
            </MenuItem>
          );
        })}
      </DropdownButton>
    </div>
    );
};

const MenuWithData = graphql(gql`
  query getMenu ($lang: String!) {
    wp_query {
      menu (name: $lang) {
        id
        title
      }
    }
  }
`, {
  options: ({ language }) => ({
    variables: { lang: language || 'gb' },
  }),
}
)(Menu);

const MenuWithDataAndState = connect(
  state => ({ language: state.language })
)(MenuWithData);

export default MenuWithDataAndState;

