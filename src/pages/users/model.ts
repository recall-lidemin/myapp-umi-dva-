import { Reducer, Effect, Subscription } from 'umi'
import { getRemoteList, editRecord } from './service'

interface UserModelType {
  namespace: 'users',
  state: {},
  reducers: {
    getList: Reducer
  },
  effects: {
    getRemote: Effect,
    edit: Effect
  },
  subscriptions: {
    setup: Subscription
  }
}

const UserModel: UserModelType = {
  namespace: 'users',
  state: {},
  reducers: {
    getList(state, { payload }) {
      // return newState
      return payload
    }
  },
  // 全是异步函数
  effects: {
    *getRemote(action, { put, call }) {
      const data = yield call(getRemoteList)
      yield put({
        type: 'getList',
        payload: data
      })
    },
    *edit({ payload: { id, value } }, { put, call }) {
      const data = yield call(editRecord, { id, value })
      yield put({
        type: 'getList',
        payload: data
      })
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type: 'getRemote'
          })
        }
      })
    }
  }
}

export default UserModel