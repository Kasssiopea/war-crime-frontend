<template>
    <div class="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 mb-5 pb-4 pt-2" v-for="person in persons" :key="person.id">
      <div class="card h-100" style="position: relative">
          <div class="row">
              <div class="col-12">
                  <div class="container" style="height: 300px;">
                      <router-link :to="'/person/' + person.pk">
                        <a :href="'/person/' + person.pk">
                          <img class="card-img-top d-block card-img-style" :src="person.image" alt="Card image cap" href="#">
                        </a>
                      </router-link>
                  </div>
               </div>
              <div class="col-12">
                  <div class="card-body p-0">
                       <router-link :to="'/person/' + person.pk">
                           <h6 class="card-title text-center">
                          {{ person.last_name }} {{ person.first_name }} {{ person.middle_name }}
                        </h6>
                       </router-link>
                    <ul class="list-group list-group-flush text-center">
                        <li class="list-group-item">
                            <strong>{{ $t('person.birthday') }}</strong>
                            <br>
                            <p v-if="person.date_of_birthday">{{ person.date_of_birthday }}</p>
                            <p v-else>{{ $t('person.clarified') }}</p>
                        </li>
                        <li class="list-group-item"> <strong>{{ $t('person.unit') }}</strong>
                            <br>
                            <p v-if="person.military_unit">{{ person.military_unit }}</p>
                            <p v-else>{{ $t('person.clarified') }}</p>
                        </li>
                    </ul>
                 </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "PersonCards",
    props: {
        persons: {
            type: Array,
            required: true
        },
    }
}
</script>

<style scoped>
  .card-img-style{
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-sizing: border-box;
  }
</style>