<template>
  <q-layout dir="rtl" view="hHh Lpr fff">
    <!-- header -->
<q-header>
      <Header />

</q-header>
<q-page-container>
      <router-view />
    </q-page-container>    <!-- footer -->
<q-footer>
      <Footer />
</q-footer> 
 </q-layout>
</template>

<script>
import Header from "components/header/Header.vue";
import Footer from "components/footer/Footer.vue";

export default {
  name: "MainLayout",

  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
  .q-page-container{
    padding-right: 0 !important;
  }
</style>
