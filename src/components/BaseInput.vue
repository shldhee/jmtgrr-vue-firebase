<template>
  <div class>
    <label v-if="label" :for="label">{{ title }}</label>
    <input :value="value" @input="updateValue" :id="label" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    title: {
      type: String,
      required: true
    },
    label: {
      type: String
    }
  },
  methods: {
    updateValue() {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
