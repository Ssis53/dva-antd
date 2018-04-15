
export default {

  namespace: 'swiper',

  state: {
      pic: [1, 2, 3]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *GET_SWIPER({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'get', pic: payload });
    },
  },

  reducers: {
    get(state, action) {
        let newS = Object.assign({}, state);
        newS.pic = [...action.pic];
        return newS;
    },
  },

};
