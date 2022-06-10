<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <FilterChartComponent />
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/chart/performance-chart.vue";
import FilterChartComponent from "../components/vue-components/chart/filter-chart.vue";
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    FilterChartComponent,
  },
};
</script>
