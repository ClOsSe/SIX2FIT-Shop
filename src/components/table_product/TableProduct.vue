<template>
  <div class="q-pa-lg">
    <div class="column">
      <template v-for="(item, index) in productsitem" :key="index">
        <div class="row q-ma-lg">
          <div class="col-12 col-sm-2">
            <img class="imageProduct" :src="item.src" alt="...." />
          </div>
          <div class="col-12 col-sm-10 q-px-sm ">
            <p>{{ item.name }}</p>
            <p>{{ item.sopurt }}</p>
            <p>{{ item.price }}</p>
            <p>{{ item.store }}</p>
            <div class="counter row">
              <div class="col-auto">
                <q-btn @click="item.numberproduct++">+</q-btn>
                <input
                  type="number"
                  ref="numberproduct"
                  class="inputBox"
                  v-model="item.numberproduct"
                />
                <q-btn @click="item.numberproduct--">-</q-btn>
              </div>
              <div class="col q-mx-sm">
                  <q-btn icon="delete_outline" />
              </div>
              <div class="col text-end q-mx-sm">
                  <p class=" float-left">قیمت : {{ item.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    
  </div>
</template>
<script>
export default {
  props: ["productsitem"],
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.imageProduct {
 width: 100%;
 height: 100%;
  box-shadow: 1px 1px 4px rgb(100, 99, 99);
}
.inputBox {
  width: 30px;
  border: none;
  text-align: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield !important;
}
/* .counter{
    border: 1px solid;
} */
</style>
