<template>
    <section class="main_view">
        <div class="container-fluid">
            <div class="row" id="text_viev">
                <div class="col-md-1 col-sm-12"></div>
                <div class="col-md-10 col-sm-12">
                    <div class="px-4 py-5 my-5 text-center">
                        <h3 class="fw-bold mb-4">
                            {{ $t('home.counter.text_1') }}
                        </h3>
                        <h1 class="display-1 mb-4 fw-bold text-danger">72012</h1>
                        <h3 class="mb-2 fw-bold">
                            {{ $t('home.counter.text_2') }}
                        </h3>
                        <h3 class="mb-2 fw-bold">
                            {{ $t('home.counter.text_3') }}
                        </h3>
                    </div>
                </div>
                <div class="col-md-1 col-sm-12"></div>
            </div>
        </div>
    </section>
</template>

<script>
import { getTitleTranslation } from '@/i18n';
export default {
    name: "HomeCounter",
    data(){
        return {
            person_counter: '61305',
        }
    }
}

</script>

<style scoped>
    .main_view {
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("/src/assets/images/home/white-abstract-simple-uptrend-financial-chart-background_755228-1221.png");
    }
</style>
