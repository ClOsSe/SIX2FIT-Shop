<template>
  <div class="">
    <div
      style="background: #4527a0 !important"
      bg-color="deep-purple-10"
      elevated
    >
      <div class="row q-pa-sm flex-center">
        <!-- logo -->
        <q-toolbar class="col-4">
          <router-link :to="{ name: 'Home' }">
            <q-avatar>
              <img
                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              />
            </q-avatar>
          </router-link>
        </q-toolbar>
        <!-- search -->
        <div class="col-5">
          <Search :outline="true" />
        </div>
        <!-- login -->
        <q-toolbar class="col-3" dir="ltr">
          <div class="q-pa-md q-gutter-sm">
            <q-btn size="18px" flat round dense icon="login" @click="show()" />
            <q-dialog
              class="full-heigh full-width"
              ref="dialog"
              @hide="onDialogHide"
            >
              <q-card class="q-dialog-plugin card q-ma-none q-pa-none">
                <q-card-section align="right " class="q-ma-none q-pa-none">
                  <Login />
                </q-card-section>
              </q-card>
            </q-dialog>
          </div>
          <div>
            <router-link
              style="text-decoration: none"
              :to="{ name: 'RegisterVendors' }"
            >
              <q-btn
                size="18px"
                flat
                round
                dense
                color="red-1"
                style=""
                icon="person_add"
              />
            </router-link>
            <router-link style="text-decoration: none" :to="{ name: 'Cart' }">
              <q-btn
                size="18px"
                flat
                round
                dense
                color="red-1"
                style=""
                icon="shopping_cart"
              />
            </router-link>
          </div>
        </q-toolbar>
      </div>
      <!-- menu -->
      <q-tabs v-model="tab">
        
         <router-link
          style="text-decoration: none; color: white"
          :to="{ name: 'Store' }"
        >
        <q-tab name="store" label="فروشگاه" />
        </router-link>
         <router-link
          style="text-decoration: none; color: white"
          :to="{ name: 'Article' }"
        >
        <q-tab name="blogs" label="مقالات" />
        </router-link>
        
        <q-tab name="aboutus" label="درباره ما" />
        <q-tab name="contactus" label="تماس با ما" />
        <q-tab name="vendors" label="فروشندگان" />
        <router-link
          style="text-decoration: none; color: white"
          :to="{ name: 'Ticket' }"
        >
          <q-tab name="tickets" label="تیکت‌ها" />
        </router-link>
      </q-tabs>
    </div>
  </div>
</template>
<script>
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
<style lang="scss" scoped>
.card {
  width: 900px;
  max-width: none;
}
</style>
