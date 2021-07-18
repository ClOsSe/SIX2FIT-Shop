<template>
  <div>
    <q-header
      elevated
      style="background: #4527a0 !important"
      class="text-white"
      height-hint="98"
    >
      <div class="row">
        <q-toolbar class="col">
          <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
        </q-toolbar>
        <q-toolbar dir="ltr" class="col">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
