<template>
  <div>
    <div class="list" v-for="list in allList" :key="list.id">
      <div class="list_header">
        <span>{{ list.email }}</span>
        <span>{{ convertDate(list.date) }}</span>
      </div>

      <div
        class="list_image-wrap"
        style="width: 400px;"
        v-lazy-container="{
          selector: 'img'
        }"
      >
        <img src="@/assets/logo.png" alt="" />
        <img
          class="list_image"
          :data-src="list.imageUrl"
          data-loading="@/assets/logo.png"
          alt=""
          style="width: 100%"
        />
      </div>

      <div class="list_group">
        <span>#{{ list.category }}</span>
        <span>#{{ list.name }}</span>
        <span>#{{ list.menu }}</span>
        <span>#{{ list.price }}원</span>
        <span>#{{ list.location }}</span>
      </div>

      <div class="list_group">
        <span>{{ list.like }}</span>
      </div>
      <div class="list_group">
        <span>{{ list.memo }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['allJmtz'],
  data() {
    return {
      allList: this.allJmtz
    }
  },
  methods: {
    convertDate(date) {
      return this.$moment(date).format('YYYYMMDD')
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin: 20px auto;
  width: 400px;
  text-align: left;

  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 1.2rem;
    }

    span:first-child {
      font-weight: bold;
      font-size: 1.4rem;
    }
    margin-bottom: 5px;
  }

  &_image {
    width: 100%;
    vertical-align: top;
  }

  &_image-wrap {
    width: 400px;
  }

  &_group {
    span {
      padding-right: 5px;
    }
  }
}
</style>
