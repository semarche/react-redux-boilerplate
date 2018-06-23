import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { authentication } from '../../app/module/actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  authentication
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
