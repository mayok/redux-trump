import { connect } from 'react-redux';
import { checkUpdate, buttonClick, deal } from '../actions';
import Button from '../components/Button';

const mapDispatchToProps = dispatch => ({
  onClick: ({ text }) => {
    dispatch(buttonClick(text));
    if (text === 'CONTINUE') {
      dispatch(checkUpdate());
      dispatch(deal());
    }
  },
});

export default connect(null, mapDispatchToProps)(Button);
