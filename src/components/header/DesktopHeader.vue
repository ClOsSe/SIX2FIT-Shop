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
          <q-btn size="20px" flat round dense icon="login" />
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
import Search from "../search/Search.vue";

export default {
  components: { Search },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
