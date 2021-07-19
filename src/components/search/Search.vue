<template>
  <div class="row">
    <div class="col-9">
      <q-input
        :bg-color="outline ? 'red-1' : ''"
        :rounded="outline"
        :outlined="outline"
        :label-color="outline ? 'deep-purple-10' : 'red-1'"
        type="text"
        label="search"
        :dense="dense"
        id="qinput"
      />
    </div>
    <div class="col-2 q-ma-sm">
      <q-btn color="red-1" size="20px" flat round dense icon="search" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["outline"],
  data() {
    return {
      search: "",
    };
  },
};
</script>
<style lang="scss" scoped></style>
