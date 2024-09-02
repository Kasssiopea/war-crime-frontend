<template>
  <section>
    <div class="text-center mb-2 pb-2">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
          <div class="col shadow" id="main_label_carousel">
            <h2 class="text-dark">
              {{ person.last_name }} {{ person.first_name }} {{ person.middle_name }}
            </h2>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
        </div>
      </div>
    </div>

    <div class="container">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="personal_label" data-bs-toggle="tab" href="#personal" role="tab" aria-controls="personal" aria-selected="true">{{ $t('person_card.personal_data')}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="millitary_label" data-bs-toggle="tab" href="#millitary" role="tab" aria-controls="millitary" aria-selected="false">{{ $t('person_card.service')}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="inf_label" data-bs-toggle="tab" href="#inf" role="tab" aria-controls="inf" aria-selected="false">{{ $t('person_card.source')}}</a>
        </li>
      </ul>
      <div class="tab-content mt-4" id="myTabContent">
        <!-- Особисті дані -->
        <div class="tab-pane fade show active" id="personal" role="tabpanel" aria-labelledby="personal_label">
          <div class="tab-pane-content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-4 col-sm-12 mb-2">
                  <img :src="getMainImage(person.images)" class="rounded mx-auto d-block img-fluid" alt="..." >
                </div>
                <div class="col-lg-8 col-sm-12">
                  <div class="card overflow-hidden mb-4">
                    <h5 class="card-header">{{ $t('person_card.info')}}</h5>
                    <div class="card-body ps" id="vertical-example-1">
                      <div class="card-body p-0">
                        <ul class="list-group list-group-flush">

                          <li class="list-group-item" v-if="person.date_of_birthday">
                            {{ $t('person_card.date_of_birthday')}}: {{ person.date_of_birthday }}
                          </li>
                          <li class="list-group-item" v-if="person.citizenship">
                            {{ $t('person_card.citizenship')}}: {{ person.citizenship }}
                          </li>
                          <li class="list-group-item" v-if="person.passport">
                            {{ $t('person_card.passport')}}: {{ person.passport }}
                          </li>
                          <li class="list-group-item" v-if="person.individual_identification_number">
                            {{ $t('person_card.individual_identification_number')}}: {{ person.individual_identification_number }}
                          </li>
                          <li class="list-group-item" v-if="person.place_of_birthday">
                            {{ $t('person_card.place_of_birthday')}}: {{ person.place_of_birthday }}
                          </li>
                          <li class="list-group-item" v-if="person.place_of_living">
                            {{ $t('person_card.place_of_living')}}: {{ person.place_of_living }}
                          </li>
                          <li class="list-group-item" v-if="person.place_where_accident">
                            {{ $t('person_card.place_where_accident')}}: {{ person.place_where_accident }}
                          </li>
                          <li class="list-group-item" v-if="person.date_of_dead">
                            {{ $t('person_card.date_of_dead')}}: {{ person.date_of_dead }}
                          </li>
                          <li class="list-group-item" v-if="person.place_of_rip">
                            {{ $t('person_card.place_of_rip')}}: {{ person.place_of_rip }}
                          </li>
                          <li class="list-group-item" v-if="person.date_of_rip">
                            {{ $t('person_card.date_of_rip')}}: {{ person.date_of_rip }}
                          </li>
                          <li class="list-group-item" v-if="person.additional_info">
                            {{ $t('person_card.additional_info')}}: {{ person.additional_info }}
                          </li>
                        </ul>
                      <div>
                          <Button_report_bug :person_id="getPersonId()"/>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-5">
              <div v-if="person.images">
                <PersonCarousel :images="person.images" />
              </div>
              <div v-else>
                  Loading...
              </div>
          </div>
        </div>

        <!-- Служба -->
        <div class="tab-pane fade" id="millitary" role="tabpanel" aria-labelledby="millitary_label">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-4 col-sm-12 mb-2">
                  <img :src="getMainImage(person.images)" class="rounded mx-auto d-block img-fluid" alt="..." >
              </div>
              <div class="col-lg-8 col-sm-12">
                <div class="card overflow-hidden mb-4">
                  <h5 class="card-header">{{ $t('person_card.info')}}</h5>
                  <div class="card-body ps" id="vertical-example-1">
                    <div class="card-body p-0">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-if="person.type_of_army_choice">
                          {{ $t('person_card.type_of_army')}}: {{ $t('ranks.' +  person.type_of_army_choice) }}
                        </li>
                        <li class="list-group-item" v-if="person.ranks || person.rank_choice">
                          {{ $t('person_card.rank')}}:  {{ $t('ranks.' + person.rank_choice ? 'ranks.' + person.rank_choice :  person.rank ) }}
                        </li>
                        <li class="list-group-item" v-if="person.job_title">
                          {{ $t('person_card.job_title')}}: {{ person.job_title }}
                        </li>
                        <li class="list-group-item" v-if="person.military_unit">
                          {{ $t('person_card.military_unit')}}: {{ person.military_unit }}
                        </li>
                        <li class="list-group-item" v-if="person.military_from">
                          {{ $t('person_card.military_from')}}: {{ person.military_from }}
                        </li>
                      </ul>
                      <div>
                          <Button_report_bug :person_id="getPersonId()"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Джерела -->

        <div class="tab-pane fade" id="inf" role="tabpanel" aria-labelledby="inf_label">
          <div class="card overflow-hidden mb-4">
            <h5 class="card-header">{{ $t('person_card.source')}}</h5>
            <div class="card-body ps" id="vertical-example">
              <div class="card-body p-0">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" v-for="source in person.source">
                    <a :href="source">{{ source }}</a>
                  </li>
                </ul>
              </div>
              <hr class="my-5">
              <div v-if="person.source_image">
                  <SourceCarousel :slides="getSourceImage(person.source_image)" />
                </div>
              <div v-else>
                  Loading...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SourceCarousel from '@/components/Person/SourceCarousel';
import PersonCarousel from '@/components/Person/PersonCarousel';
import Button_report_bug from '@/components/Person/Button_report_bug';
import axios from "axios";

export default {
  name: "PersonDetailsView",
  components: {
    PersonCarousel,
    Button_report_bug,
    SourceCarousel,
  },
  mounted() {
    this.getPersonData();

  },
  data() {
    return {
      person: [],
      isLoading: true
    }
  },
  methods: {
      getPersonData() {
      const id = this.$route.params.id;
      const apiUrl = process.env.VUE_APP_HOST_BACKEND;
      axios.get(`${apiUrl}/api/v1/persons/${id}/`)
        .then(response => {
          console.log(response)
          this.person = response.data.person[0];
        })
        .catch(error => {
          console.error(error);
        });
    },
      getMainImage(images){
        if (images){
          for (let image of images) {
              if (image.main_image) {
                  return image.image
              }
          }
          return images[0].image
        }
        return 'https://svgsilh.com/svg/1299938.svg'
      },
      getSourceImage(image_source){
        if (image_source){
            let images = []
            for (let image of image_source){
                images.push(image.image)
            }
            return images
        }
        return 'https://svgsilh.com/svg/1299938.svg'
      },
      redirectToAnotherPage() {
        this.$router.push('/login');
      },
      getPersonId(){
          return this.$route.params.id
      }
  },
    computed:{
      isLoggedIn() {
          return this.$store.state.isLoggedIn;
      },
    }

};
</script>

<style scoped>
.open-modal-btn {
  background-color: #0056b3;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}
</style>
