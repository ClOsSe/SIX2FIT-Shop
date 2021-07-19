<template>
  <div>
    <q-footer elevated class="bg-grey-8 text-white">
      <div class="text-center justify-center">
        <div class="descriptiont_title">
          <h3>this is title</h3>
          <p class="q-pa-xs">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        <div class="social">
          <a
            ><q-icon size="md" name="send" style="transform: rotate(-50deg)"
          /></a>
          <a><q-icon size="md" name="local_see" /></a>
          <a><q-icon size="md" name="facebook" /></a>
        </div>
        <div class="q-ma-sm flex text-center justify-center">
          <a dir="ltr" href="tel:09123456789"
            >09123456789<q-icon size="md" name="phone_enabled"
          /></a>
        </div>
      </div>
      <div class="q-mt-lg">
        <CopyRight />
      </div>
    </q-footer>
  </div>
</template>
<script>
import CopyRight from "./CopyRight.vue";
export default {
  components: {
    CopyRight,
  },
};
</script>
<style lang="scss" scoped>
.social {
  a {
    padding: 10px;
  }
}
.descriptiont_title {
  p {
    width: 300px;
    text-align: -webkit-match-parent;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>
