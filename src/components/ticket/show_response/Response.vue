<template>
  <div class="response-box">
    <div
      class="q-ma-lg column"
      v-for="(ticket, index) in ticketList"
      :key="index"
    >
      <div class="row flex response-head">
        <div class="q-mr-lg q-mt-sm col-5 col-sm-5 col-md-9 col-lg-9">
          <p>تاریخ: &nbsp; {{ ticket.date }}&nbsp;</p>
        </div>
        <div dir="ltr" class="q-mr-lg q-mt-sm col-5 col-sm-5 col-md-2 col-lg-2">
          <p>تیکت شماره: &nbsp; {{ ticket.id }}&nbsp;</p>
        </div>
      </div>
      <div class="response-body q-pa-xs col-12">
        <div class="row q-pa-sm">
          <p dir="rtl" class="q-pt-sm">موضوع : &nbsp;</p>
          <p dir="rtl" class="q-pt-sm">&nbsp; {{ ticket.title }}&nbsp;</p>
        </div>
        <div class="row response-message q-pa-sm">
          <p dir="rtl">&nbsp; {{ ticket.message }}&nbsp;</p>
        </div>
        <div dir="ltr" class="sendMessage q-ml-md q-mt-sm q-mb-sm">
          <router-link
            style="text-decoration: none"
            :to="{ name: 'SendTicketWithTicketId', params: { id: ticket.id } }"
          >
            <q-btn size="15px" align="left" color="primary" label="پاسخ" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["tickets"],
  data() {
    return {};
  },
  created() {
    this.ticketList = this.tickets;
  },
};
</script>
<style lang="scss" scoped>
.response-box {
  .response-head {
    background-color: $secondary;
    height: 70px;
    border: 1px solid $info;
    margin: 1px;

    p {
      padding: 15px;
      font-size: 18px;
      color: rgb(255, 255, 255);
    }
  }
  .response-body {
    border: 1px solid $info;
    margin: 1px;
    margin-top: -2px;
    .response-message {
      background-color: rgb(240, 240, 240);
    }
    p {
      font-size: 18px;
    }
  }
}
@media (min-width: 320px) and (max-width: 768px) {
  .response-head {
    p {
      font-size: 13px !important;
    }
  }
  .response-body {
    p {
      font-size: 13px !important;
    }
  }
}
</style>
