import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';
import isArray from 'lodash/isArray';
import { withRouter } from 'react-router';
import { key } from '../app/module/constants';
import { store } from '../Root';

export const roles = {
  ROOT: 'root',
  MANAGER: 'director',
  ACCOUNTANT: 'accountant',
};

export const permissionBool = (availableRoles = []) => {
  const userRole = get(store.getState()[key], 'account.user_role', '');
  if (!isArray(availableRoles) || !availableRoles.includes(userRole)) {
    return false
  }
  return true
};

const propTypes = {
  userRole: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  availableRoles: PropTypes.array,
  rescrictedRoutes: PropTypes.array,
};

const PermissionWrapper = ({ children, userRole, history: { location: { pathname } }, availableRoles = [] }) => {
  if (!isArray(availableRoles) || !availableRoles.includes(userRole)) {
    // check rescrictedRoutes and do redirect
    return null
  }
  return children
};

PermissionWrapper.propTypes = propTypes;

const mapStateToProps = (state) => ({
  userRole: 'root',
});

export default connect(mapStateToProps)(withRouter(PermissionWrapper));
