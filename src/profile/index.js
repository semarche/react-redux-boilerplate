import { connect } from 'react-redux';
import Profile from './Profile';
import { key } from '../app/module/constants';
import { getItems, clearItems } from '../app/module/actions';

const mapStateToProps = (state) => ({
  items: state[key].items,
});

const mapDispatchToProps = {
  getItems,
  clearItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
