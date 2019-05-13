<script>
import VueCharts from 'vue-chartjs'
import { Bar, Line, mixins } from 'vue-chartjs'

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    console.log('check', this.chartData)
    this.renderChart(this.chartData, this.options)
  }
  // mounted() {
  //   // Overwriting base render method with actual data.
  //   this.renderChart({
  //     labels: [
  //       'January',
  //       'February',
  //       'March',
  //       'April',
  //       'May',
  //       'June',
  //       'July',
  //       'August',
  //       'September',
  //       'October',
  //       'November',
  //       'December'
  //     ],
  //     datasets: [
  //       {
  //         label: 'GitHub Commits',
  //         backgroundColor: '#f87979',
  //         data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
  //       }
  //     ]
  //   })
  // },
  // props: ['chartdata', 'options'],
  // computed: {
  //   getJMTZs() {
  //     return this.$store.getJMTZs
  //   }
  // }
}
</script>
