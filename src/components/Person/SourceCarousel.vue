<template>
  <div id="slider">
    <transition-group tag="div" :name="transitionName" class="slides-group">
      <div v-if="show" :key="current" class="slide" @click="openModal">
        <img :src="slides[current]" alt="Slide Image">
      </div>
    </transition-group>
    <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
      &#10094;
    </div>
    <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
      &#10095;
    </div>

    <div v-if="modalOpen" class="modal" @click="closeModalOutside">
      <div class="modal-content" @click.stop @mousemove="updatePosition">
        <span class="close" @click="closeModal">&times;</span>
        <img :src="slides[current]"
            alt="Slide Image"
            :class="{ zoomed: isZoomed, modal_image: !isZoomed }"
            :style="`transform-origin: ${posX}% ${posY}%`"
            @click="toggleZoom">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: false,
      modalOpen: false,
      isZoomed: false,
      posX: 0,
      posY: 0,
    };
  },
  methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + dir % len + len) % len;
    },
    toggleZoom() {
      this.isZoomed = !this.isZoomed;
    },
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
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
  mounted() {
    this.show = true;
  },
};
</script>

<style scoped>
#slider {
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
}

.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  z-index: 10;
  cursor: pointer;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: 50%;
  transform: translateY(-10%);
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}

.slide img {
  max-width: 500px;
  max-height: 500px;
  object-fit: contain;
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

</style>
