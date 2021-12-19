<template lang="pug">
.page-content
  .page-content__body
    slot
  .page-content__aside
    slot(name="aside")

</template>

<script>
export default {
  name: "UiPageContent"
}
</script>

<style lang="sass" scoped>
.page-content
   display: grid
   grid-template-columns: 1fr auto

</style>
