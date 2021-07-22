<template>
  <div>
    <div class="side q-pa-lg q-mt-lg col-12">
      <div class="flex row price">
        <div class="col-12 q-pa-md">
          <p class="">
            این یک متن ساختگی است از متن احتمالی که قرار است در اینجا قرار گیرد
          </p>
        </div>
        <div class="col-6 text-right q-pa-md">
          <p>جمع کل :</p>
        </div>
        <div class="col-6 text-left q-pa-md">
          <p>{{ cart.totalPrice }} تومان</p>
        </div>
        <div class="submit col-12">
          <q-btn
            class="text-center fit"
            size="18px"
            align="center"
            color="secondary"
            label="تکمیل خرید"
          />
        </div>
      </div>
    </div>
    <div class="side q-pa-lg q-mt-lg col-12">
      <div class="flex row price">
        <div class="col-12 q-pa-md">
          <p class="">
            این یک متن ساختگی است از متن احتمالی که قرار است در اینجا قرار گیرد
          </p>
        </div>

        <div class="items row">
          <q-list dense padding class="rounded-borders col-12">
            <q-item v-ripple>
              <q-item-section> مورد اول </q-item-section>
            </q-item>

            <q-item v-ripple>
              <q-item-section> مورد دوم </q-item-section>
            </q-item>

            <q-item v-ripple>
              <q-item-section> مورد سوم </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["cart"],
};
</script>
<style lang="scss" scoped>
.side {
  border-radius: 1px;
  box-shadow: 0px 0px 10px $secondary;
}
</style>
