<template>
    <q-page class="q-ma-lg">
        <div>
            <div class="row q-gutter-lg justify-center">
             
                <div class="col-6 col-sm-4 col-md-2 col-lg-2   " v-for="(item,index) in blogs" :key="index"> 
                      <q-card class="my-card q-gutter-md-md" flat bordered>
      <q-img
        :src="item.blogImage" class="fit"
      />

      <q-card-section>
        <div class="text-overline ">{{ item.blogTitle }}</div>
        <div class="text-caption text-grey">
{{ item.blogDescription }}
        </div>
      </q-card-section>

      <q-card-actions>

        <q-space />
<router-link :to="{name: 'SingleArticle' }">
        <q-btn flat color="primary" label="مشاهده بیشتر" />

</router-link>
       
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
                    
                </div>
            </div>
        </div>
    </q-page>
</template>
<script>
export default {
    data(){
        return{
            blogs:[
                {
                    blogImage:"",
                    blogTitle:"this is a titel fo evry",
                    blogDescription:"this is description"
                },{
                    blogImage:"",
                    blogTitle:"this is a titel fo evry",
                    blogDescription:"this is description"
                },{
                    blogImage:"",
                    blogTitle:"this is a titel fo evry",
                    blogDescription:"this is description"
                },{
                    blogImage:"",
                    blogTitle:"this is a titel fo evry",
                    blogDescription:"this is description"
                },{
                    blogImage:"",
                    blogTitle:"this is a titel fo evry",
                    blogDescription:"this is description"
                },{
                    blogImage:"",
                    blogTitle:"this is a titel fo evry",
                    blogDescription:"this is description"
                },{
                    blogImage:"",
                    blogTitle:"this is a titel fo evry",
                    blogDescription:"this is description"
                },{
                    blogImage:"",
                    blogTitle:"this is a titel fo evry",
                    blogDescription:"this is description"
                },{
                    blogImage:"",
                    blogTitle:"this is a titel fo evry",
                    blogDescription:"this is description"
                },
            ]
        }
    }
}
</script>
