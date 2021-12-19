<template lang="pug">
  .page
    .page__header
      UiHeader
    .page__body
      UiMenu
      .page__content
        slot
</template>

<script>
import UiHeader from "@components/UiHeader";
import UiMenu from "@components/UiMenu/UiMenu";
export default {
  components: {
    UiHeader,
    UiMenu,
  }
}
</script>

<style lang="sass" scoped>
.page
  display: grid
  grid-template-rows: auto 1fr
  min-height: 100%

  &__body
    display: grid
    grid-template-columns: auto 1fr

  &__content
    display: grid
</style>
