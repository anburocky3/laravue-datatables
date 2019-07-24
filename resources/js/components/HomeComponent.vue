<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
          <div class="float-left p-3">
              <h3>Server-side datatables</h3>
              <p>Live api data from <a :href="api" v-text="api" target="_blank"></a></p>
          </div>
        <MyVuetable :api="api" ref="table" />
      </div>
    </div>
  </div>
</template>

<script>
import MyVuetable from "./table/MyVuetable";

export default {
  components: {
    MyVuetable
  },
  props:['api']
};
</script>
