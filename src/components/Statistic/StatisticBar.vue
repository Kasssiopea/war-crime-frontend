<template>
  <canvas :id="bar_id"></canvas>
</template>

<script>
export default {
    name: "StatisticBar",
    props: {
        dataBar: {
            type: Object,
            required: true,
        },
        bar_id: {
            type: String,
            required: true
        },
        bar_title:{
            type: String,
            required: true
        },
        bar_reverse:{
            type: Boolean,
            required: true
        }
    },
     mounted(dataBar) {
        this.create_chart_bar();
    },
    methods:{
        create_chart_bar(){
            let response = this.chartConvertor();
            var barColors = [
                '#FF0000',  // Красный
                '#00FF00',  // Зеленый
                '#0000FF',  // Синий
                '#FFFF00',  // Желтый
                '#FF00FF',  // Розовый
                '#00FFFF',  // Голубой
                '#FFA500',  // Оранжевый
                '#800080',  // Фиолетовый
                '#FFC0CB',  // Розовато-лавандовый
                '#008000',  // Темно-зеленый
                '#000080',  // Темно-синий
                '#800000',  // Темно-красный
                '#008080',  // Темно-голубой
                '#808000',  // Оливковый
                '#800000',  // Темно-красный
                '#FF4500',  // Оранжево-красный
                '#00FF7F',  // Светло-зеленый
                '#9400D3',  // Темно-фиолетовый
                '#FF1493',  // Темно-розовый
                '#00BFFF',  // Светло-синий
                '#DC143C',  // Карминно-красный
                '#7CFC00',  // Зеленовато-желтый
                '#ADD8E6',  // Светло-голубой
                '#FF69B4',  // Розовый
                '#00FA9A',  // Морская волна
                '#8A2BE2',  // Фиолетовый
                '#FFD700',  // Золотой
                '#00CED1',  // Темно-бирюзовый
                '#FF6347'   // Темно-оранжевый
            ];
            if (this.bar_reverse){
                var xValues = response[0];
                var yValues = response[1];
            }
            else{
                var xValues = response[0].reverse();
                var yValues = response[1].reverse();
            }

            new Chart(this.bar_id, {
              type: "bar",
              data: {
                labels: xValues,
                datasets: [{
                  backgroundColor: barColors,
                  data: yValues
                }]
              },
              options: {
                legend: {display: false},
                title: {
                  display: true,
                  text: this.bar_title
                },
              }
            });
        },
        chartConvertor(){
          let response = this.dataBar
          var k= []
          var v = []
          for (const i in response) {
              let translatedKey = this.$t(`ranks.${i}`);
              k.push(translatedKey);
              v.push(response[i]);
          }
          return [k, v]
    }
    }
}
</script>

<style scoped>

</style>