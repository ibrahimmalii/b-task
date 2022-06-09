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
    
  },
};
</script>

<style scoped></style>
