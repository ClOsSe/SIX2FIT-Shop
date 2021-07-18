<template>
  <div>
    <q-card
      class="my-card text-white q-ma-xs"
      style="background: radial-gradient(circle, #8359ff 0%, #4527a0 100%)"
    >
      <q-card-section>
        <Search />
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
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
export default {
  components: { Search },
  props: ["mobileSideItems"],
  monthed() {
    console.log(this.mobileSideItems);
  },
};
</script>
