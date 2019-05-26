<template>
  <div class="list">
    <h1>존맛탱집 전체 리스트</h1>
    <table class="table">
      <colgroup>
        <col style="width:" />
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
          <th class="table_title">작성자</th>
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
        <tr v-for="JMTZ in allArray" :key="JMTZ.user">
          <td class="table_desc">{{ sliceEmail(JMTZ.email) }}</td>
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
export default {
  // data() {
  //   return {
  //     getAllJMTZs: this.$store.state.getAllJMTZs
  //   }
  // },
  props: {
    getAllJMTZs: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  components: {},
  computed: {
    allArray() {
      let allArr = []
      for (var key in this.getAllJMTZs) {
        for (var childKey in this.getAllJMTZs[key]) {
          allArr.push(this.getAllJMTZs[key][childKey])
        }
      }
      return allArr
    }
  },
  methods: {
    sliceEmail(email) {
      let newEmail =
        email.slice(0, 2) +
        email
          .slice(2)
          .split('')
          .map(_ => '*')
          .join('')
      return newEmail
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
