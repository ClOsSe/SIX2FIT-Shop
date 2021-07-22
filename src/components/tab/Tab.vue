<template>
  <div>
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey-10 tabs"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="comments" label="نظرات" />
        <q-tab name="ditales" label="مشخصات" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <!-- comments -->
        <q-tab-panel name="comments">
          <Comments :comments="comments" />
        </q-tab-panel>
        <!-- comments -->

        <!-- details -->
        <q-tab-panel name="ditales">
          <div class="row">
            <div class="col-2">
              <p>مشخصات فیزیکی</p>
            </div>
            <div class="col">
              <template v-for="(item, index) in details" :key="index">
                <div class="row q-ma-sm">
                  <div class="col-3 text-grey-7">{{ item.detailName }}</div>
                  <div class="col">
                    {{ item.detailValue }}
                  </div>
                </div>
              </template>
            </div>
          </div>
        </q-tab-panel>
        <!-- details --> 

        
      </q-tab-panels>
    </q-card>
  </div>
</template>
<script>
import Comments from "src/components/comments/Comments.vue";
export default {
  data() {
    return {
      tab: "",
      comments: [
        {
          comment:
            "من توی تخفیف به مبلغ 2480 خریدم و از خریدم خیلیییییییییی زیاد راضی ام . کلا ظاهر لپ تاپم رو عوض کرد. مرسی دیج",
          Advice: "خرید این محصول را توصیه میکنم ",
          nameCommnter: "shayan",
          storeName: "نام فروشگاه",
        },
        {
          comment:
            "من توی تخفیف به مبلغ 2480 خریدم و از خریدم خیلیییییییییی زیاد راضی ام . کلا ظاهر لپ تاپم رو عوض کرد. مرسی دیج",
          Advice: "خرید این محصول را توصیه میکنم ",
          nameCommnter: "shayan",
          storeName: "نام فروشگاه",
        },
        {
          comment:
            "من توی تخفیف به مبلغ 2480 خریدم و از خریدم خیلیییییییییی زیاد راضی ام . کلا ظاهر لپ تاپم رو عوض کرد. مرسی دیج",
          Advice: "خرید این محصول را توصیه میکنم ",
          nameCommnter: "shayan",
          storeName: "نام فروشگاه",
        },
        {
          comment:
            "من توی تخفیف به مبلغ 2480 خریدم و از خریدم خیلیییییییییی زیاد راضی ام . کلا ظاهر لپ تاپم رو عوض کرد. مرسی دیج",
          Advice: "خرید این محصول را توصیه میکنم ",
          nameCommnter: "shayan",
          storeName: "نام فروشگاه",
        },
      ],
      details: [
        {
          detailName: "جنس",
          detailValue: "پلی کربنات",
        },
        {
          detailName: "رنگ های موجود",
          detailValue: "زرد و .... ",
        },
        {
          detailName: "سایز",
          detailValue: "50 * 50 ",
        },
      ],
    };
  },
  components: {
    Comments,
  },
};
</script>
<style scoped>
.tabs {
  width: 500px;
}
</style>
