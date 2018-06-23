import { connect } from 'react-redux';
import LogIn from './LogIn';
import { authentication } from '../app/module/actions';
import { key } from '../app/module/constants';

const mapStateToProps = (state) => ({
  isAuthenticated: state[key].isAuthenticated,
});

const mapDispatchToProps = {
  authentication
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
