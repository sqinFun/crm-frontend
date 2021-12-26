<template lang="pug">
  UiPageContent
    .register
      UiBlock.register__card(
        title="Регистрация"
      )
        UiRegister.register__form
</template>

<script>
import UiPageContent from "@components/UiPageContent";
import UiRegister from "@components/UiRegister/UiRegister";
import UiBlock from "@components/UiBlock";
export default {
  components: {
    UiPageContent,
    UiRegister,
    UiBlock,
  },
}
</script>

<style lang="sass" scoped>
.register
  display: flex
  flex-direction: column
  align-items: center

  &__card
    max-width: 500px
    padding: 20px
    width: 100%

  &__form
    display: grid

</style>
