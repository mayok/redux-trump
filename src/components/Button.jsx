import React, { PropTypes } from 'react';

const Button = ({ text, onClick }) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      onClick({ text });
    }}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
