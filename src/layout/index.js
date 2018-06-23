import { connect } from 'react-redux';
import Layout from './Layout'
import { key } from '../app/module/constants';

const mapStateToProps = (state) => ({
  isAuthenticated: state[key].isAuthenticated,
});

export default connect(mapStateToProps)(Layout);
