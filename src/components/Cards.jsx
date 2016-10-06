import React, { PropTypes } from 'react';

const Cards = ({ table, toggle }) => {
  const hand = `${table.hand.mark
    + (`0${table.hand.number}`).slice(-2)}`;
  const selected = `${table.selected.mark
    + (`0${table.selected.number}`).slice(-2)}`;

  const handSrc = hand === 'undefineded' ? 'imgs/back.png' : `imgs/${hand}.png`;

  const bool = toggle && typeof selected !== 'undefined' && selected;
  const selectedSrc = bool ? `imgs/${selected}.png` : 'imgs/back.png';
  const selectedAlt = bool ? `${selected}` : 'back';

  return (
    <div>
      <img src={handSrc} alt={hand} className={'card'} />
      <img src={selectedSrc} alt={selectedAlt} className={'card'} />
    </div>
  );
};

Cards.propTypes = {
  table: PropTypes.shape(PropTypes.object.isRequired),
  toggle: PropTypes.bool.isRequired,
};
export default Cards;
