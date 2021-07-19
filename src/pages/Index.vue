<template>
  <q-page class="flex q-page col-12">
    <div class="fit  ">
      <Slider />
  <div class="costum_width  q-ma-auto">
        <!-- List Vendors -->

      <div class="vendors q-ma-lg">
        <div class="row flex align-center">
          <q-col>
            <div class="text-h4">{{ vendors }}</div>
          </q-col>
          <q-space></q-space>
          <q-col>
            <router-link class="text-subtitle1 q-ma-sm" to="/"
              >مشاهده همه</router-link
            >
          </q-col>
        </div>
        <ThumbnailSlider :items="listVedors" />
      </div>
      <!-- List Vendors -->
      <!-- List Best products -->
      <div class="products q-ma-lg">
        <div class="row flex align-center">
          <q-col>
            <div class="text-h4">{{ bestProduct }}</div>
          </q-col>
          <q-space></q-space>
          <q-col>
            <router-link class="text-subtitle1 q-ma-sm" to="/"
              >مشاهده همه</router-link
            >
          </q-col>
        </div>
        <ThumbnailSlider :items="listBestsellers" />
      </div>
      <!-- List Best products -->
      <!-- List off products -->
      <div class="productsOff q-ma-lg">
        <div class="row flex align-center">
          <q-col>
            <div class="text-h4">محصولات داری تخفیف</div>
          </q-col>
          <q-space></q-space>
          <q-col>
            <router-link class="text-subtitle1 q-ma-sm" to="/"
              >مشاهده همه</router-link
            >
          </q-col>
        </div>
        <ThumbnailSlider  :items="listOffProduct" />
      </div>
      <!-- List off products -->
      <!-- <SingleBanner /> -->

      <CardWithPictureAndDescription />
  </div>
    </div>
  </q-page>
</template>

<script>
import Slider from "../components/width_slider/MainSlider.vue";
import ThumbnailSlider from "../components/thumbnail_slider/ThumbnailSlider.vue";
// import SingleBanner from "../components/single_banner/Banner.vue";
import CardWithPictureAndDescription from "src/components/card_with_pic_and_dec/CardWithPictureAndDescription.vue";

export default {
  name: "PageIndex",
  data() {
    return {
      vendors:"دسته بندی فروشندگان",
      bestProduct:"پرفروش ترین محصولات",
      offProduct:"محصولات دارای تخفیف",
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
      listOffProduct: [
        {
          price: 35000,
          offPrice: 30000,
          title: "پنیر سنتی گوسفندی سایگول مقدار 700 گرم",
          stars: 4,
          vendors: false,

        },
      ],

      listVedors: [
        {
          price: 35000,
          offPrice: 30000,
          title: "پنیر سنتی گوسفندی سایگول مقدار 700 گرم",
          stars: 4,
          vendors: true,
          desciption: "alkdjssdkljh",
        },
        {
          price: 35000,
          offPrice: 30000,
          title: "پنیر سنتی گوسفندی سایگول مقدار 700 گرم",
          stars: 4,
          vendors: true,
          desciption: "alkdjssdkljh",
        },
        {
          price: 35000,
          offPrice: 30000,
          title: "پنیر سنتی گوسفندی سایگول مقدار 700 گرم",
          stars: 4,
          vendors: true,
          desciption: "alkdjssdkljh",
        },
        {
          price: 35000,
          offPrice: 30000,
          title: "پنیر سنتی گوسفندی سایگول مقدار 700 گرم",
          stars: 4,
          vendors: true,
          desciption: "alkdjssdkljh",
        },
      ],
    };
  },
  components: {
    Slider,
    ThumbnailSlider,
    // SingleBanner,
    CardWithPictureAndDescription,
  },
};
</script>
<style lang="scss" scoped>
.costum_width{
  max-width: 1500px;
  margin: auto;
}
</style>
