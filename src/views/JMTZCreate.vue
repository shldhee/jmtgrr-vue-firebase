<template>
  <form @submit.prevent="create">
    <div class="group">
      <label for="">종류</label>
      <select v-model="JMTZObject.category">
        <option>한식</option>
        <option>양식</option>
        <option>일식</option>
        <option>중식</option>
        <option>분식</option>
        <option>기타</option>
      </select>
    </div>

    <div class="group">
      <label for="">가게 이름</label>
      <input
        v-model="JMTZObject.name"
        type="text"
        placeholder="가게 이름을 입력하세요"
      />
    </div>
    <div class="group">
      <label for="">메뉴</label>
      <input
        v-model="JMTZObject.menu"
        type="text"
        placeholder="메뉴를 입력하세요"
      />
    </div>
    <div class="group">
      <label for="">가격</label>
      <input
        v-model="JMTZObject.price"
        type="text"
        placeholder="가격를 입력하세요"
      />
    </div>
    <div class="group">
      <label for="">장소</label>
      <input
        v-model="JMTZObject.location"
        type="text"
        placeholder="장소를 입력하세요"
      />
    </div>
    <div class="group">
      <label for="">특이사항</label>
      <input
        v-model="JMTZObject.memo"
        type="text"
        placeholder="특이사항을 입력하세요"
      />
    </div>
    <div class="group">
      <label for="">추천/비추천</label>
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
