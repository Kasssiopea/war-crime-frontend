<template>
  <section>
      <div class="card-content shadow-none p-3 mb-5 bg-light rounded collapse show" id="collapseSearch">
          <form @submit="submitForm">
              <div class="row mb-3">
                  <div class="col"></div>
                  <div class="col-md-4 text-center mb-2">
                    <label for="search_pib"> {{ $t('search.form.title') }} </label>
                    <input
                            type="text"
                            class="form-control text-center"
                            id="search_pib"
                            name="search_pib"
                            :placeholder="$t('search.form.placeholder')"
                            v-model="form.search_pib"
                    >
                  </div>
                  <div class="col"></div>
                  <div class="col-12 text-center mb-2">
                      <button class="btn btn-primary m-1" type="submit">{{ $t('search.form.butt_search') }}</button>
                      <button class="btn btn-primary m-1" @click="clearForm">{{ $t('search.form.butt_clear') }}</button>
                  </div>
              </div>
          </form>
      </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
    name: "SearchForm",
    data() {
      return {
        form: {
          search_pib: '',
        },
        isLoading: false,
        clean: true,
      };
    },
    methods: {
      submitForm(event) {
        event.preventDefault();
        this.$emit('search_pib', this.form.search_pib);
      },
      clearForm() {
          this.form.search_pib = '';
          this.$emit('clean', this.clean);
      }
    }
}
</script>

<style scoped>

</style>