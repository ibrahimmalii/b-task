<template>
  <div class="filter">
    <input
      type="text"
      class="filter__input"
      v-model="filter"
      placeholder="filter"
    />
    <button class="filter__btn" @click="clearFilter">Clear</button>
  </div>
</template>

<script>
export default {
  name: "filter",
  emits: ["filter-update"],
  mounted() {
    if (window.location.search.indexOf("filter") > -1) {
      this.filter = window.location.search.split("=")[1];
      this.$emit("filter-update", this.filter);
    }
  },
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
      this.updateUrl(newurl);
    },
  },
  methods: {
    clearFilter() {
      this.filter = "";
    },
    updateUrl(newurl) {
      window.history.pushState({ path: newurl }, "", newurl);
    },
  },
};
</script>

<style scoped></style>
