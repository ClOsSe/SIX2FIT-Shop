<template>
  <div class="row q-col-gutter-lg justify-center">
    <template v-for="item in listdata" :key="item">
      <!-- each card -->
      <div class="col-12 col-md-3">
        <q-card class="my-card text-center" flat>
          <q-icon :name="item.icon" color="grey-9" size="50px" />
          <q-card-section class="items-stretch flex-center justify-between">
            <div class="text-h5 q-mt-sm q-mb-xs">
              <p>{{ item.title }}</p>
            </div>
            <div class="text-weight-bold">
              <p>{{ item.description }}</p>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <!-- each card -->
    </template>
  </div>
</template>
<script>
const listdata = [
  {
    name: "howto",
    icon: "local_shipping",
    title: "title",
    description:
      "کاهش هزینه‌های جانبی فروش تا کمترین مقدارکاهش هزینه‌های جانبی فروش تا کمترین مقدارکاهش هزینه‌های جانبی فروش تا کمترین مقدارکاهش هزینه‌های جانبی فروش تا کمترین مقدار",
  },
  {
    name: "howto",
    icon: "person_add",
    title: "title",
    description:
      "کاهش هزینه‌های جانبی فروش تا کمترین مقدارکاهش هزینه‌های جانبی فروش تا کمترین مقدارکاهش هزینه‌های جانبی فروش تا کمترین مقدارکاهش هزینه‌های جانبی فروش تا کمترین مقدار",
  },
  {
    name: "howto",
    icon: "switch_account",
    title: "title",
    description:
      "کاهش هزینه‌های جانبی فروش تا کمترین مقدارکاهش هزینه‌های جانبی فروش تا کمترین مقدارکاهش هزینه‌های جانبی فروش تا کمترین مقدارکاهش هزینه‌های جانبی فروش تا کمترین مقدار",
  },
];
export default {
  data() {
    return {
      listdata: listdata,
    };
  },
};
</script>
