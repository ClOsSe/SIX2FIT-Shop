<template>
  <div class="register-card row col-12">
    <div class="col-12 col-md-6 col-lg-6 q-pa-lg">
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
      <q-uploader
        class="q-mt-lg"
        url="http://localhost:4444/upload"
        label="آپلود مدارک مورد"
        square
        color="teal"
        flat
        multiple
        bordered
        style="width: 100%"
      />
    </div>
    <div class="col-12 col-md-6 col-lg-6 q-pa-lg">
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
          <p class="q-mt-lg">تاریخ تولد</p>
          <q-date
            dir="ltr"
            v-model="person.birthDay"
            color="secondary"
            text-color="black"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
    <div class="offset-10"></div>
    <div class="col-12 col-md-2 col-lg-2 q-pa-lg">
      <q-btn style="width: 100%" color="secondary" size="20px" label="ادامه" />
    </div>
  </div>
</template>
<script>
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
        birthDay: "",
      },
    };
  },
  mounted() {
    this.getDate();
  },
  methods: {
    getDate() {
      let day = new Date().getDate();
      day.toLocaleString().length != 2 ? (day = "0" + day) : "";
      let Month = new Date().getMonth() + 1;
      Month.toLocaleString().length != 2 ? (Month = "0" + Month) : "";
      let year = new Date().getFullYear();
      this.person.birthDay = day + "/" + Month + "/" + year;
    },
  },
};
</script>
