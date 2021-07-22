<template>
  <div class="">
    <div class="my-card">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7">
          <q-img class="" src="https://cdn.quasar.dev/img/mountains.jpg" />
        </div>
        <div class="q-mt-lg col-xs-12 col-sm-12 col-md-12 col-lg-5 q-pa-md">
          <div
            class="
              col-xs-12 col-sm-12 col-md-12 col-lg-6
              column
              justify-around
              login-form
              q-px-md
            "
          >
            <div class="row">
              <h5 class="q-ma-none">
                ورود
                <span v-if="role == 'user'"> کاربر </span>
                <span v-if="role == 'vendor'"> فروشنده </span>
              </h5>
            </div>
            <div class="row">
              <q-input
                v-model="userNumber"
                class="col-12 text-center jsutify q-mt-lg"
                color="secondary"
                label-color="secondary"
                bg-color="grey-1"
                type="text"
                placeholder="شماره تماس"
              />
            </div>
            <div class="row q-mt-lg">
              <div class="col-6 text-center q-gutter-xs">
                <q-radio
                  color="secondary"
                  v-model="role"
                  val="user"
                  label="کاربر"
                  size="50px"
                  @click="validation()"
                />
              </div>
              <div class="col-6 text-center q-gutter-xs">
                <q-radio
                  color="secondary"
                  v-model="role"
                  val="vendor"
                  label="فروشنده"
                  size="50px"
                  @click="validation()"
                />
              </div>
            </div>
            <div class="row col-12 q-mt-lg">
              <q-btn
                :disable="disable"
                class="col-12 q-mt-lg"
                size="20px"
                color="secondary"
                label="ورود"
                @click="login()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      role: "",
      disable: true,
      userNumber: "",
    };
  },
  methods: {
    validation() {
      this.role == "" ? (this.disable = true) : (this.disable = false);
    },
    login() {
      if (this.role === "user") {
        this.$router.push({ name: "registerUser" });
      } else {
        this.$router.push({ name: "RegisterVendors" });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.login-form {
  direction: rtl;
}
</style>
