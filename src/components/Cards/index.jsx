import React, { PropTypes } from 'react';
import styles from './styles.css';
// import md5 from 'js-md5';

const Cards = ({ table, toggle }) => {
  const hand = `${table.hand.mark
    + (`0${table.hand.number}`).slice(-2)}`;
  const selected = `${table.selected.mark
    + (`0${table.selected.number}`).slice(-2)}`;

  return (
    <div className={styles.clearfix}>
      <img src={`imgs/${hand}.png`} alt={hand} className={styles.left} />
      {(() => {
        if (toggle) {
          if (typeof selected === 'undefined' || !selected) {
            return '';
          }
          return <img src={`imgs/${selected}.png`} alt={selected} className={styles.right} />;
        }
        return <img src={'imgs/back.png'} alt={'back'} className={styles.right} />;
      })()}
    </div>
  );
};

Cards.propTypes = {
  table: PropTypes.shape(PropTypes.object.isRequired),
  toggle: PropTypes.bool.isRequired,
};
export default Cards;
