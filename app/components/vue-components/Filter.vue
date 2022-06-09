<template>
  <div>
    <input
      type="text"
      class="form-control"
      v-model="search"
      placeholder="Search"
    />
    <button type="button">Clear</button>
  </div>
</template>

<script>
export default {
  name: "filter",
  data() {
    return {
      search: "",
    };
  },

  watch: {
    search(val) {
      let newurl = '';
      if (val) {
        this.$emit("search", val);
        newurl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          `?filter=${val}`;
      }
      window.history.pushState({ path: newurl }, "", newurl);
    },
  },
};
</script>

<style scoped></style>
