<template>
  <div class="row q-col-gutter-lg">
   <template v-for="item in 3" :key="item">
        <div class="col-12 col-sm-4 col-md-4">
      <q-card class="my-card text-center" flat bordered>
        <q-icon name="home" />

        <q-card-section class="items-stretch flex-center justify-between ">
          <div class="text-overline text-orange-9">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
          <div class="text-caption text-grey">
            {{ title }}
          </div>
        </q-card-section>
      </q-card>
    </div>
   </template>
  </div>
</template>
<script>
export default {
    data(){
        return{
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    }
}
</script>
