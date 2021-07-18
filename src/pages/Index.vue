<template>
  <q-page class="flex q-page col-12" >
    <div class="fit">
      <Slider />
      <ThumbnailSlider />
      <SingleBanner />
      <CardWithPictureAndDescription />
      <h1>این صفحه خانه می‌باشد.</h1>
    </div>
  </q-page>
</template>

<script>
import Slider from '../components/width_slider/MainSlider.vue'
import ThumbnailSlider from '../components/thumbnail_slider/ThumbnailSlider.vue'
import SingleBanner from '../components/single_banner/Banner.vue'
import CardWithPictureAndDescription from 'src/components/card_with_pic_and_dec/CardWithPictureAndDescription.vue';

export default {
  name: "PageIndex",
  components:{
    Slider,
    ThumbnailSlider,
    SingleBanner,
    CardWithPictureAndDescription

  }
};
</script>

