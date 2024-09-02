<template>
    <section>
        <div class="container-fluid">
            <div class="hero-section">
          <div class="text-center mb-4 pb-2">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2 col-2"></div>
                      <div class="col shadow" id="main_label_carousel">
                          <h1 class="text-dark">
                              {{ $t('home.partners.text_1')}}
                          </h1>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2 col-2"></div>
                  </div>
              </div>
          </div>
          <hr class="my-5">
          <div class="row flex-column-reverse flex-lg-row">
<div class="col-lg-9 border-right">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-4 mb-4 col-6" v-for="partner in partners" :key="partner.id">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                    <a :href="partner.url" target="_blank">
                        <img :src="partner.image" class="img-fluid centr" alt="">
                    </a>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6 partner-block">
                    <div class="container partner-container">
                        <h6 class="mb-2 text-center partner-text">
                            <a class="partners-static text-wrap" :href="partner.url" target="_blank">{{ partner.name }}</a>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
              <div class="col-lg-3 col-md-12 col-sm-12 col-12 centr border-bottom">
                  <div class="row">
                      <div class="col-lg-12 col-md-6 col-sm-6 col-6">
                            <div class="row mb-4">
                                  <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <a href="https://mvs.gov.ua" target="_blank">
                                          <img src="@/assets/images/home/MVS.png"
                                      class="img-fluid centr" alt="">
                                      </a>
                                  </div>
                                  <div class="col-lg-6 col-md-6 col-sm-6 col-6 main_partners" style="">
                                      <div>
                                          <h4 class="mb-2 text-center">
                                              <a class="partners-static" href="https://mvs.gov.ua/" target="_blank">Міністерство внутрішніх справ України</a>
                                          </h4>
                                      </div>
                                  </div>
                            </div>
                      </div>
                      <div class="col-lg-12 col-md-6 col-sm-6 col-6">
                          <div class="row mb-4">
                              <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                  <a href="https://www.npu.gov.ua/" target="_blank">
                                      <img src="@/assets/images/home/npu.png"
                                  class="img-fluid centr" alt="">
                                  </a>
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-6 col-6 main_partners">
                                  <h4 class="mb-2 text-center">
                                      <a class="partners-static" href="https://www.npu.gov.ua/" target="_blank">Національна поліція України</a>
                                  </h4>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-12 col-md-6 col-sm-6 col-6">
                          <div class="row mb-4">
                              <div class="col-lg-12 col-md-12 col-12">
                                  <a href="https://cyberpolice.gov.ua/" target="_blank">
                                      <img src="@/assets/images/home/cyberpol.jpg"
                                  class="img-fluid centr" alt="">
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-12 col-md-6 col-sm-6 col-6">
                          <div class="row mb-4">
                              <div class="col-sm-6 col-md-6 col-sm-6 col-6">
                                  <a href="https://hochuzhit.com" target="_blank">
                                      <img src="@/assets/images/home/hochuzhit.png"
                                  class="img-fluid centr" height="100px" alt="">
                                  </a>
                              </div>
                              <div class="col-sm-6 col-md-6 col-sm-6 col-6 main_partners">
                                  <h4 class="mb-2 text-center fs-6">
                                      <a class="partners-static" href="https://hochuzhit.com" target="_blank" >Единый центр приема обращений военнослужащих РФ по сдаче в плен "Хочу жить"</a>
                                  </h4>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    name: "HomePartners",
    data(){
        return{
            partners: [],
        }
    },
    created() {
        this.getPartnersItems();
    },
    methods:{
        getPartnersItems(){
            axios.get(`${process.env.VUE_APP_HOST_BACKEND}/api/v1/partners/`)
            .then(response => {
                this.partners = response.data;
            })
            .catch(error => {
              console.error(error);
            });
        },
    },

}
</script>

<style scoped>

@media (max-width: 576px) {
    .partner-text {
        font-size: 0.55rem;
    }
}

    .border-right {
        border-right: 1px solid black;
    }
    .centr {
        margin-left: auto;
        margin-right: auto;
    }
    .partner-block {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: calc(var(--bs-gutter-x) * .1);
        padding-left: calc(var(--bs-gutter-x) * .1);
    }
    .partner-container {
        word-wrap: break-word;
    }
    .partners-static {
        color: black;
        text-decoration: none;

    }
    .hero-section {
        background-repeat: no-repeat;
        background-size: 108% 76%;
        background-position: top;
    }

    .main_partners {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>