import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
};

const defaultProps = {
};

class Dashboard extends Component {
    render() {
        return (
          <div className={'dashboard'}>
            <h1>Dashboard</h1>
          </div>
        )
    }
}

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
export default Dashboard
