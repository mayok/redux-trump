import React, { PropTypes } from 'react';
import Button from '../containers/ButtonContainer';

const Buttons = ({ value }) => (
  <div>
    {value.map(v =>
      <Button key={v} text={v} />
    )}
  </div>
);

Buttons.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default Buttons;
