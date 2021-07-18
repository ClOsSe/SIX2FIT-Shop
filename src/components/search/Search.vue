<template>
  <div class="row">
    <div class="col-9">
      <q-input
        label-color="deep-purple-1"
        type="text"
        label="search"
        :dense="dense"
      />
    </div>
    <div class="col-2 q-ma-sm">
      <q-btn
        color="red-1"
        class="q-mt-sm"
        size="20px"
        flat
        round
        dense
        icon="search"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
    };
  },
};
</script>
<style lang="scss" scoped></style>
