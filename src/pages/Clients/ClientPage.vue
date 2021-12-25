<template lang="pug">
UiPageContent
  UiUserCard(
    :userId="userId",
  )
</template>

<script>
import UiPageContent from "@components/UiPageContent";
import UiUserCard from "@components/UiUserCard/UiUserCard";
export default {
  components: {
    UiPageContent,
    UiUserCard
  },
  computed: {
    userId() {
      return +this.$route.params.id
    },
  }
}
</script>

<style scoped>

</style>
