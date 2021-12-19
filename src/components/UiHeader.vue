<template lang="pug">
  v-app-bar(app='' color='primary' dark='')
    .d-flex.align-center
      RouterLink(
      to="/"
      )
        .title
         | CRM
    v-spacer
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.title
  color: #fff
</style>
