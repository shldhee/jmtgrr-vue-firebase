<template>
  <div class="list">
    <JMTZ :allJmtz="allArray" />
  </div>
</template>

<script>
import JMTZ from './JMTZ.vue'
export default {
  components: {
    JMTZ
  },
  props: {
    getAllJMTZs: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  computed: {
    allArray() {
      let allArr = []
      for (var key in this.getAllJMTZs) {
        for (var childKey in this.getAllJMTZs[key]) {
          if (this.getAllJMTZs[key][childKey].isOpen) {
            allArr.push(this.getAllJMTZs[key][childKey])
          }
        }
      }

      return allArr.sort((a, b) => b.date - a.date)
    }
  },
  methods: {
    sliceEmail(email) {
      let newEmail =
        email.slice(0, 2) +
        email
          .slice(2)
          .split('')
          .map(() => '*')
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
