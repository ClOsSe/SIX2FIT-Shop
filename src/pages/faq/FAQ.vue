<template>
  <div>
    <div class="relative-position row">
      <img class="fit" :src="imageBanner" alt="..." />
      <div class="titleText">
        <div class="text-h2">{{ bannerTexts.nameMarket }}</div>
        <div class="text-h4 q-my-sm">{{ bannerTexts.bannerSubtext }}</div>
        <div class="text-body2">{{ bannerTexts.bannerdescrption }}</div>
      </div>
    </div>
    <div class="column text-center">
      <div class="pageText q-pa-lg">
        سهم ما از این کسب کار های این روز های ایران
      </div>
      <div class="row justify-center q-gutter-lg q-ma-auto">
        <template v-for="(item, index) in listShow" :key="index">
          <div class="col-12 col-xs-4 col-sm-3">
            <q-card class="my-card q-pa-sm">
              <q-icon :name="item.icon" size="40px" />

              <q-card-section>
                <div class="text-h6">{{}}</div>
                <q-card-section class="q-pt-none text-weight-bolder">{{
                  item.number
                }}</q-card-section>
                <p>{{ item.desc }}</p>
              </q-card-section>

              <router-link to="/">
                <div class="text-subtitle2">{{ item.linkText }}</div>
              </router-link>
            </q-card>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageBanner:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/510888409db0a4882c1365b60ade395b3f99d388_1625934164.gif",
      bannerTexts: {
        nameMarket: "فروشگاه سیکس 2 فیت",
        bannerSubtext: "اینجا فروشگاه ماست ",
        bannerdescrption:
          " six2fit Lorem ipsum dolor sit amet consectetur, adipisicing elit.consequatur! market",
      },
      listShow: [
        {
          icon: "home",
          number: "+30000",
          desc: "کسب‌و‌کار و فروشنده",

          linkText: "فروشنده شوید",
        },
        {
          icon: "home",
          number: "50000",
          desc: "تنوع کالایی",
          linkText: "کالا هارا ببینید",
        },
        {
          icon: "call",
          number: "تنوع کالایی",
          desc: "بازدید یکتای ماهانه",
          linkText: "عضو دیجی کالا شوید",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.titleText {
  position: absolute;
  top: 20%;
  right: 10%;
}
img {
  height: 50vh !important;
}
</style>
