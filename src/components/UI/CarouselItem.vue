<template>

</template>

<script>
export default {
    name: "CarouselItem",
    data(){
        return {
          person: [
              {last_name: 'last_name-1', first_name: 'first_name-1', middle_name: 'middle_name-1'},
              {last_name: 'last_name-2', first_name: 'first_name-2', middle_name: 'middle_name-2'},
              {last_name: 'last_name-3', first_name: 'first_name-3', middle_name: 'middle_name-3'},
              {last_name: 'last_name-4', first_name: 'first_name-4', middle_name: 'middle_name-4'},
              {last_name: 'last_name-5', first_name: 'first_name-5', middle_name: 'middle_name-5'},
              {last_name: 'last_name-6', first_name: 'first_name-6', middle_name: 'middle_name-6'},
          ]
        }
    }
}
</script>

<style scoped>
  .person-carousel {
      height: 500px
  }
  .person-carousel image{
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
</style>