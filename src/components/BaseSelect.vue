<template>
  <div class>
    <label :class="{ fontSmall: fontSmall }" v-if="label" :for="label">{{
      title
    }}</label>
    <select
      :value="value"
      @change="updateValue"
      @focus="fontSmall = true"
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
  data: function() {
    return {
      fontSmall: false
    }
  },
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
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
