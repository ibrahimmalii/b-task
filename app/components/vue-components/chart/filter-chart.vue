<template>
  <div class="filter-chart">
    <div class="filter__form-group">
      <label class="filter__label" for='startData' >Start Date:</label>
      <input class="filter__input" type="date" id="startData" v-model="startData">
    </div>
    <div class="filter__form-group">
      <label class="filter__label" for='endData' >End Date:</label>
      <input class="filter__input" type="date" id="endData" v-model="endData">
    </div>
    <div class="filter__form-group">
      <button class="filter__btn" @click='filter'>Filter</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterChartComponent',
  data() {
    return {
      startData: null,
      endData: null,
    }
  },
  methods: {
    filter(){}
  }
}
</script>

<style>

</style>
