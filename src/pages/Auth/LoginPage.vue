<template lang="pug">
  UiPageContent
    .register
      UiBlock.register__card(
        title="Вход"
      )
        UiLogin.register__form
</template>

<script>
import UiPageContent from "@components/UiPageContent";
import UiLogin from "@components/UiLogin/UiLogin";
import UiBlock from "@components/UiBlock";

export default {
  components: {
    UiPageContent,
    UiLogin,
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
