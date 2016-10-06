import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { deal } from '../../actions';
import Cards from '../../containers/CardsContainer';
import Buttons from '../../components/Buttons';
import Counter from '../../components/Counter';

import styles from './styles.css';
// import card from '../../components/Cards/styles.css';


class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(deal());
  }

  render() {
    const { cards, count, shouldToggle } = this.props;

    return (
      <div className={styles.center}>
        <Cards table={cards.table} />
        {(() => {
          if (shouldToggle) {
            return <Buttons value={['FINISH', 'CONTINUE']} />;
          }
          return <Buttons value={['HIGH', 'LOW']} />;
        })()}
        <Counter count={count} />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  shouldToggle: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  cards: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

function mapStateToProps(state) {
  const { cards, count, shouldToggle } = state;
  // const { table } = state.cards;

  return {
    cards,
    count,
    shouldToggle,
  };
}

export default connect(mapStateToProps)(App);
