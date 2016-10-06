import React, { PropTypes } from 'react';

const Cards = ({ table, toggle }) => {
  const hand = `${table.hand.mark
    + (`0${table.hand.number}`).slice(-2)}`;
  const selected = `${table.selected.mark
    + (`0${table.selected.number}`).slice(-2)}`;

  return (
    <div>
      <img src={`imgs/${hand}.png`} alt={hand} className={'card'} />
      {(() => {
        if (toggle) {
          if (typeof selected === 'undefined' || !selected) {
            return '';
          }
          return <img src={`imgs/${selected}.png`} alt={selected} className={'card'} />;
        }
        return <img src={'imgs/back.png'} alt={'back'} className={'card'} />;
      })()}
    </div>
  );
};

Cards.propTypes = {
  table: PropTypes.shape(PropTypes.object.isRequired),
  toggle: PropTypes.bool.isRequired,
};
export default Cards;
