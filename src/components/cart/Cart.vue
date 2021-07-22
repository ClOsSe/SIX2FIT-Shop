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
        <CartItems />
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
import CartItems from "./table_item/CartItems.vue";
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
        editAble: false,
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
