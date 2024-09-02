<template>
    <section>
      <div class="text-center mb-4 pb-2 mt-4">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                  <div class="col shadow" id="main_label_carousel">
                      <h1 class="text-dark">
                          {{ $t('news.news_title') }}
                      </h1>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
              </div>
          </div>
      </div>
      <div class="container-fluid">
          <div class="row flex-column-reverse flex-lg-row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="row mb-4">
                      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                      <div class="col shadow">
                          <h1 class="text-dark text-center">
                              {{ $t('news.general_news') }}
                          </h1>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                  </div>
                  <div v-if="isLoading">
                     <div class="d-flex justify-content-center">
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                    </div>
                  </div>
                  <div v-else>
                      <NewsItemsRss items_counter="50"/>
                  </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="row mb-4">
                        <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                        <div class="col shadow" id="main_label_carousel">
                            <h1 class="text-dark text-center">
                                {{ $t('news.important_news') }}
                            </h1>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                    </div>
                    <div v-if="isLoading">
                      <div class="d-flex justify-content-center">
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                      </div>
                    </div>
                  <div v-else>
                      <NewsItems :news="news"/>
                  </div>
              </div>
          </div>
      </div>
    </section>
</template>

<script>
import NewsItemsRss from "@/components/UI/NewsItemsRss.vue";
import NewsItems from "@/components/UI/NewsItems.vue";
import {getTitleTranslation} from "@/i18n";
import axios from "axios";

export default {
    name: "NewsView.vue",
    components: {NewsItems, NewsItemsRss},
    data(){
        return{
            news: [],
            isLoading: false,
        }
    },
    mounted() {
      document.title = getTitleTranslation('base.navbar.news');
      this.getNewsItems();
    },
    methods:{
        getNewsItems(){
            this.isLoading = true;
            axios.get(`${process.env.VUE_APP_HOST_BACKEND}/api/v1/important_news/`)
            .then(response => {
                this.news = response.data;
                this.isLoading = false;
            })
            .catch(error => {
              console.error(error);
              this.isLoading = false;
            });
        },
    }
}
</script>

<style scoped>

</style>