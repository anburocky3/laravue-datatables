<template>
  <div class="container">
    <form class="float-right">
      <div class="input-group">
        <label for="search" class="mt-2 mr-3">Search for:</label>
        <input
          type="text"
          name="search"
          v-model="filterText"
          class="form-control"
          @keyup.enter="doFilter"
          placeholder="Name, Nickname, or Email"
        />
        <span class="input-group-btn ml-2">
          <button class="btn btn-primary" @click.prevent="doFilter">Search</button>
          <button class="btn btn-dark" @click.prevent="resetFilter">Reset</button>
        </span>
      </div>
      <div class="form-group">
        <!-- <button class="btn btn-primary mr-2" >Search</button> -->
        <!-- <button class="btn btn-dark" @click.prevent="resetFilter">Reset</button> -->
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterText: ""
    };
  },
  methods: {
    doFilter() {
      this.$emit("filter-set", this.filterText);
    },
    resetFilter() {
      this.filterText = "";
      this.$emit("filter-reset");
    }
  }
};
</script>
<style>
</style>
