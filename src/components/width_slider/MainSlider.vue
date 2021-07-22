<template>
  <div class=" fit">
    <q-carousel swipeable animated v-model="slide" :thumbnails="thumbnails"  infinite autoplay>
      <template v-for="(item, index) in sliderItem" :key="index">
        <q-carousel-slide
          :name="index"
          v-bind:img-src="sliderItem[index].src"
        />
      </template>
    </q-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 1,
      
      sliderItem: [
        { src: "https://cdn.quasar.dev/img/mountains.jpg" },
        { src: "https://cdn.quasar.dev/img/parallax1.jpg" },
        { src: "https://cdn.quasar.dev/img/parallax2.jpg" },
        { src: "https://cdn.quasar.dev/img/quasar.jpg" },
      ],
    };
  },
  props: ["thumbnails"],
};
</script>
