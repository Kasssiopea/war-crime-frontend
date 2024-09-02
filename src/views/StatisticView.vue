<template>
  <div class="container-fluid">
        <div class="text-center mb-4 pb-2 mt-4">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                    <div class="col shadow">
                        <h1 class="text-dark">
                            {{ $t('base.navbar.statistic') }}
                        </h1>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                <div class="col">
                    <div class=" text-center" role="alert">
                      <p style="font-weight: bold">
                          {{ $t('statistic.description')}}
                      </p>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-md-12 col-lg-6">
                <div class="chart-container bar-color-border" >
                    <div v-if="isLoading">
                      <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                    <div v-else :key="$i18n.locale + '-RankChartArmyChart'" class="block-height" >
                      <StatisticPie :pie_title="$t('statistic.military_rank')" pie_id="RankChartArmyChart" :data-pie=response.ranks[0] />
                    </div>
                </div>
            </div>
             <div class="col-md-12 col-lg-6">
                <div class="chart-container bar-color-border">
                    <div v-if="isLoading">
                        <div class="d-flex justify-content-center">
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </div>
                    </div>
                    <div v-else :key="$i18n.locale + '-RankChartFleetChart'" class="block-height">
                        <StatisticPie :pie_title="$t('statistic.military_rank_sea')" pie_id="RankChartFleetChart" :data-pie="response.ranks[1]" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-md-12 col-lg-3"></div>
            <div class="col-md-12 col-lg-6">
                <div class="chart-container bar-color-border" >
                    <div v-if="isLoading">
                        <div class="d-flex justify-content-center">
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </div>
                    </div>
                    <div v-else :key="$i18n.locale + '-TypeOfArmyChart'" class="block-height">
                        <StatisticPie :pie_title="$t('statistic.military_base')" pie_id="TypeOfArmyChart" :data-pie="response.type_of_army" />
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-lg-3"></div>
        </div>
        <div class="row mb-2">
            <div class="col-md-12 col-lg-6">
                 <div class="chart-container bar-color-border">
                     <div v-if="isLoading">
                       <div class="d-flex justify-content-center">
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </div>
                    </div>
                    <div v-else :key="$i18n.locale + '-BirthChart'" >
                        <StatisticBar :bar_title="$t('statistic.date')" bar_id="BirthChart" :data-bar=response.birth :bar_reverse=false />
                    </div>
                 </div>
            </div>
            <div class="col-md-12 col-lg-6">
                 <div class="chart-container bar-color-border" >
                    <div v-if="isLoading">
                       <div class="d-flex justify-content-center">
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </div>
                    </div>
                    <div v-else :key="$i18n.locale + '-DeathChart'">
                          <StatisticBar :bar_title="$t('statistic.date_death')" bar_id="DeathChart" :data-bar=response.death :bar_reverse=false />
                    </div>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
import StatisticPie from "@/components/Statistic/StatisticPie.vue";
import StatisticBar from "@/components/Statistic/StatisticBar.vue";
import {getTitleTranslation} from "@/i18n";
import axios from "axios";

export default {
    name: "StatisticView",
    components: {StatisticBar, StatisticPie},
    data(){
      return {
        response: {
            ranks: [],
            type_of_army: {},
            birth: {},
            death:{},
        },
        isLoading: true
      }
    },
    mounted() {
        document.title = getTitleTranslation('base.navbar.statistic');
        this.getChartsItems();
    },
    methods:{
       getChartsItems(){
           const apiUrl = process.env.VUE_APP_HOST_BACKEND;
            axios.get(`${apiUrl}/api/v1/chart_js_statistic/`)
            .then(response => {
                this.response.ranks = response.data.ranks;
                this.response.death = response.data.death;
                this.response.birth = response.data.birth;
                this.response.type_of_army = response.data.type_of_army;
                this.isLoading = false;
            })
            .catch(error => {
              console.error(error);
            });
        },
    },
}
</script>

<style scoped>
  .bar-color-border{
      border: thick double #32a1ce;
  }
  .block-height {
    height: 700px;
  }

</style>
