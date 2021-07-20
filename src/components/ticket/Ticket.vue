<template>
  <div style="height: 500px">
    <Response />
    <TicketForm />
  </div>
</template>
<script>
import Response from "./show_response/Response.vue";
import TicketForm from "./contact_form/TicketForm.vue";
export default {
  components: { Response, TicketForm },
};
</script>
