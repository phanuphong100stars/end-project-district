<template>
  <div>
    <div>
      <Breadcrumb :items="breadcrumbs" :title="title" />
    </div>

    <div>
      <v-btn
        color="primary"
        large
        class="col-12 col-lg-2 mt-6"
        @click="modalActive = true"
      >
        <v-icon left> mdi-plus-circle </v-icon>
        สร้างซอย
      </v-btn>
    </div>
    <v-card class="mt-6" outlined>
      <v-data-table
        :loading="loading"
        :headers="headers"
        :items="items"
        disable-filtering
        disable-sort
        :page="meta.page"
        :itemsPerPage="meta.perPage || 5"
        :server-items-length="meta.total"
        class="elevation-1"
        @update:items-per-page="changePerPage"
        @update:page="changePage"
        no-results-text="ไม่พบข้อมูล"
        no-data-text="ไม่พบข้อมูล, ลองค้นหาทะเบียนบ้านใหม่อีกครั้ง"
      >
      </v-data-table>
    </v-card>

    <v-dialog
      v-model="modalActive"
      :fullscreen="false"
      transition="dialog-bottom-transition"
      width="800px"
      persistent
      @click:outside="closeModal()"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="closeModal()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>สร้างซอย</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div class="px-4 py-4">
          <div>
            <v-text-field
              v-model="alley"
              label="ชื่อซอย"
              name="alley"
              data-vv-as="ชื่อซอย"
              v-validate="'required'"
              :error-messages="errors && errors.first('alley')"
              outlined
            >
            </v-text-field>
          </div>
          <v-btn
            color="primary"
            class="col-12 col-lg-2"
            large
            @click="submit()"
          >
            <v-icon left> mdi-content-save </v-icon>
            บันทึกข้อมูล
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumbs";
import AlleyApi from "../services/apis/Alley";
export default {
  components: {
    Breadcrumb,
  },

  data() {
    return {
      loading: false,
      title: "ซอย",
      breadcrumbs: [
        {
          text: "หน้าแรก",
          disabled: false,
          href: "/",
        },
        {
          text: "ซอย",
          disabled: false,
          href: "alley",
        },
      ],
      search: "",
      page: 1,
      headers: [
        {
          text: "ชื่อซอย",
          align: "start",
          sortable: false,
          value: "alley_name",
        },
        {
          text: "แขวง",
          align: "start",
          sortable: false,
          value: "subdistrict.subdistrict_name",
        },
      ],

      items: [],
      meta: {},
      param: {
        page: 1,
        perPage: 5,
        q: "",
        sort: "created_at",
        order: "desc",
        includes: "subdistrict",
      },
      alley: "",
      modalActive: false,
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        this.loading = true;
        const { data, meta } = await AlleyApi.getAll({
          ...this.param,
          includes: "subdistrict",
        });
        this.items = data;
        this.meta = meta;

        this.loading = false;
      } catch {
        this.$toast.error("เกิดข้อผิดพลาด, กรุณาลองใหม่อีกครั้ง");
      } finally {
        this.loading = false;
      }
    },
    async submit() {
      try {
        const validate = await this.$validator.validateAll();
        if (!validate) return;

        await AlleyApi.create({
          alley_name: this.alley,
          subdistrict_id: 102303,
        });

        this.$toast.success("สร้างซอยสำเร็จ");
        this.clear();
        this.modalActive = false;
        this.loadData();
      } catch {
        this.$toast.error("ผิดพลาด");
      }
    },
    clear() {
      this.alley = "";
      this.$validator.reset();
    },
    updateParam(paramName, value) {
      this.param = {
        ...this.param,
        [paramName]: value,
      };

      if (this.pushState) {
        this.$router.push({
          query: this.param,
          path: this.$route.path,
        });
      }
    },
    removeParam(paramName) {
      delete this.param[paramName];
    },
    changePage(page) {
      this.updateParam("page", page);
      this.loadData();
    },
    changeSearch(keyword) {
      this.updateParam("q", keyword);
      this.updateParam("page", 1);
      this.loadData();
    },
    changePerPage(perPage) {
      this.updateParam("perPage", perPage);
      this.updateParam("page", 1);
      this.loadData();
    },
  },
};
</script>

<style>
table {
  border: none;
  border-collapse: collapse;
}
table td {
  border-left: 1px solid #dddddd;
}
table td:first-child {
  border-left: none;
}
.v-input__control {
  padding: 0px;
}
</style>
