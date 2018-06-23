import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
  items: PropTypes.array.isRequired,
  getItems: PropTypes.func.isRequired,
  clearItems: PropTypes.func.isRequired,
};

class Profile extends Component {
  componentDidMount() {
    this.props.getItems('https://jsonplaceholder.typicode.com/users')
  }
  componentWillUnmount() {
    this.props.clearItems()
  }
  render() {
    const { items } = this.props;
    return (
      <div className={'profile'}>
        <h1>Profiles</h1>
        <ul>
          {items.map(e => (
            <li key={e.id}>{e.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

Profile.propTypes = propTypes;
export default Profile;
