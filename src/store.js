import { createStore } from "vuex";

export default createStore({
  state: {
    authorized: false
  },
  mutations: {
   SETAUTH(state, payload){
       state.authorized=payload
   },
}

});