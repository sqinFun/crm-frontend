<template lang="pug">
  .user-card-field
    .user-card-field__title
      | {{title}}
    .user-card-field__content
      slot

</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>

<style lang="sass" scoped>
.user-card-field
  display: grid
  grid-template-columns: 1fr 3fr
  grid-gap: 15px
  align-items: baseline


</style>
