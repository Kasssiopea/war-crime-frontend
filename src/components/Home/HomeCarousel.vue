<template>
  <section class="hero-section p-4">
    <div class="containe-fluid">
        <div class="row">
          <div class="col-lg-10 col-12" style="margin-left: auto;margin-right: auto;">
              <div class="text-center mb-2 pb-2">
                  <div class="container-fluid">
                      <div class="row">
                          <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                          <div class="col shadow" id="main_label_carousel">
                              <h1 class="text-dark">
                                  {{ $t('home.carousel.text_1') }}
                              </h1>
                          </div>
                          <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                      </div>
                  </div>
              </div>
              <Carousel :items-to-show="carouselItemsToShow" :wrap-around="true" :autoplay="2000">
                <Slide v-for="person in persons" :key="person.first_name">
                  <div class="carousel__item item">
                      <img :src=person.image class="owl-carousel-image img-fluid" alt="">
                      <div class="owl-carousel-info">
                        <h5 class="mb-2 text-wrap">
                            {{person.last_name}}
                            {{person.first_name}}
                            {{person.middle_name}}
                        </h5>
                      </div>
                  </div>
                </Slide>
                <template #addons>
                  <Navigation />
                </template>
             </Carousel>
          </div>
    </div>
    </div>

  </section>
</template>

<script>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import axios from "axios";
export default {
    name: "HomeCarousel",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data(){
        return {
            persons: [],
            carouselItemsToShow: 2,
        }
    },
    created() {
      this.getCarouselItems();
    },
    mounted() {
        this.updateCarouselItemsToShow(); // Вызов метода при монтировании компонента
        window.addEventListener('resize', this.updateCarouselItemsToShow); // Слушаем изменение размера окна браузера
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.updateCarouselItemsToShow); // Удаляем слушатель при размонтировании компонента
    },
    methods: {
        updateCarouselItemsToShow() {
        // Обновляем значение items-to-show в зависимости от ширины окна браузера
        if (window.innerWidth < 768) {
          this.carouselItemsToShow = 1;
        } else {
          this.carouselItemsToShow = 3;
        }
      },
        getCarouselItems(){
          // axios.get(`https://demo.poternet.site/api/v1/carouselhomeview/`)
          axios.get(`${process.env.VUE_APP_HOST_BACKEND}/api/v1/carouselhomeview/`)
            .then(response => {
                this.persons = response.data;
            })
            .catch(error => {
              console.error(error);
            });
        },
    },
}

</script>
<style scoped>
  .item{
      height: 500px;
      width: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
  }
  .owl-carousel-info{
    padding: 1rem;
    background-color: white;
    box-shadow: 0 1rem 1rem rgba(0,0,0,.175);
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .owl-carousel-image{
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-sizing: border-box;
  }
</style>