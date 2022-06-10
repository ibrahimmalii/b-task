import Vue from 'vue';
import Vuex from 'vuex';

import PerformanceModule from './performance';
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    performance: PerformanceModule,
  },
});
