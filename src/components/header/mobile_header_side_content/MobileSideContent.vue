<template>
  <div>
    <q-card
      class="my-card text-white q-ma-xs"
      style="background: radial-gradient(circle, #8359ff 0%, #4527a0 100%)"
    >
      <q-card-section>
        <Search />
      </q-card-section>

      <q-card-section align="left" class="q-pt-none">
        <q-btn size="20px" flat round dense icon="login" @click="show()" />
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
        <router-link
          :to="{ name: 'RegisterVendors' }"
          style="text-decoration: none !important"
        >
          <q-btn
            size="20px"
            flat
            round
            dense
            color="red-1"
            style=""
            icon="person_add"
            @click="register()"
          />
        </router-link>
      </q-card-section>
    </q-card>

    <q-list bordered class="q-ma-xs">
      <q-item
        clickable
        v-ripple
        v-for="(item, index) in mobileSideItems"
        :key="index"
      >
        <q-item-section avatar>
          <q-icon color="primary" :name="item.name" />
        </q-item-section>

        <q-item-section>{{ item.title }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import Search from "../../search/Search.vue";
import Login from "../../login/Login.vue";

export default {
  components: { Search, Login },
  emits: ["ok"],
  props: ["mobileSideItems"],
  methods: {
    show() {
      this.$refs.dialog.show();
    },
    hide() {
      this.$refs.dialog.hide();
    },
  },
};
</script>
<style lang="scss" scoped></style>
