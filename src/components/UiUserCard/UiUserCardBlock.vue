<template lang="pug">
.user-card-block
  .user-card-block__title(
    v-if="title"
  )
    | {{title}}
  .user-card-block__content
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
.user-card-block
  border: 1px solid $border
  padding: 15px
  border-radius: 8px

  &__title
    +font-20
    margin-bottom: 10px

</style>
