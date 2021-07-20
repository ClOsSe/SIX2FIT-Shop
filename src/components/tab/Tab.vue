<template>
  <div>
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey-10 tabs"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="mails" label="نظرات" />
        <q-tab name="alarms" label="Alarms" />
        <q-tab name="movies" label="Movies" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="mails">
          <div class="text-h6">نظرات</div>
          <Comments />
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="movies">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>
<script>
import Comments from 'src/components/comments/Comments.vue'
export default {
  data() {
    return {
      tab: "",
    };
  },
  components:{
      Comments
  }
};
</script>
<style scoped>
.tabs {
  width: 500px;
}
</style>
