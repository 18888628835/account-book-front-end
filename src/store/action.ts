//由于项目可能会变大,所以需要一个特定的 action 文件
export const INIT_STORE = 'INIT_STORE';
export const UPDATE_STORE = 'UPDATE_STORE';

//action 构造器,方便维护.要不然 dispatch 太散乱
export const initStore = payload => ({
  type: INIT_STORE,
  payload: payload,
});

export const updateStore = payload => ({
  type: UPDATE_STORE,
  payload: payload,
});
