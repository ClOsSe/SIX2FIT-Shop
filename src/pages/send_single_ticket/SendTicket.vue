<template>
  <div>
    <p>
      در این صفحه با توجه به ای دی ارسالی تمام تیکت ها و زیر تیکت های همان ای دی
      دریافت می شوند
    </p>
    <Response :tickets="ticketList" />
    <TicketForm />
  </div>
</template>
<script>
import Response from "../../components/ticket/show_response/Response.vue";
import TicketForm from "../../components/ticket/contact_form/TicketForm.vue";
export default {
  components: { Response, TicketForm },
  data() {
    return {
      ticketList: [
        {
          date: "18/07/2021",
          id: "3",
          title: "ticket 1",
          message:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
        },
        {
          date: "17/07/2021",
          id: "2",
          title: "ticket 2",
          message:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
        },
        {
          date: "18/06/2021",
          id: "1",
          title: "ticket 3",
          message:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
        },
      ],
    };
  },
};
</script>
