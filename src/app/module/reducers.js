import consts from './constants';

export const initialState = {
  width: 0,
  isAuthenticated: false,
  items: [],
};

export const actionHandlers = {
    [consts.SET_WIDTH]: (state, action) => ({ ...state, width: action.width }),
    [consts.AUTH]: (state) => ({ ...state, isAuthenticated: !state.isAuthenticated }),
    [consts.SET_ITEMS]: (state, action) => ({ ...state, items: action.items }),
};

export const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type];
    return handler ? handler(state, action) : state
};

export default reducer
