<template>
  <div>
    <h1>Load Items</h1>
    <p>{{ dataChart }}</p>
    <ChartDonut :chartData="dataChart" :options="chartOptions" />
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
  components: {
    ChartDonut
  },
  computed: {
    dataChart() {
      let dataObject = {
        labels: [],
        datasets: []
      }
      let newArray = []
      Object.keys(this.getJMTZs).forEach(prop => {
        newArray.push(this.getJMTZs[prop].category)
      })

      dataObject.labels = newArray
      return dataObject
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

// data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
</script>
