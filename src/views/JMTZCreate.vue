<template>
  <form class="form form_create" @submit.prevent="create">
    <h1 class="form_title">JMT 게시물 등록</h1>
    <BaseSelect
      label="category"
      title="종류"
      v-model="JMTZObject.category"
      :categories="categories"
      class="group"
      :class="{ error: $v.JMTZObject.category.$error }"
      @blur="$v.JMTZObject.category.$touch()"
    />
    <template v-if="$v.JMTZObject.category.$error">
      <p v-if="!$v.JMTZObject.category.required" class="message_err">
        음식 종류를 입력해주세요
      </p>
    </template>

    <BaseInput
      label="name"
      title="가게 이름"
      v-model="JMTZObject.name"
      placeholder="가게 이름을 입력하세요"
      type="text"
      class="group"
      :class="{ error: $v.JMTZObject.name.$error }"
      @blur="$v.JMTZObject.name.$touch()"
    />
    <template v-if="$v.JMTZObject.name.$error">
      <p v-if="!$v.JMTZObject.name.required" class="message_err">
        가게 이름을 입력해주세요
      </p>
    </template>

    <BaseInput
      label="menu"
      title="메뉴 이름"
      v-model="JMTZObject.menu"
      placeholder="메뉴 이름을 입력하세요"
      type="text"
      class="group"
      :class="{ error: $v.JMTZObject.menu.$error }"
      @blur="$v.JMTZObject.menu.$touch()"
    />
    <template v-if="$v.JMTZObject.menu.$error">
      <p v-if="!$v.JMTZObject.menu.required" class="message_err">
        메뉴를 입력해주세요
      </p>
    </template>

    <BaseInput
      label="price"
      title="가격"
      v-model="JMTZObject.price"
      placeholder="가격을 입력하세요"
      type="text"
      class="group"
      :class="{ error: $v.JMTZObject.price.$error }"
      @blur="$v.JMTZObject.price.$touch()"
    />
    <template v-if="$v.JMTZObject.price.$error">
      <p v-if="!$v.JMTZObject.price.numeric" class="message_err">Only Number</p>
      <p v-if="!$v.JMTZObject.price.required" class="message_err">
        가격을 입력해주세요
      </p>
    </template>

    <BaseInput
      label="location"
      title="장소"
      v-model="JMTZObject.location"
      placeholder="장소를 입력하세요"
      type="text"
      class="group"
      :class="{ error: $v.JMTZObject.location.$error }"
      @blur="$v.JMTZObject.location.$touch()"
    />
    <template v-if="$v.JMTZObject.location.$error">
      <p v-if="!$v.JMTZObject.location.required" class="message_err">
        장소를 입력해주세요
      </p>
    </template>

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
      :class="{ error: $v.JMTZObject.like.$error }"
      @blur="$v.JMTZObject.like.$touch()"
    />
    <template v-if="$v.JMTZObject.like.$error">
      <p v-if="!$v.JMTZObject.like.required" class="message_err">
        추천/비추천을 선택해주세요
      </p>
    </template>

    <div class="group group_upload">
      <button class="btn_upload" type="button" @click="onPickFile">
        업로드 이미지
      </button>
      <input
        id="uploadImg"
        type="file"
        style="display: none;"
        ref="fileInput"
        accept="image/*"
        @change="onFilePicked"
      />
      <!-- <label for="uploadImg">이미지를 업로드 해주세요.</label> -->
      <img :src="JMTZObject.imageUrl" width="100%" alt />
    </div>

    <div class="group group_isOpen">
      <input
        v-model="JMTZObject.isOpen"
        type="checkbox"
        name="isOpen"
        id="isOpen"
      />
      <label for="isOpen">체크하면 공개/체크안하면 비공개입니다.</label>
    </div>

    <BaseButton :disabled="$v.$anyError" type="submit">등록</BaseButton>
    <p v-if="$v.$anyError" class="message_err">필수 입력을 채워주세요</p>
  </form>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      JMTZObject: this.createFreshJMTZObject(),
      categories: ['한식', '양식', '일식', '중식', '분식', '기타'],
      like: ['추천', '비추천']
    }
  },
  validations: {
    JMTZObject: {
      category: { required },
      name: { required },
      menu: { required },
      price: { required, numeric },
      location: { required },
      like: { required }
    }
  },
  methods: {
    create() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('createjmt', this.JMTZObject).then(() => {
          console.log('1.Create')
          this.$router.push({ name: 'jmtzlist' })
          this.JMTZObject = this.createFreshJMTZObject()
        })
      }
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
        isOpen: true,
        memo: '',
        like: '',
        imageUrl: null,
        image: null,
        date: this.$moment(new Date()).format('YYYYMMDD')
      }
    },
    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.JMTZObject.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.JMTZObject.image = files[0]
    }
  }
}
</script>
<style lang="scss" scoped>
.form_create {
}

input[type='checkbox'] {
  display: none;
}

input[type='checkbox'] + label::before {
  content: '';
  vertical-align: top;
  width: 18px;
  height: 18px;
  margin-right: 6px;
  border-radius: 2px;
  border: 1px solid #000;
  display: inline-block;
}
input[type='checkbox']:checked + label::before {
  content: '';
  background: url('https://img.icons8.com/material-rounded/24/000000/checked-checkbox.png')
    center no-repeat;
}

.group {
  &_upload {
    align-items: center;
  }
  &_isOpen {
    label {
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
}

.btn_upload {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.2rem;
  width: 30%;
  min-width: 140px;
}
</style>
