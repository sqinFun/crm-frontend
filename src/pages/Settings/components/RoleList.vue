<template lang="pug">
  .roles-list
    v-expansion-panels
      v-expansion-panel(
        v-for="role in roles"
        :key="role.id"
      )
        v-expansion-panel-header
          | {{role.name}}
        v-expansion-panel-content
          role-rules(
            :rule="role.Rule"
          )


</template>

<script>
import {mapState} from "vuex";
import RoleRules from "./RoleRules";
export default {
  components: {
    RoleRules,
  },

  computed: {
    ...mapState('roles', {
      roles: s => s.roles
    })
  },
}
</script>

<style lang="sass" scoped>

</style>
