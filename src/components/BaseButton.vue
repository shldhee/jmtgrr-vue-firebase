<template>
  <div>
    <button name="button" v-bind="$attrs">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<style lang="scss" scoped></style>
