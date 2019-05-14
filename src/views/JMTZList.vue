<template>
  <div class="list">
    <h1>존맛탱집 리스트</h1>
    <ChartDonut
      :chartData="dataChart"
      :options="optionChart"
      :styles="chartStyle"
    />
    <table class="table">
      <colgroup>
        <col style="width: 12%" />
        <col style="width:" />
        <col style="width: 12%" />
        <col style="width: 12%" />
        <col style="width: 12%" />
        <col style="width:" />
        <col style="width: 15%" />
      </colgroup>
      <thead>
        <tr>
          <th class="table_title">종류</th>
          <th class="table_title">가게</th>
          <th class="table_title">메뉴</th>
          <th class="table_title">가격</th>
          <th class="table_title">위치</th>
          <th class="table_title">메모</th>
          <th class="table_title">추천/비추천</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="JMTZ in getJMTZs" :key="JMTZ.user">
          <td class="table_desc">{{ JMTZ.category }}</td>
          <td class="table_desc">{{ JMTZ.name }}</td>
          <td class="table_desc">{{ JMTZ.menu }}</td>
          <td class="table_desc">{{ JMTZ.price }}</td>
          <td class="table_desc">{{ JMTZ.location }}</td>
          <td class="table_desc">{{ JMTZ.memo }}</td>
          <td class="table_desc">{{ JMTZ.like }}</td>
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
        height: '400px',
        margin: '2rem 0',
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
          text: '좋아하는 음식 종류 통계'
        },
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 50
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
<style lang="scss" scoped>
.list {
  box-sizing: border-box;
  width: 100%;
  padding: 0rem 1rem 3rem;
  text-align: center;
}
.table {
  background-color: #f5f5f5;
  border-radius: 1rem;
  overflow: hidden;
  width: 100%;
  border-collapse: collapse;
  &_title {
    padding: 2rem 1.5rem;
    text-align: center;
    background-color: #6d7ae0;
    color: #fff;
    font-weight: normal;
  }

  &_desc {
    padding: 1rem 1.5rem;
    text-align: center;
    color: #999999;
  }
}
</style>
