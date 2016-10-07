import React, { PropTypes } from 'react';

const LangIcon = ({ language }) => (
  <span className={`flag-icon flag-icon-${language}`} />
);

LangIcon.propTypes = {
  language: PropTypes.string.isRequired,
};

export default LangIcon;
