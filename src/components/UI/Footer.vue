<template>

  <footer id="footer" class="text-white text-center text-lg-start">
    <!-- Grid container -->
    <div class="container-fluid p-4">
      <!--Grid row-->
      <div class="row justify-content-center mb-3">
        {{ $t('base.header_test') }}
      </div>
      <div class="row justify-content-center">
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h2>
            <img src="@/assets/images/logo/Icon-removebg-preview.png" class="d-inline-block">
            <span style="color: white; font-family: 'Roboto Slab', serif;">Потерь.НЕТ</span>
          </h2>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0 text-center">
          <h5 class="text-uppercase text-white">{{ $t('base.footer.about_us_title') }}</h5>
          <p>
            {{ $t('base.footer.about_us_text') }}
          </p>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-white text-center">{{ $t('base.footer.contacts') }}</h5>
          <div class="container">
            <a href="https://t.me/poter_nety_bot" target="_blank" style="color: #ffffff; text-decoration: none; ">
              <i class="fa-brands fa-telegram fa-xl" style="color: #ffffff;"></i> Telegram Bot (@poter_nety_bot)
            </a>
            <hr>
            <a href="https://t.me/PoterNetChannel" target="_blank" style="color: #ffffff; text-decoration: none;">
              <i class="fa-brands fa-telegram fa-xl" style="color: #ffffff;"></i> Telegram Channel
            </a>
            <hr>
            <a href="https://twitter.com/PoterNet_site" target="_blank" style="color: #ffffff; text-decoration: none;">
              <i class="fa-brands fa-twitter fa-xl" style="color: #ffffff;"></i> Twitter
            </a>
            <hr>

            <p class="text-white font-weight-bold">
              <i class="fa-regular fa-envelope fa-xl" style="color: #ffffff;"></i> Nodeadnoloss@gmail.com
            </p>
          </div>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
    <!-- Grid container -->
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      Потерь.НЕТ © 2023
    </div>
    <!-- Copyright -->
  </footer>

</template>

<style>
  #footer {
    background-color: #383285;
    flex-shrink: 0;
    width: 100%;
  }
</style>

<script>
export default {
    computed: {
    isAdminRoute() {
      return this.$route.path.startsWith('/admin');
    }
  }
};
</script>