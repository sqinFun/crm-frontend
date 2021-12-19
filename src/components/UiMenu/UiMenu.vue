<template lang="pug">
  v-navigation-drawer(permanent='' expand-on-hover='')
    v-list
      v-list-item(link to="/")
        v-list-item-content
          v-list-item-title.text-h6
            | CRM
    v-divider
    v-list
      UiMenuItem(
        v-for="link in links"
        :key="link.id"
        v-bind="link"
      )




</template>

<script>
import UiMenuItem from "@components/UiMenu/UiMenuItem";
import {links} from "@components/UiMenu/menuLinks";

export default {
  components: {
    UiMenuItem,
  },
  computed: {
    links() {
      return links;
    }
  }

}
</script>

<style scoped>

</style>
