<template lang="pug">
.user-avatar
    img.user-avatar__img(
      :src="src"
    )
</template>

<script>
export default {
  props: {
    src: String,
  }
}
</script>

<style lang="sass" scoped>
.user-avatar
  height: 150px
  width: 150px
  border-radius: 50%
  overflow: hidden

  &__img
    height: 100%
    width: 100%
    object-fit: cover
    object-position: center

</style>
