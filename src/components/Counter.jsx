import React, { PropTypes } from 'react';

const Counter = ({ count }) => (
  <div>
    {count}
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
