<template>
  <section class="hero-section p-4">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-10 col-12" style="margin-left: auto; margin-right: auto;">
          <div class="text-center mb-2 pb-2">
            <div class="container-fluid">
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
              </div>
            </div>
          </div>
          <div>
            <div v-if="images.length >= 3">
              <carousel :items-to-show="carouselItemsToShow" :wrap-around="true" :autoplay="2000">
                <slide v-for="(image, index) in images" :key="index">
                  <div class="carousel__item item">
                    <div class="carousel__item-inner" :class="{ 'large-height': isLargeHeight }">
                      <img
                        :src="image.image"
                        class="owl-carousel-image img-fluid carousel-img"
                        alt=""
                        @click="openModal(image)"
                      />
                    </div>
                  </div>
                </slide>
                <template #addons>
                  <navigation />
                </template>
              </carousel>
            </div>
            <div v-else class="static-images">
              <div class="static-image" :class="{ 'large-height': isLargeHeight }" v-for="(image, index) in images" :key="index">
                <img
                  :src="image.image"
                  class="static-image__img img-fluid carousel-img"
                  alt=""
                  @click="openModal(image)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isOpenModal" class="modal" @click="closeModalOutside">
      <div class="modal-content" @click.stop @mousemove="updatePosition">
        <span class="close" @click="closeModal">&times;</span>
        <img :src="selectedPerson.image"
            alt="Slide Image"
            :class="{ zoomed: isZoomed, modal_image: !isZoomed }"
            :style="`transform-origin: ${posX}% ${posY}%`"
            @click="toggleZoom">
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
  name: "HomeCarousel",
  components: {
    Carousel,
    Slide,
    Navigation,
  },

  data() {
    return {
      isOpenModal: false,
      selectedPerson: null,
      carouselItemsToShow: 2,
      isZoomed: false,
      posX: 0,
      posY: 0,
    };
  },

  props: {
    images: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    this.updateCarouselItemsToShow();
    window.addEventListener('resize', this.updateCarouselItemsToShow);
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.updateCarouselItemsToShow);
  },

  methods: {
    openModal(person) {
      this.selectedPerson = { ...person };
      this.isOpenModal = true;
      this.isZoomed = false;
      document.body.classList.add('modal-open');
    },
    closeModal() {
      this.isOpenModal = false;
      this.selectedPerson = null;
      this.isZoomed = false;
      document.body.classList.remove('modal-open');
    },
    updateCarouselItemsToShow() {
      if (this.images.length <= 3) {
        if (window.innerWidth < 900) {
          this.carouselItemsToShow = 1;
        } else {
          this.carouselItemsToShow = 3;
        }
      } else {
        if (window.innerWidth < 900) {
            this.carouselItemsToShow = 1;
        }
        else {
            this.carouselItemsToShow = 3;
        }

      }
    },
    toggleZoom() {
      this.isZoomed = !this.isZoomed;
    },
    closeModalOutside(event) {
      if (!event.target.closest('.modal-content')) {
        this.closeModal();
      }
    },
    updatePosition(event) {
      if (this.isZoomed) {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        this.posX = x / rect.width * 100; // Преобразуйте позицию в проценты, если требуется
        this.posY = y / rect.height * 100; // Преобразуйте позицию в проценты, если требуется
      }
  },
  },
};
</script>

<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;

  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-section {
  background-color: #f8f8f8;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.item {
  height: 100%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}

.static-images {
  display: flex;
  justify-content: center;
  align-items: center;
}

.static-image {
  margin: 1rem;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
.modal-content {
  position: relative;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  overflow: hidden;
  border: none;
  box-shadow: none;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}
.modal_image {
  max-width: 600px;
  max-height: 600px;
  object-fit: contain;
  cursor: zoom-in;
}

.zoomed {
    transform: scale(1.8);
    max-width: 600px;
    max-height: 600px;
    cursor: zoom-out;
}

.large-height {
  max-height: 70vh;
}

.carousel-img{
    height: 400px;
    width: 400px;
    object-fit: cover;
    box-sizing: border-box;
}
</style>
