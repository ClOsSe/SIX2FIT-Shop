<template>
  <div class="row ticket-form col-12">
    <div class="q-pa-lg col-12 col-md-8 col-lg-8">
      <q-input
        class="q-pa-lg"
        outlined
        v-model="ticket.subject"
        placeholder="موضوع"
      />
      <q-input
        class="q-pa-lg"
        outlined
        v-model="ticket.email"
        placeholder="ایمیل"
      />
    </div>
    <div class="q-pa-lg col-12 col-md-4 col-lg-4">
      <q-input
        class="q-pa-lg"
        outlined
        v-model="ticket.name"
        placeholder="نام"
      />
      <q-input
        class="q-pa-lg"
        outlined
        v-model="ticket.phoneNumber"
        placeholder="شماره تماس"
      />
    </div>
    <div class="q-pa-lg col-12">
      <q-input
        class="q-pl-lg q-pr-lg"
        outlined
        v-model="ticket.message"
        placeholder="متن پیام"
      />
    </div>

    <div class="offset-10"></div>
    <div class="col-12 col-md-6 col-lg-6 q-pa-lg">
      <q-uploader
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
      <q-btn
        style="width: 100%"
        class="q-ml-lg"
        color="secondary"
        size="20px"
        label="ارسال"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ticket: {
        subject: "",
        email: "",
        name: "",
        lastName: "",
        message: "",
        file: "",
        phoneNumber: "",
      },
    };
  },
};
</script>
