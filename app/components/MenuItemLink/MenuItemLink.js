import React, { PropTypes } from 'react';
import { Link } from 'react-scroll';

const MenuItemLink = ({ title }) => (
  <Link to={title.toLowerCase()} smooth>{title}</Link>
);

MenuItemLink.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MenuItemLink;
