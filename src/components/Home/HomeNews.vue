<template>
  <section>
    <div class="container-fluid">
      <div class="row">
          <div class="container-fluid">
            <div class="text-center mb-4 pb-2">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                  <div class="col shadow">
                    <h1 class="text-dark">{{ $t('home.news.text_1')}}</h1>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-12 col-12">
                <NewsItems items_counter="4"/>
            </div>
            <div class="col-lg-6 col-md-12 news-image">
              <img :src="news.image" class="news-img mx-auto d-block" alt="">
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsItems from "@/components/UI/NewsItemsRss.vue";
import axios from "axios";
export default {
    name: "HomeNews",
    components: {NewsItems},
    data() {
        return {
            news: {},
        }
    },
    created() {
        this.getDailyNewsItems();
    },
    methods:{
        getDailyNewsItems(){
            axios.get(`${process.env.VUE_APP_HOST_BACKEND}/api/v1/daily_news/`)
            .then(response => {
                this.news = response.data;
            })
            .catch(error => {
              console.error(error);
            });
        },
    },

}
</script>

<style scoped>
    .news-img{
        width: 80%;
        height: 917px;
    }
    .news-image{
        margin-left: auto;
        margin-right: auto;
    }
</style>