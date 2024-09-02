<template>
  <canvas :id="pie_id"></canvas>
</template>

<script>
export default {
    name: "StatisticPie",
    props: {
        dataPie: {
            type: Object,
            required: true,
        },
        pie_id: {
            type: String,
            required: true
        },
        pie_title:{
            type: String,
            required: true
        },
    },
    mounted() {
        this.create_chart_pie();
    },
    methods: {
        create_chart_pie(){
            let response = this.chartConvertor();
            var xValues = response[0];
            var yValues = response[1];
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
            new Chart(this.pie_id, {
              type: "pie",
              data: {
                labels: xValues,
                datasets: [{
                  backgroundColor: barColors,
                  data: yValues
                }]
              },
              options: {
                 labels: {
                    fontSize: 12,
                    boxWidth: 10
                },
                legend: {
                    display: true,
                    position: "bottom"
                },
                title: {
                  display: true,
                  text: this.pie_title
                },
                responsive: true, // Разрешить адаптивность графика
                maintainAspectRatio: false, // Отключить сохранение пропорций для адаптивности
              }
            });
        },
        chartConvertor(){
            let response = this.dataPie
            var k= []
            var v = []
            for (const i in response) {
                let translatedKey = this.$t(`ranks.${i}`);
                k.push(translatedKey);
                v.push(response[i]);
            }
            return [k, v]
        }
    },
}
</script>

<style scoped>

</style>