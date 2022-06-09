<template>
  <div>
    <input
      type="text"
      class="form-control"
      v-model="filter"
      placeholder="filter"
    />
    <button type="button" @click="clearFilter">Clear</button>
  </div>
</template>

<script>
export default {
  name: "filter",
  emits: ["filter-update"],
  data() {
    return {
      filter: "",
    };
  },
  watch: {
    filter(val) {
      let newurl = "";
      if (val) {
        this.$emit("filter-update", val);
        newurl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          `?filter=${val}`;
      } else {
        this.$emit("filter-update", "");
      }
      window.history.pushState({ path: newurl }, "", newurl);
    },
  },
  methods: {
    clearFilter() {
      this.filter = "";
    },
  },
};
</script>

<style scoped></style>
