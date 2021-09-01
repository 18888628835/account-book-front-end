import { UPDATE_STATE, INIT_STATE } from './action';

export const globalStore = {};

export const reducer = (state: typeof globalStore, action) => {
  switch (action.type) {
    case INIT_STATE:
      return { ...action.payload };
    case UPDATE_STATE:
      return { ...state, ...action.payload };
    default:
      break;
  }
};
