<template>
  <q-drawer
    v-model="leftDrawerOpen"
    overlay
    side="right"
    bordered
    class="bg-grey-1"
  >
    <q-list>
      <q-item-label header class="text-grey-8"
        >{{ leftDrawerOpen }}
      </q-item-label>
    </q-list>
  </q-drawer>
</template>
<script>
export default {
  data() {
    return { leftDrawerOpen: true };
  },
  props: ["drawer"],
  monthed() {
    this.leftDrawerOpen = this.drawer;
  },
};
</script>
