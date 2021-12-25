<template lang="pug">
  UiPageContent.clients-page
    UiUserTable(
      :users="users"
      :loading="usersLoading"
      @click:row="openUser"
    )
</template>

<script>
import UiPageContent from "@components/UiPageContent";
import UiUserFilter from "@components/UiUserFilter";
import UiUserTable from "@components/UiUserTable/UiUserTable";
import {mapState} from "vuex";

export default {
  components: {
    UiPageContent,
    UiUserFilter,
    UiUserTable,
  },
  computed: {
    ...mapState('users', {
      users: s => s.users,
      usersLoading: s => s.usersLoading,
    }),
  },
  created() {
    this.getUsers()
  },
  methods: {
    openUser({id}) {
      this.$router.push({
        name: 'Client',
        params: {
          id,
        }
      })
    },
    getUsers() {
      this.$store.dispatch('users/getUsers')
    }

  }
}
</script>

<style lang="sass" scoped>

</style>
