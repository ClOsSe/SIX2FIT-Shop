<template>
  <div class="comments">
    <div class="column">
      <h5>{{ title }}</h5>
      <template v-for="(item, index) in comments" :key="index">
        <div class="q-ma-sm">
            <p>{{ item.nameCommnter }}</p>

            <p>{{ item.Advice }}</p>
          <p>{{ item.comment }}</p>
           <q-separator   />
           <p class="q-ma-sm">{{ item.storeName }}</p>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "نظرات",
      comments: [
        {
          comment:
            "من توی تخفیف به مبلغ 2480 خریدم و از خریدم خیلیییییییییی زیاد راضی ام . کلا ظاهر لپ تاپم رو عوض کرد. مرسی دیج",
            Advice:"خرید این محصول را توصیه میکنم ",
            nameCommnter:"shayan",
            storeName:"نام فروشگاه"
        }, {
          comment:
            "من توی تخفیف به مبلغ 2480 خریدم و از خریدم خیلیییییییییی زیاد راضی ام . کلا ظاهر لپ تاپم رو عوض کرد. مرسی دیج",
            Advice:"خرید این محصول را توصیه میکنم ",
            nameCommnter:"shayan",
            storeName:"نام فروشگاه"
        }, {
          comment:
            "من توی تخفیف به مبلغ 2480 خریدم و از خریدم خیلیییییییییی زیاد راضی ام . کلا ظاهر لپ تاپم رو عوض کرد. مرسی دیج",
            Advice:"خرید این محصول را توصیه میکنم ",
            nameCommnter:"shayan",
            storeName:"نام فروشگاه"
        }, {
          comment:
            "من توی تخفیف به مبلغ 2480 خریدم و از خریدم خیلیییییییییی زیاد راضی ام . کلا ظاهر لپ تاپم رو عوض کرد. مرسی دیج",
            Advice:"خرید این محصول را توصیه میکنم ",
            nameCommnter:"shayan",
            storeName:"نام فروشگاه"
        },
        
      ],
    };
  },
};
</script>
