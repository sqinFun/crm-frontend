<template lang="pug">
  VApp
    VMain
      UiPage
        RouterView
</template>

<script>
import './style/theme.sass'
import UiPage from "@components/UiPage";
export default {
  components: {
    UiPage
  },

  data: () => ({
    //
  }),
};
</script>
