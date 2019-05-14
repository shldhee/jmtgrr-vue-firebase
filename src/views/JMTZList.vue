<template>
  <div>
    <h1>Load Items</h1>
    <ChartDonut
      :chartData="dataChart"
      :options="optionChart"
      :styles="chartStyle"
    />
    <table>
      <colgroup>
        <col style="width:" />
        <col style="width:" />
        <col style="width:" />
        <col style="width:" />
        <col style="width:" />
        <col style="width:" />
        <col style="width:" />
      </colgroup>
      <thead>
        <tr>
          <th>category</th>
          <th>name</th>
          <th>menu</th>
          <th>price</th>
          <th>location</th>
          <th>memo</th>
          <th>like</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="JMTZ in getJMTZs" :key="JMTZ.user">
          <td>{{ JMTZ.category }}</td>
          <td>{{ JMTZ.name }}</td>
          <td>{{ JMTZ.menu }}</td>
          <td>{{ JMTZ.price }}</td>
          <td>{{ JMTZ.location }}</td>
          <td>{{ JMTZ.memo }}</td>
          <td>{{ JMTZ.like }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ChartDonut from '@/components/ChartDonut'
export default {
  data() {
    return {
      chartStyle: {
        width: '100vw',
        height: '400px',
        position: 'relative'
      }
    }
  },
  components: {
    ChartDonut
  },
  computed: {
    dataChart() {
      let dataLabels = []
      let dataNumbers = []
      let dataObject = {}
      let nameArray = []
      let objToCalc = {}

      Object.keys(this.getJMTZs).forEach(prop => {
        nameArray.push(this.getJMTZs[prop].category)
      })

      nameArray.forEach(value => {
        if (!objToCalc[value]) {
          objToCalc[value] = 1
        } else {
          objToCalc[value] += 1
        }
      })

      dataLabels = Object.keys(objToCalc)
      dataNumbers = Object.values(objToCalc)

      dataObject = {
        labels: dataLabels,
        datasets: [
          {
            data: dataNumbers,
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ]
          }
        ]
      }

      return dataObject
    },
    optionChart() {
      return {
        title: {
          display: true,
          text: '카테고리 통계'
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  props: {
    getJMTZs: {
      type: Object,
      required: true,
      default: function() {
        return {}
      }
    }
  }
}
</script>
