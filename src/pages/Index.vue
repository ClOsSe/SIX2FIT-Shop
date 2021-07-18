<template>
  <q-page class="flex ">
    <div>
      <!-- <Slider /> -->
      <ThumbnailSlider />
      <h1>این صفحه خانه می‌باشد.</h1>
    </div>
  </q-page>
</template>

<script>
// import Slider from '../components/width_slider/MainSlider.vue'
import ThumbnailSlider from '../components/thumbnail_slider/ThumbnailSlider.vue'

export default {
  name: "PageIndex",
  components:{
    // Slider,
    ThumbnailSlider
  }
};
</script>
