<template>
  <div class="container">
    <filter-bar @filter-set="filterSet" @filter-reset="resetFilter" class="mb-3"></filter-bar>
    <vuetable
      ref="vuetable"
      :api-url="api"
      :fields="fields"
      :css="css"
      pagination-path
      :per-page="10"
      :multi-sort="true"
      multi-sort-key="ctrl"
      :sort-order="sortOrder"
      :append-params="moreParams"
      @vuetable:cell-clicked="onCellClicked"
      @vuetable:pagination-data="onPaginationData"
    >
      <div slot="actions" slot-scope="props">
        <div class="custom-actions" style="width:100px">
          <button
            class="btn btn-success btn-sm"
            @click="onAction('view-item', props.rowData, props.rowIndex)"
          >
            <span class="fa fa-search-plus"></span>
          </button>
          <button class="btn btn-primary btn-sm" @click.prevent="editUser(props.rowData)">
            <span class="fa fa-pencil"></span>
          </button>
          <button class="btn btn-danger btn-sm" @click="deleteUser(props.rowData.id)">
            <span class="fa fa-trash"></span>
          </button>
        </div>
        <!-- If you looking to implement the custom-action separately, you can do it like this -->
        <!-- <custom-actions :rowData="props.rowData" :rowIndex="props.rowIndex"></custom-actions> -->
      </div>
    </vuetable>
    <div>
      <vuetable-pagination-info ref="paginationInfo" :css="css.pagination" info-class="float-left"></vuetable-pagination-info>
      <vuetable-pagination
        ref="pagination"
        :css="css.pagination"
        class="float-right"
        @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePagination from "./Pagination";
import VuetablePaginationInfo from "vuetable-2/src/components/VuetablePaginationInfo";
import BootstrapStyle from "./bootstrap-css";
import CustomActions from "./CustomActions";
import DetailRow from "./DetailRow";
import FilterBar from "./FilterBar";

Vue.component("custom-actions", CustomActions, {
  name: "custom-actions"
});
Vue.component("my-detail-row", DetailRow, {
  name: "my-detail-row"
});

export default {
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo,
    FilterBar
  },
  props: ["api"],
  data() {
    return {
      css: BootstrapStyle,
      fields: [],
      sortOrder: [
        {
          field: "email",
          sortField: "email",
          direction: "asc"
        }
      ],
      moreParams: {}
    };
  },
  mounted() {
    if (this.$props.api == "https://vuetable.ratiw.net/api/users") {
      const Fieldss = import("../table/vuetable-api/field-def");
      Fieldss.then(res => {
        this.fields = res.default;
      });
    } else {
      const Fieldss = import("../table/laravel-api/field-def");
      Fieldss.then(res => {
        this.fields = res.default;
      });

    }
  },
  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    onCellClicked(data, field, event) {
      console.log("cellClicked: ", field.name);
      this.$refs.vuetable.toggleDetailRow(data.id);
    },
    onAction(action, data, index) {
      console.log("custom-actions: " + action, data.name, index);
    },
    filterSet(filterText) {
      this.moreParams = {
        filter: filterText
      };
      Vue.nextTick(() => this.$refs.vuetable.refresh());
    },
    resetFilter() {
      this.moreParams = {};
      this.$refs.vuetable.refresh();
      Vue.nextTick(() => this.$refs.vuetable.refresh());
    },
    editUser(data) {
      this.$emit("editUser", data);
    },
    deleteUser(id) {
      this.$emit("deleteUser", id);
    },
    reload() {
      this.$refs.vuetable.reload();
    }
  }
};
</script>
