<template>
  <div class="fit">
    <div class="row">
      <table class="fit">
        <template v-for="(item, index) in listtable" :key="index">
          <tr class="tablerow bordred text-center">
            <td><img src="" alt="..." /></td>
            <td>{{ item.storename }}</td>
            <td>{{ item.sender }}</td>
            <td>{{ item.garanti }}</td>
            <td>{{ item.price }}</td>
            <td>
              <q-btn color="negative">
                <div>{{ item.addtocart }}</div>
                <q-icon left size="25px" name="add_shopping_cart" />
              </q-btn>
            </td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listtable: [
        {
          price: 60000,
          garanti: "samsung",
          addtocart: "افزودن به سبد خرید",
          sender: "ارسال فروشنده",
          storename: "نام فروشگاه",
        },
        {
          price: 60000,
          garanti: "samsung",
          addtocart: "افزودن به سبد خرید",
          sender: "ارسال فروشنده",
          storename: "نام فروشگاه",
        },
        {
          price: 60000,
          garanti: "samsung",
          addtocart: "افزودن به سبد خرید",
          sender: "ارسال فروشنده",
          storename: "نام فروشگاه",
        },
        {
          price: 60000,
          garanti: "samsung",
          addtocart: "افزودن به سبد خرید",
          sender: "ارسال فروشنده",
          storename: "نام فروشگاه",
        },
        {
          price: 60000,
          garanti: "samsung",
          addtocart: "افزودن به سبد خرید",
          sender: "ارسال فروشنده",
          storename: "نام فروشگاه",
        },
        {
          price: 60000,
          garanti: "samsung",
          addtocart: "افزودن به سبد خرید",
          sender: "ارسال فروشنده",
          storename: "نام فروشگاه",
        },
      ],
    };
  },
};
</script>
<style scoped>
/* .tablerow {
  margin: 50px 0 !important;
  border: 1px solid;
} */
tr.tablerow td {
  padding: 10px;
}
tr.tablerow {
  border: 1px solid black !important;
}
</style>
