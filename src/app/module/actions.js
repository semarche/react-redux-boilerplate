import consts from './constants';
import Http from '../../utils'

export const setWidth = width => dispatch => dispatch({ type: consts.SET_WIDTH, width });

export const authentication = () => dispatch => dispatch({ type: consts.AUTH });

export const getItems = (path) => dispatch => {
  Http.get(path).then(res => dispatch({ type: consts.SET_ITEMS, items: res.data }))
};

export const clearItems = () => dispatch => dispatch({ type: consts.SET_ITEMS, items: [] });
