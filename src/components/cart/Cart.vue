<template>
  <div class="Cart row">
    <div class="q-pa-lg col-4">
      <div class="sideculomn">
        <SideCart :cart="Side" />
      </div>
    </div>
    <div class="q-pa-sm q-pt-lg q-pl-lg col-8">
      <div class="cart-body">
        <UserAddress :userAddress="noneEditAbleAddress" />
        <!-- <ItemsInformation /> -->
        <CartItems :productsitem="productsitem" />
      </div>
    </div>
    <div class="q-ma-lg col-12">
      <ThumbnailSlider :items="Bestseller" />
    </div>
  </div>
</template>
<script>
import UserAddress from "./address/UserAddress.vue";
// import ItemsInformation from "./card_cart_information/ItemsInformation.vue";
import CartItems from "../table_product/TableProduct.vue";

import ThumbnailSlider from "../thumbnail_slider/ThumbnailSlider.vue";
import SideCart from "./side_cart/SideCart.vue";
export default {
  components: {
    UserAddress,
    // ItemsInformation,
    CartItems,
    ThumbnailSlider,
    SideCart,
  },
  data() {
    return {
      productsitem: [
        {
          productoptions: [
            {
              detailsName: "detailsName ",
              detailsValue: "detailsValue ",
              productoptions: [],
            },
          ],
          numberproduct: 0,
          color: "red",
          name: "جارو",
          sopurt: "sixmarket",
          detaione: "رنگ",
          detaioneValue: "red",
          price: 50000,
          store: "sixmarket",
          src: "data:image/jpeg;base64,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",
        },
        {
          productoptions: [
            {
              detailsName: "detailsName ",
              detailsValue: "detailsValue ",
              productoptions: [],
            },
          ],
          numberproduct: 0,

          name: "جارو",
          color: "red",

          sopurt: "sixmarket",
          price: 50000,
          store: "sixmarket",
          src: "data:image/jpeg;base64,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",
        },
        {
          productoptions: [
            {
              detailsName:
                "detailsNames ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss ",
              detailsValue:
                "detailsValue ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss ",
              productoptions: [],
            },
            {
              detailsName:
                "detailsName ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss ",
              detailsValue:
                "detailsValue ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss ",
              productoptions: [],
            },
            {
              detailsName:
                "detailsName ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss ",
              detailsValue:
                "detailsValue ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss ",
              productoptions: [],
            },
          ],
          numberproduct: 0,

          name: "جارو",
          color: "red",

          sopurt: "sixmarket",
          price: 50000,
          store: "sixmarket",
          src: "data:image/jpeg;base64,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",
        },
      ],
      Bestseller: [
        {
          title: "title",
          stars: "stars",
          vendors: "vendors",
          desciption: "desciption",
          price: "price",
          offPrice: "offPrice",
        },
        {
          title: "title",
          stars: "stars",
          vendors: "vendors",
          desciption: "desciption",
          price: "price",
          offPrice: "offPrice",
        },
        {
          title: "title",
          stars: "stars",
          vendors: "vendors",
          desciption: "desciption",
          price: "price",
          offPrice: "offPrice",
        },
      ],
      Side: {
        totalPrice: 750,
        points: 750,
      },
      noneEditAbleAddress: {
        state: "state",
        part: "part",
        address: "address",
        city: "city",
        homeNumber: "homeNumber",
        buildingNumber: "buildingNumber",
        userAddress: "userAddress",
        username: "username",
        postalCode: "postalCode",
        editAble: true,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.sideculomn {
  width: 100%;
}
.cart-body {
  width: 100%;
}
</style>
