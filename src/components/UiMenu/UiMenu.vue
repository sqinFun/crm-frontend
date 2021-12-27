<template lang="pug">
  v-navigation-drawer.ui-menu(
    :value="true"
    :mini-variant="!isOpenMenu"
  )
    v-list-item
      v-list-item-icon.ui-menu__hamburger(
        @click="toggleMenu"
      )
        v-icon.pointer mdi-menu

    v-divider
    v-list
      template(
        v-for="link in links"
      )
        component.ui-menu__item(
          :is="getMenuItemComponent(link)"
          :key="link.id"
          v-bind="link"
          @click.native="openMenu"
        )




</template>

<script>
import UiMenuItem from "@components/UiMenu/UiMenuItem";
import UiMenuGroup from "@components/UiMenu/UiMenuGroup";
import {links} from "@components/UiMenu/menuLinks";

export default {
  data: () => ({
    isOpenMenu: true
  }),
  components: {
    UiMenuItem,
    UiMenuGroup,
  },
  computed: {
    links() {
      return links;
    }
  },
  methods: {
    toggleMenu() {
      console.log('toggle')
      this.isOpenMenu = !this.isOpenMenu
    },
    openMenu() {
      this.isOpenMenu = true
    },
    getMenuItemComponent(link) {
      return link.children?.length ? 'UiMenuGroup' : 'UiMenuItem'
    }
  }
}
</script>

<style lang="sass" scoped>
.ui-menu
  &__hamburger
    cursor: pointer
</style>
