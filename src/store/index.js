import Vue from "vue";
import Vuex from "vuex";

import app from './modules/app'
import login from './modules/login'
import common from './modules/common'
import infoDetailed from './modules/infoDetailed'
import permission from './modules/permission'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    login,
    common,
    infoDetailed,
    permission
  }
});
