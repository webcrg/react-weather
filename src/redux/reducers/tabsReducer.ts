import { SET_ACTIVE_PAGE } from '@/redux/actions';
import { PAGE_NAMES } from '@/weatherConfig';

const initialState = {
  activePage: PAGE_NAMES.NOW,
};

export const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.activePage,
      };
    default:
      return state;
  }
};

export default tabsReducer;
