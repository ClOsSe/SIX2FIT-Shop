<template>
  <div>
    <swiper
      :slides-per-view="6"
      :space-between="40"
      :breakpoints="swiperOptions.breakpoints"
      class="q-ma-lg"
    >
      <template v-for="(item, index) in items" :key="index">
        <swiper-slide class="" clickable>
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

            <q-card-section>
              <div class="row no-wrap items-center">
                <div class="col text-subtitle1 ellipsis">{{ item.title }}</div>
                <div
                  class="
                    col-auto
                    text-grey text-caption
                    q-pt-md
                    row
                    no-wrap
                    items-center
                  "
                ></div>
              </div>

            <q-rating v-if="item.vendors==true" v-model="item.stars" :max="5" size="20px" />
            </q-card-section>

            <q-card-section v-if="item.vendors == true" class="q-pt-none">
              <div class="text-subtitle1">{{ item.desciption }}</div>
            </q-card-section>

            <q-card-section v-if="item.vendors != true" class="q-pt-none text-left">
              <div class="text-subtitle1">{{ item.price }}</div>
              <div class="text-caption text-grey">
                <span class="text-red-14">{{ item.offPrice }}</span>
              </div>
            </q-card-section>

            

            
          </q-card>
        </swiper-slide>
      </template>

      ...
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";

export default {
  props: ["items"],
  data() {
    return {
      stars: "",
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          599: {
            slidesPerView: 3,
            spaceBetween: 50,
          },

          771: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1023: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1439: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1919: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {},
};
</script>
<style scoped>
.swiper-container {
  overflow: inherit;
}
</style>
