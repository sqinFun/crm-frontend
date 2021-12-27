<template lang="pug">
  v-list-group(
    :prepend-icon="icon"
    no-action
  )
    template(#activator)
      v-list-item-title
        | {{title}}
    ui-menu-item(
      v-for="link in children"
      :key="link.id"
      v-bind="link"
    )
</template>

<script>
import UiMenuItem from "@components/UiMenu/UiMenuItem";
export default {
  components: {
    UiMenuItem,
  },
  props: {
    title: String,
    icon: String,
    children: Array,
  }
}
</script>

<style scoped>

</style>
