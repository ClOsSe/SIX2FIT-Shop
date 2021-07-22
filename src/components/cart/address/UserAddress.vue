<template>
  <div>
    <div class="row">
      <q-expansion-item expand-separator icon="location_on" label="آدرس">
        <q-card>
          <q-card-section>
            <AddressForm :userAddress="userAddress" />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </div>
</template>
<script>
import AddressForm from "./AddressForm.vue";
export default {
  props: ["userAddress"],
  components: {
    AddressForm,
  },
};
</script>
