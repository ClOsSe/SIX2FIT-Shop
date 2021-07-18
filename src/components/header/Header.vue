<template>
  <div>
    <!-- desktop -->
    <div>
      <TopHeader class="desktop-only" />
    </div>
    <!-- mobile -->
    <div class="mobile-only">
      <MobileHeader />
    </div>
  </div>
</template>
<script>
import MobileHeader from "./MobileHeader.vue";
import TopHeader from "./TopHeader.vue";
export default {
  components: {
    MobileHeader,
    TopHeader,
  },
};
</script>
