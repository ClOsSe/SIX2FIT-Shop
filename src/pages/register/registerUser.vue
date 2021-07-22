<template>
  <div class="user-register">
    <div>
      <div class="title q-ma-lg row">
        <div class="offset-2"></div>
        <q-icon class="q-ma-md" size="25px" name="location_on" />
        <h5 class="q-mt-md">آدرس</h5>
      </div>
      <div class="flex justify-center">
        <div class="offset-3"></div>
        <AddressForm :userAddress="editAbleAddress" />
      </div>
    </div>
  </div>
</template>
<script>
import AddressForm from "../../components/cart/address/AddressForm.vue";

export default {
  components: {
    AddressForm,
  },
  data() {
    return {
      editAbleAddress: {
        state: "state",
        part: "part",
        address: "address",
        city: "city",
        homeNumber: "homeNumber",
        buildingNumber: "buildingNumber",
        userAddress: "userAddress",
        username: "username",
        postalCode: "postalCode",
        editAble: false,
      },
    };
  },
};
</script>
