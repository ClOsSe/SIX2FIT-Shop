<template>
  <div class="register-card row col-12">
    <div class="col-6 q-pa-lg">
      <q-input
        class="q-pt-lg"
        outlined
        v-model="person.name"
        placeholder="نام"
      />
      <q-input
        class="q-pt-lg"
        outlined
        v-model="person.personalId"
        placeholder="شماره ملی"
      />
      <q-input
        class="q-pt-lg"
        outlined
        v-model="person.staticCallNumber"
        placeholder="شماره ثابت"
      />
      <q-input
        class="q-pt-lg"
        outlined
        v-model="person.storName"
        placeholder="نام فروشگاه"
      />
      <q-input
        class="q-pt-lg"
        outlined
        v-model="person.storeAddress"
        placeholder="آدرس فروشگاه"
      />
      <q-uploader
        class="q-ml-lg q-mt-lg"
        url="http://localhost:4444/upload"
        label="آپلود فایل لوگو"
        square
        color="teal"
        flat
        bordered
        style="width: 100%"
      />
    </div>
    <div class="col-6 q-pa-lg">
      <q-input
        class="q-pt-lg"
        outlined
        v-model="person.lastName"
        placeholder="نام خانوادگی"
      />
      <q-input
        class="q-pt-lg"
        outlined
        v-model="person.phoneNumber"
        placeholder="شماره تماس"
      />
      <q-input
        class="q-pt-lg"
        outlined
        v-model="person.emailAddress"
        placeholder="آدرس ایمیل"
      />

      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-date
            dir="ltr"
            v-model="birthDay"
            color="secondary"
            text-color="black"
          />
        </div>
      </div>

      <q-uploader
        class="q-mr-lg q-mt-lg"
        url="http://localhost:4444/upload"
        label="آپلود فایل لوگو"
        square
        color="teal"
        flat
        multiple
        bordered
        style="width: 100%"
      />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  data() {
    return {
      person: {
        name: "",
        personalId: "",
        staticCallNumber: "",
        storName: "",
        storeAddress: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: "",
      },
      birthOfDate: "",
    };
  },
  monthed() {
    const year = new Date().getUTCFullYear;
    const month = new Date().getUTCFullMonth;
    const day = new Date().getUTCFullDay;
    this.birthOfDate = year + month + day;
    console.log(this.birthOfDate);
  },
  methods: {
    showBirthDay() {
      console.log(this.birthOfDate);
    },
  },
  setup() {
    return {
      birthDay: ref(),
    };
  },
};
</script>
