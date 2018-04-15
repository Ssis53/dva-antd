export default {

  namespace: 'film',

  state: {
      films: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *ADD({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'add', payload: payload});
    },
  },

  reducers: {
    add(state, action) {
        console.log('获取了电影哦')
      let newS = Object.assign({}, state);
      state.films.push(action.payload);
      newS.films = [...state.films];
      return newS;
    },
  },

};
