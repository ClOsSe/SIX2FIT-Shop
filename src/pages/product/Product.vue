<template>
  <div>
    <div class="row">
      <div class="col-4">
        <ImageGallery class="ImageGallery" :thumbnails="thumbnails" />
      </div>
      <div class="col q-px-sm">
        <ProductInformation />
      </div>
    </div>
    <div class="row fit">
      <VendorsTable />
    </div>
    <div class="slider q-ma-lg">
      <div class="row flex align-center">
        <q-col>
          <div class="text-h4">{{ Related }}</div>
        </q-col>
        <q-space></q-space>
        <q-col>
          <router-link class="text-subtitle1 q-ma-sm" to="/"
            >مشاهده همه</router-link
          >
        </q-col>
      </div>
      <Related :items="listBestsellers" />
      <Tab />
      
    </div>
  </div>
</template>
<script>
import ProductInformation from "src/components/product/product_information/product_information_card/ProductInformation.vue";
import VendorsTable from "../../components/table/table.vue";
import ImageGallery from "../../components/width_slider/MainSlider.vue";
import Related from "../../components/thumbnail_slider/ThumbnailSlider.vue";
import Tab from "src/components/tab/Tab.vue";
export default {
  data() {
    return {
      thumbnails: "true",
      Related: "محصولات مرتبط",
      listBestsellers: [
        {
          price: 35000,
          offPrice: 30000,
          title: "پنیر سنتی گوسفندی سایگول مقدار 700 گرم",
          stars: 4,
          vendors: false,
        },
        {
          price: 35000,
          offPrice: 30000,
          title: "پنیر سنتی گوسفندی سایگول مقدار 700 گرم",
          stars: 4,
          vendors: false,
        },
        {
          price: 35000,
          offPrice: 30000,
          title: "پنیر سنتی گوسفندی سایگول مقدار 700 گرم",
          stars: 4,
          vendors: false,
        },
      ],
    };
  },
  components: {
    ImageGallery,
    ProductInformation,
    VendorsTable,
    Related,
    Tab,
  },
  mounted() {
    this.thumbnails = true;
  },
};
</script>
<style scoped></style>
