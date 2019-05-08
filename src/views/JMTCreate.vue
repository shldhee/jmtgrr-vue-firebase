<template>
  <div>
    <form @submit.prevent="create">
      <label for="">종류</label>
      <select v-model="jmtObject.category">
        <option>한식</option>
        <option>양식</option>
        <option>일식</option>
        <option>중식</option>
        <option>분식</option>
        <option>기타</option>
      </select>

      <div class="group">
        <label for="">가게 이름</label>
        <input
          v-model="jmtObject.name"
          type="text"
          placeholder="가게 이름을 입력하세요"
        />
      </div>
      <div class="group">
        <label for="">메뉴</label>
        <input
          v-model="jmtObject.menu"
          type="text"
          placeholder="메뉴를 입력하세요"
        />
      </div>
      <div class="group">
        <label for="">가격</label>
        <input
          v-model="jmtObject.price"
          type="text"
          placeholder="가격를 입력하세요"
        />
      </div>
      <div class="group">
        <label for="">장소</label>
        <input
          v-model="jmtObject.location"
          type="text"
          placeholder="장소를 입력하세요"
        />
      </div>
      <div class="group">
        <label for="">특이사항</label>
        <input
          v-model="jmtObject.memo"
          type="text"
          placeholder="특이사항을 입력하세요"
        />
      </div>
      <div class="group">
        <label for="">추천/비추천</label>
        <select v-model="jmtObject.like">
          <option>추천</option>
          <option>비추천</option>
        </select>
      </div>
      <input type="submit" value="등록" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    const email = this.$store.state.user.user.email
    return {
      jmtObject: {
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
  },
  methods: {
    create() {
      this.$store.dispatch('createjmt', this.jmtObject).then(() => {
        this.$router.push({ name: 'jmtshow' })
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
