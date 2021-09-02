//由于项目可能会变大,所以需要一个特定的 action 文件
export const INIT_STATE = 'COVER_STATE';
export const UPDATE_STATE = 'UPDATE_STATE';

//action 构造器,方便维护.要不然 dispatch 太散乱
export const initState = payload => ({
  type: INIT_STATE,
  payload: payload,
});

export const updateState = payload => ({
  type: UPDATE_STATE,
  payload: payload,
});