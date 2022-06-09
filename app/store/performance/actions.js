import { axios } from '../../services/axios/axios.service';

export default {
  UPDATE_CHART_DATA: ({ commit }) => axios.get('performance').then(response => {
    commit('UPDATE_CHART_DATA', response.data);
    commit('UPDATE_ORIGIN_CHART_DATA', response.data);
  }),
};
