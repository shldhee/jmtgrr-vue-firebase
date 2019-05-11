<template>
  <div class>
    <label v-if="label" :for="label">{{ title }}</label>
    <select :value="value" @change="updateValue" v-bind="$attrs">
      <option
        v-for="category in categories"
        :value="category"
        :key="category"
        >{{ category }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    categories: {
      type: Array,
      required: true
    },
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
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
