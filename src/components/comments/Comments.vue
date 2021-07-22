<template>
  <div class="comments">
    <div class="column">
      <h5>{{ title }}</h5>
      <template v-for="(item, index) in comments" :key="index">
        <div class="q-ma-sm">
            <p>{{ item.nameCommnter }}</p>

            <p>{{ item.Advice }}</p>
          <p>{{ item.comment }}</p>
           <q-separator   />
           <p class="q-ma-sm">{{ item.storeName }}</p>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props:["comments"],
  data() {
    return {
      title: "نظرات",
    };
  },
};
</script>
