<template>
  <form @submit.prevent="join">
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
        Please enter a valid email address.
      </p>
      <p v-if="!$v.email.required" class="message_err">Email is required.</p>
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
        Please enter a valid password minLength(6).
      </p>
      <p v-if="!$v.password.required" class="message_err">
        Password is required.
      </p>
    </template>

    <BaseButton :disabled="$v.$anyError" type="submit">Join</BaseButton>
    <p v-if="$v.$anyError" class="message_err">
      Please fill out the required field(s).
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
    join() {
      this.$v.$touch()
      NProgress.start()
      if (!this.$v.$invalid) {
        this.$store
          .dispatch('user/join', {
            email: this.email,
            password: this.password
          })
          .then(() => {
            // this.$router.push({ name: 'jmtzcreate' })
            this.$router.replace({ name: 'jmtzcreate' })
          })
          .catch(error => {
            NProgress.done()
            console.log('There was an error in JoinUser : ', error.message)
          })
      }
    }
  }
}
</script>
