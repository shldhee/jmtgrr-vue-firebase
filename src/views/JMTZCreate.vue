<template>
  <form @submit.prevent="create">
    <div class="group">
      <label for>종류</label>
      <select v-model="JMTZObject.category">
        <option>한식</option>
        <option>양식</option>
        <option>일식</option>
        <option>중식</option>
        <option>분식</option>
        <option>기타</option>
      </select>
    </div>

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

    <div class="group">
      <label for>추천/비추천</label>
      <select v-model="JMTZObject.like">
        <option>추천</option>
        <option>비추천</option>
      </select>
    </div>
    <button type="submit" value="등록">등록</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      JMTZObject: this.createFreshJMTZObject()
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
