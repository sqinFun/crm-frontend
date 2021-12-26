<template lang="pug">
.ui-block
  h2.ui-block__title(
    v-if="title"
  )
    | {{title}}
  .ui-block__content
    slot


</template>

<script>
export default {
  props: {
    title: String,
  }
}
</script>

<style lang="sass" scoped>
.ui-block
  display: flex
  flex-direction: column
  padding: 20px
  border-radius: 8px
  background-color: $light-1

  &__title
    +font-20
    margin-bottom: 10px
</style>
