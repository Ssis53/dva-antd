
export default {

  namespace: 'todolist',

  state: {
      list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *ADD({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'add', payload: payload});
    },
    *REMOVE({payload}, {call, put}) {
      yield put({type: 'remove', payload: payload});
    }
  },

  reducers: {
    add(state, action) {
      let newS = Object.assign({}, state);
      state.list.push(action.payload);
      newS.list = [...state.list];
      return newS;
    },
    remove(state, action) {
        let newS = Object.assign({}, state);
        state.list.splice(action.payload, 1);
        newS.list = [...state.list];
        return newS;
    }
  },

};
