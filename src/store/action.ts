//由于项目可能会变大,所以需要一个特定的 actionKind 文件
// actionKind  中的 type的种类
export enum ActionTypeKind {
  INIT_STORE = 'INIT_STORE',
  UPDATE_STORE = 'UPDATE_STORE',
}

// action种类
export type ActionKind = {
  type: ActionTypeKind;
  payload: any;
};

//actionKind 构造器,方便维护.要不然 dispatch 太散乱
export const initStore = payload => ({
  type: ActionTypeKind.INIT_STORE,
  payload: payload,
});

export const updateStore = payload => ({
  type: ActionTypeKind.UPDATE_STORE,
  payload: payload,
});
