<template>
  <div class="q-pa-md">
    <q-header
      style="background: #4527a0 !important"
      bg-color="deep-purple-10"
      elevated
    >
      <div class="row">
        <q-toolbar class="col-4">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
        </q-toolbar>
        <div class="col-5">
          <Search :outline="true" />
        </div>
        <q-toolbar class="col-3" dir="ltr">
          <div class="q-pa-md q-gutter-sm">
            <q-btn size="20px" flat round dense icon="login" @click="show()" />
            <q-dialog ref="dialog" @hide="onDialogHide">
              <q-card class="q-dialog-plugin">
                <q-card-section align="right">
                  <Login />
                </q-card-section>
              </q-card>
            </q-dialog>
          </div>
        </q-toolbar>
      </div>
      <q-tabs v-model="tab">
        <q-tab name="store" label="فروشگاه" />
        <q-tab name="blogs" label="مقالات" />
        <q-tab name="aboutus" label="درباره ما" />
        <q-tab name="contactus" label="تماس با ما" />
        <q-tab name="vendors" label="فروشندگان" />
      </q-tabs>
    </q-header>
  </div>
</template>
<script>
import { useQuasar } from "quasar";
import Search from "../search/Search.vue";
import Login from "../login/Login.vue";

export default {
  components: { Search, Login },
  emits: [
    // REQUIRED
    "ok",
    // "hide",
  ],

  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.$refs.dialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.dialog.hide();
    },

    // onDialogHide() {
    // required to be emitted
    // when QDialog emits "hide" event
    // this.$emit("hide");
    // },
  },
};
</script>
<style lang="scss" scoped></style>
