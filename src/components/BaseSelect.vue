<template>
  <div class>
    <label v-if="label" :for="label">{{ title }}</label>
    <select
      :value="value"
      @change="updateValue"
      v-bind="$attrs"
      v-on="listeners"
    >
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
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  },
  methods: {
    updateValue(event) {
      console.log(event)
      console.log(event.target)
      console.log(event.target.value)
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
