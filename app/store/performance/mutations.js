export default {
  UPDATE_CLONED_CHART_DATA: (state, chartData) => {
    state.clonedChartData = chartData;
  },
  UPDATE_ORIGIN_CHART_DATA: (state, chartData) => {
    state.originChartData = chartData;
  },
};
