<template>
  <HomeCounter/>
  <HomeCarousel/>
  <hr class="my-5">
  <HomePartners/>
  <hr class="my-5">
  <HomeNews/>
</template>

<script>
// @ is an alias to /src
import HomeCounter from '@/components/Home/HomeCounter.vue'
import HomeCarousel from "@/components/Home/HomeCarousel.vue";
import HomePartners from "@/components/Home/HomePartners.vue";
import HomeNews from "@/components/Home/HomeNews.vue";
import {getTitleTranslation} from "@/i18n";

export default {
  name: 'HomeView',
  components: {
      HomeNews,
      HomePartners,
      HomeCarousel,
      HomeCounter,
  },
  created() {
    document.title = getTitleTranslation('home.title');
  },
}
</script>
