<template>
  <div>
    <h5>{{ information.productName }}</h5>
    <div class="full_name_product">
      {{ information.fullName }}
    </div>
    <div class="colors row">
      <template v-for="(item,index) in information.colors" :key="index">
          <div class="color q-ma-sm" :style="{'background':item}"></div>
      </template>
    </div>
    <div class="options column">
        <template v-for="(item,index) in information.options" :key="index">
            <span>
            {{ information.options[index] }}
        </span>
        </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      information: {
        productName: "این یک گوشی خوب است",
        fullName: "Pars Khazar Turbo 2000 Vacuum Cleaner",
        options:{
            option1:"لوله تلسکوپی : دارد",
            option2:"لوله تلسکوپی : دارد",
            option3:"لوله تلسکوپی : ندارد",
            option4:"لوله تلسکوپی : دارد",
            option5:"لوله تلسکوپی : دارد",
        },
        colors:{
            color1:"#000",
            color2:"green",
            color3:"blue",
            color4:"red",
            color5:"red",
            color5:"red",
            

        },
      },
    };
  },
};
</script>
<style scoped>
.color{
    width: 30px;
    height: 30px;
    box-shadow: 0px 0px 3px rgb(15, 15, 15);
    border-radius: 50px;
}
</style>
