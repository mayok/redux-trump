import { connect } from 'react-redux';
import Cards from '../components/Cards';

const mapStateToProps = state => ({
  toggle: state.shouldToggle,
});

export default connect(mapStateToProps)(Cards);
