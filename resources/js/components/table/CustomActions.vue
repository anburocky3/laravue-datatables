  <template>
  <div class="custom-actions" style="width:100px">
    <button class="btn btn-success btn-sm" @click="editUser(rowData)">
      <span class="fas fa-search-plus"></span>
    </button>
    <button class="btn btn-primary btn-sm" @click="itemAction('edit-item', rowData, rowIndex)">
      <span class="fas fa-pencil-alt"></span>
    </button>
    <button class="btn btn-danger btn-sm" @click="itemAction('delete-item', rowData, rowIndex)">
      <span class="fas fa-trash-alt"></span>
    </button>
  </div>
</template>

  <script>
export default {
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  methods: {
    itemAction(action, data, index) {
      console.log("custom-actions: " + action, data.name, index);
    }
  }
};
</script>

  <style>
.custom-actions button.ui.button {
  padding: 8px 8px;
}
.custom-actions button.ui.button > i.icon {
  margin: auto !important;
}
</style>
