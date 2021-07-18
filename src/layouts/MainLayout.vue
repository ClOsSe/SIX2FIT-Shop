<template>
  <q-layout dir="rtl" view="hHh LpR lFr">
    <!-- header -->
    <Header />
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- footer -->
    <Footer />
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
