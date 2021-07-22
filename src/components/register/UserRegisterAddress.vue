<template>
  <div>
    <UserAddressForm :userAddress="editAbleUserAddress" />
  </div>
</template>
<script>
import UserAddressForm from "../cart/address/UserAddress.vue";

export default {
  cpmponents: {
    UserAddressForm,
  },
  data() {
    return {
      editAbleUserAddress: {
        state: "",
        part: "",
        address: "",
        city: "",
        homeNumber: "",
        buildingNumber: "",
        userAddress: "",
        username: "",
        postalCode: "",
        editAble: true,
      },
    };
  },
};
</script>
