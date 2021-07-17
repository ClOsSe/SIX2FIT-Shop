<template>
  <div>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <!-- side panel -->
    <div>
      <MobileHeader :drawer="leftDrawerOpen" />
    </div>
  </div>
</template>
<script>
import MobileHeader from "./MobileHeader.vue";
export default {
  components: {
    MobileHeader,
  },
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  //   methods: {
  //     toggleLeftDrawer() {
  //       this.leftDrawerOpen.drawer = !this.leftDrawerOpen.drawer;
  //     },
  //   },
};
</script>
