<template lang="pug">
  UiPageContent.clients-page
    UiUserTable
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
}
</script>

<style lang="sass" scoped>

</style>
