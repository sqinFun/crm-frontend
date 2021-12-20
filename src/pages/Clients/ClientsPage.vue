<template lang="pug">
  UiPageContent.clients-page
    UiUserTable(
      @click:row="openUser"
    )
</template>

<script>
import UiPageContent from "@components/UiPageContent";
import UiUserFilter from "@components/UiUserFilter";
import UiUserTable from "@components/UiUserTable/UiUserTable";
export default {
  components: {
    UiPageContent,
    UiUserFilter,
    UiUserTable,
  },
  methods: {
    openUser({id}) {
      this.$router.push({
        name: 'Client',
        params: {
          id,
        }})
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
