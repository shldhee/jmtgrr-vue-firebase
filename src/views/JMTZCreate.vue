<template>
  <form @submit.prevent="create">
    <BaseSelect
      label="category"
      title="종류"
      v-model="JMTZObject.category"
      :categories="categories"
      class="group"
    />

    <BaseInput
      label="name"
      title="가게 이름"
      v-model="JMTZObject.name"
      placeholder="가게 이름을 입력하세요"
      type="text"
      class="group"
    />

    <BaseInput
      label="menu"
      title="메뉴 이름"
      v-model="JMTZObject.menu"
      placeholder="메뉴 이름을 입력하세요"
      type="text"
      class="group"
    />

    <BaseInput
      label="price"
      title="가격"
      v-model="JMTZObject.price"
      placeholder="가격을 입력하세요"
      type="text"
      class="group"
    />

    <BaseInput
      label="location"
      title="장소"
      v-model="JMTZObject.location"
      placeholder="장소를 입력하세요"
      type="text"
      class="group"
    />

    <BaseInput
      label="memo"
      title="특이사항"
      v-model="JMTZObject.memo"
      placeholder="특이사항을 입력하세요"
      type="text"
      class="group"
    />

    <BaseSelect
      label="like"
      title="추천/비추천"
      v-model="JMTZObject.like"
      :categories="like"
      class="group"
    />

    <BaseButton type="submit">등록</BaseButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      JMTZObject: this.createFreshJMTZObject(),
      categories: ['한식', '양식', '일식', '중식', '분식', '기타'],
      like: ['추천', '비추천']
    }
  },
  methods: {
    create() {
      this.$store.dispatch('createjmt', this.JMTZObject).then(() => {
        this.$router.push({ name: 'jmtzlist' })
        this.JMTZObject = this.createFreshJMTZObject()
      })
    },
    createFreshJMTZObject() {
      const email = this.$store.state.user.user.user.email
      return {
        email: email,
        category: '',
        name: '',
        menu: '',
        price: '',
        location: '',
        memo: '',
        like: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
