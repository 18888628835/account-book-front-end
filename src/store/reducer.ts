import { INIT_STORE, UPDATE_STORE } from './action';

export const globalStore = {};

export const reducer = (state: typeof globalStore, action) => {
  switch (action.type) {
    case INIT_STORE:
      return { ...action.payload };
    case UPDATE_STORE:
      return { ...state, ...action.payload };
    default:
      break;
  }
};
