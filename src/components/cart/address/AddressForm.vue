<template>
  <div class="row col-12">
    <div class="q-pa-xs col-6">
      <q-input
        class="q-pa-xs"
        outlined
        v-model="userAddressForm.state"
        placeholder="استان"
        :disable="inputDisabled"
      />
      <q-input
        class="q-pa-xs"
        outlined
        v-model="userAddressForm.part"
        placeholder="محله"
        :disable="inputDisabled"
      />
      <q-input
        class="q-pa-xs"
        outlined
        v-model="userAddressForm.address"
        placeholder="نشانی"
        :disable="inputDisabled"
      />
    </div>
    <div class="q-pa-xs col-6">
      <q-input
        class="q-pa-xs"
        outlined
        v-model="userAddressForm.city"
        placeholder="شهر"
        :disable="inputDisabled"
      />
      <q-input
        class="q-pa-xs"
        outlined
        v-model="userAddressForm.homeNumber"
        placeholder="پلاک"
        :disable="inputDisabled"
      />
      <q-input
        class="q-pa-xs"
        outlined
        v-model="userAddressForm.buildingNumber"
        placeholder="واحد"
        :disable="inputDisabled"
      />
    </div>
    <div class="q-pr-xs q-pl-xs col-12">
      <q-input
        class="q-pa-xs"
        outlined
        v-model="userAddressForm.userAddress"
        placeholder="آدرس پستی"
        :disable="inputDisabled"
      />
    </div>
    <div class="q-pr-xs q-pl-xs col-12">
      <q-input
        class="q-pa-xs"
        outlined
        v-model="userAddressForm.username"
        placeholder="نام و نام خانوادگی گیرنده"
        :disable="inputDisabled"
      />
      <q-input
        class="q-pa-xs"
        outlined
        v-model="userAddressForm.postalCode"
        placeholder="کد پستی"
        :disable="inputDisabled"
      />
    </div>
    <div v-if="!inputDisabled" dir="ltr" class="q-pr-xs q-pl-xs col-12">
      <q-btn
        class="q-pa-md q-ma-xs"
        size="18px"
        color="secondary"
        align="left"
        label="ثبت آدرس"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: ["userAddress"],
  data() {
    return {
      inputDisabled: "",
      userAddressForm: "",
    };
  },

  created() {
    this.userAddressForm = this.userAddress;
    this.userAddress.editAble == true
      ? (this.inputDisabled = true)
      : (this.inputDisabled = false);
  },
  mounted() {
    console.log(this.userAddress);
  },
};
</script>
