<template lang="pug">
  .filter-list
    VTextField.filter-list__item(
      v-model="filter.userName"
      label="Поиск по имени"
    )

    VTextField.filter-list__item(
      v-model="filter.userName"
      type="number"
      label="Поиск по id"
    )

</template>

<script>
export default {
  data: () => ({
    filter: {
      userName: ''
    }
  })

}
</script>

<style lang="sass" scoped>

.filter-list
  display: flex
  flex-wrap: wrap
  margin: -10px

  &__item
    margin: 10px
    max-width: 300px

</style>
