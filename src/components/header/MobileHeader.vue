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
      <MobileSideContent :mobileSideItems="sidePanelList" />
    </q-drawer>
  </div>
</template>

<script>
import MobileSideContent from "./mobile_header_side_content/MobileSideContent.vue";
import { ref } from "vue";

export default {
  components: {
    MobileSideContent,
  },
  data() {
    return {
      sidePanelList: [
        {
          name: "store",
          title: "فروشگاه",
        },
        {
          name: "article",
          title: "مقالات",
        },
        {
          name: "info",
          title: "درباره ما",
        },
        {
          name: "connect_without_contact",
          title: "ارتباط با ما",
        },
        {
          name: "people",
          title: "فروشندگان",
        },
      ],
    };
  },
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
