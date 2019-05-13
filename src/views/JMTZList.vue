<template>
  <div>
    <h1>Load Items</h1>
    <p>{{ getJMTZsToFilter }}</p>
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
export default {
  data() {
    return {
      newJMTZ: []
    }
  },
  created() {
    console.log('Created!!')
  },
  beforeRouteUpdate() {
    console.log('beforeRouteUpdate', this.getJMTZs)
  },
  props: {
    getJMTZs: {
      type: Object,
      required: true,
      default: function() {
        return {}
      }
    }
  },
  computed: {
    getJMTZsToFilter() {
      let newArray = []
      Object.keys(this.getJMTZs).forEach(prop => {
        newArray.push(this.getJMTZs[prop].category)
      })
      return newArray
    }
  }
}
</script>
