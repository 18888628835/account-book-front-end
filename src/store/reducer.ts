import { ActionTypeKind, ActionKind } from './action';

export const globalStore: Types.RootObject = {} as Types.RootObject;

export const reducer: React.Reducer<typeof globalStore, ActionKind> = (
  state,
  action
) => {
  switch (action.type) {
    case ActionTypeKind.INIT_STORE:
      return { ...action.payload };
    case ActionTypeKind.UPDATE_STORE:
      return { ...state, ...action.payload };
    default:
      break;
  }
};
