<template lang="pug">
  v-list-item(
    link
    :to="href"
  )
    v-list-item-icon
      v-icon {{icon}}
    v-list-item-title
      | {{title}}
</template>

<script>
export default {
  props: {
    href: String,
    icon: String,
    title: String,
  }
}
</script>

<style scoped>

</style>
