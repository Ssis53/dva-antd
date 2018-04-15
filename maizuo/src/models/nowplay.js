export default {

  namespace: 'nowplay',

  state: {
      films: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *GET_FLIMS({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'get', films: payload });
    },
  },

  reducers: {
    get(state, action) {
        let newS = Object.assign({}, state);
        newS.films = [...action.films];
        return newS;
    },
  },

};
