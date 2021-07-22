<template>
  <div>
    <div class="row">
      <q-expansion-item expand-separator icon="location_on" label="آدرس">
        <q-card>
          <q-card-section>
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
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
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
    console.log(this.userAddress);
    // this.userAddress.editAble == true
    //   ? (this.inputDisabled = true)
    //   : (this.inputDisabled = false);
  },
};
</script>
