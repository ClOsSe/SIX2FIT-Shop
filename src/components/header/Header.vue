<template>
  <div>
    <!-- desktop -->
    <div>
      <DesktopHeader class="mobile-hide" />
      <!-- <DesktopHeader class="desktop-only" /> -->
    </div>
    <!-- mobile -->
    <div>
      <MobileHeader class="desktop-hide" />
      <!-- <MobileHeader class="mobile-only" /> -->
    </div>
  </div>
</template>
<script>
import MobileHeader from "./MobileHeader.vue";
import DesktopHeader from "./DesktopHeader.vue";
export default {
  components: {
    MobileHeader,
    DesktopHeader,
  },
};
</script>
