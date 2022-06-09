<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <filter-component />
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import FilterComponent from '../components/vue-components/Filter.vue';
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    FilterComponent
  },
};
</script>
