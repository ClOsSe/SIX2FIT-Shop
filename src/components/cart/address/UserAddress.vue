<template>
  <div>
    <div class="row">
      <q-expansion-item expand-separator icon="location_on" label="آدرس">
        <q-card>
          <q-card-section>
            <div class="row col-12">
              <div class="q-pa-xs col-6">
                <q-input
                  class="q-pa-xs"
                  outlined
                  v-model="text"
                  placeholder="استان"
                />
                <q-input
                  class="q-pa-xs"
                  outlined
                  v-model="text"
                  placeholder="محله"
                />
                <q-input
                  class="q-pa-xs"
                  outlined
                  v-model="text"
                  placeholder="نشانی"
                />
              </div>
              <div class="q-pa-xs col-6">
                <q-input
                  class="q-pa-xs"
                  outlined
                  v-model="text"
                  placeholder="شهر"
                />
                <q-input
                  class="q-pa-xs"
                  outlined
                  v-model="text"
                  placeholder="پلاک"
                />
                <q-input
                  class="q-pa-xs"
                  outlined
                  v-model="text"
                  placeholder="واحد"
                />
              </div>
              <div class="q-pr-xs q-pl-xs col-12">
                <q-input
                  class="q-pa-xs"
                  outlined
                  v-model="text"
                  placeholder="آدرس پستی"
                />
              </div>
              <div class="q-pr-xs q-pl-xs col-12">
                <q-input
                  class="q-pa-xs"
                  outlined
                  v-model="text"
                  placeholder="نام و نام خانوادگی گیرنده"
                />
                <q-input
                  class="q-pa-xs"
                  outlined
                  v-model="text"
                  placeholder="کد پستی"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </div>
</template>
<script>
export default {
  // props=["userAddress"],
};
</script>
