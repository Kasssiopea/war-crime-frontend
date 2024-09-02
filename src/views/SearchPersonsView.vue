<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <h2 class="text-center mt-2">
                    {{$t('search.form.title')}}
                </h2>

                <div class="card-title pl-0 pr-0 shadow-none text-center" id="searcher">
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseSearch" role="button" aria-expanded="true" aria-controls="collapseSearch">
                        {{ $t('search.titles.title_filter')}}
                        <i class="fa-solid fa-magnifying-glass fa-lg" style="color: white"></i>
                    </a>
                </div>
                <SearchForm @search_pib="handleDataSearch" @clean="handleDataClean"/>
                <hr class="my-5">
                <div v-if="isLoading">
                    <div class="d-flex justify-content-center">
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <PersonCards :persons="persons"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { getTitleTranslation } from '@/i18n';
import SearchForm from "@/components/Search/SearchForm.vue";
import PersonCards from "@/components/UI/PersonCards.vue";
import axios from "axios";
export default {
    name: "SearchPersonsView",
    components: {PersonCards, SearchForm},
    created() {
        document.title = getTitleTranslation('base.navbar.search_people');
    },
    mounted() {
        this.get_persons();
    },
    data() {
        return{
            persons: [],
            search_pib: '',
            isLoading: true,
            clean: false,
        }
    },
    methods:{
        get_persons(){
            this.isLoading = true;
            const apiUrl = process.env.VUE_APP_HOST_BACKEND;
            axios.get(`${apiUrl}/api/v1/person_search/`).then(response => {
                console.log(response)
                this.persons = response.data.persons;
                this.isLoading = false;
            })
            .catch(error => {
                  console.error(error);
                  this.isLoading = false;
            });
        },
        handleDataSearch(data) {
            if (data){
                this.isLoading = true;
                this.search_pib = data; // Получаем данные от дочернего компонента
                data = {'search_pib': this.search_pib};
                    const apiUrl = process.env.VUE_APP_HOST_BACKEND;
                    axios.post(`${apiUrl}/api/v1/person_search/`, data).then(response => {
                        this.persons = response.data.persons;
                        this.isLoading = false;
                    })
                    .catch(error => {
                          console.error(error);
                          this.isLoading = true;
                    });
            }
        },
        handleDataClean(data) {
            this.get_persons();
        },

    },
}
</script>

<style scoped>

</style>
