<template>
  <div class>
    <label :class="{ fontSmall: fontSmall }" v-if="label" :for="label">{{
      title
    }}</label>
    <input
      :value="value"
      :id="label"
      v-bind="$attrs"
      v-on="listeners"
      @focus="fontSmall = true"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  data: function() {
    return {
      fontSmall: false
    }
  },
  props: {
    value: [String, Number, Boolean],
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
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
