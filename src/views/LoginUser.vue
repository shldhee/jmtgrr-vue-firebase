<template>
  <form class="form form_login" @submit.prevent="login">
    <h1>로그인</h1>
    <BaseInput
      label="userEmail"
      title="email"
      v-model="email"
      placeholder="이메일을 입력해주세요"
      type="text"
      class="group"
      :class="{ error: $v.email.$error }"
      @blur="$v.email.$touch()"
    />

    <template v-if="$v.email.$error">
      <p v-if="!$v.email.email" class="message_err">
        유효한 이메일 주소를 입력해주세요
      </p>
      <p v-if="!$v.email.required" class="message_err">
        이메일은 필수 입력 사항입니다
      </p>
    </template>

    <BaseInput
      label="userPwd"
      title="password"
      v-model="password"
      placeholder="비밀번호를 입력해주세요"
      type="password"
      class="group"
      :class="{ error: $v.password.$error }"
      @blur="$v.password.$touch()"
    />

    <template v-if="$v.password.$error">
      <p v-if="!$v.password.minLength" class="message_err">
        비밀번호는 최소 6자 이상입니다
      </p>
      <p v-if="!$v.password.required" class="message_err">
        비밀번호는 필수 입력 사항입니다
      </p>
    </template>

    <BaseButton :disabled="$v.$anyError" type="submit">Login</BaseButton>
    <p v-if="$v.$anyError" class="message_err">필수 입력 사항을 채워주세요</p>
    <p>
      회원이 아닌 경우는
      <router-link class="link_btn" to="join">가입</router-link>을 해주세요
    </p>
  </form>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
import NProgress from 'nprogress'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    login() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        NProgress.start()
        this.$store
          .dispatch('user/login', {
            email: this.email,
            password: this.password
          })
          .then(() => {
            this.$router.replace({ name: 'jmtzall' })
          })
          .catch(() => {
            NProgress.done()
          })
      }
    }
  }
}
</script>

<style scoped>
.form_login {
  box-sizing: border-box;
  max-width: 480px;
  width: 100%;
  padding: 3rem;
  background-color: #ffc9b3;
  border-radius: 2rem;
}
</style>
