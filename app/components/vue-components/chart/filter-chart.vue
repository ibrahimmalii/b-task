<template>
  <div class="filter-chart">
    <div class="filter__form-group">
      <label class="filter__label" for='startData' >Start Date:</label>
      <input class="filter__input" type="date" id="startData" v-model="startData">
      <span class="filter__error">{{startDateError}}</span>
    </div>
    <div class="filter__form-group">
      <label class="filter__label" for='endData' >End Date:</label>
      <input class="filter__input" type="date" id="endData" v-model="endData">
      <span class="filter__error">{{endDateError}}</span>
    </div>
    <div class="filter__form-group">
      <button class="filter__btn-success" @click='filter'>Filter</button>
      <button class="filter__btn-danger" @click='clearFilter'>Clear Filter</button>
    </div>
  </div>
</template>

<script>
import { filterChartByDate } from '../../../utils/filterChart';

export default {
  name: 'FilterChartComponent',
  data() {
    return {
      startData: null,
      endData: null,
      filteredData: null,
      startDateError: null,
      endDateError: null,
    }
  },
  methods: {
    validateDates(){
      this.startDateError = null;
      this.endDateError = null;
      this.startDateError = (!this.startData) ? 'Start date is required': null;
      this.endDateError = !this.endData ? 'End date is required': null;
      if((this.startData && this.endData) && (this.startData > this.endData)){
        this.startDateError = 'Start date must be less than end date';
      } else if ((this.startData && this.endData) && (this.startData > this.endData)) {
        this.startDateError = null;
      }
      return !this.startDateError && !this.endDateError;
    },
    filter(){
      if(this.validateDates()){
        this.filteredData = filterChartByDate(this.startData, this.endData, this.chartData);
        this.$store.commit('performance/UPDATE_CLONED_CHART_DATA', this.filteredData);
      }
    },
    clearFilter(){
      this.startData = this.endData = this.filteredData = this.startDateError = this.endDateError = null;
      this.$store.commit('performance/UPDATE_CLONED_CHART_DATA', this.chartData);
    }
  },
  computed: {
    chartData() {
      return this.$store.getters['performance/getOriginChartData'];
    },
  },
}
</script>

<style>

</style>
