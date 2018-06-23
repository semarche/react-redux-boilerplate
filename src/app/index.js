import { connect } from 'react-redux';
import sizeMe from 'react-sizeme';
import { withRouter } from 'react-router-dom';
import { setWidth } from './module/actions';
import App from './App'

const mapDispatchToProps = {
  setWidth,
};

const mapStateToProps = (state) => ({

});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(sizeMe()(App)));
