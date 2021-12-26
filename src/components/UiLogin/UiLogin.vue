<template lang="pug">
  .register
    VTextField.user-card__input(
      label="e-mail"
      v-model="user.email"
    )
    VTextField.user-card__input(
      label="Пароль"
      v-model="user.password"
    )
    VBtn(
      color="primary"
      @click="login"
    ) Войти
</template>

<script>
export default {
  data: () => ({
    user: {
      email: '',
      password: '',
    }
  }),
  methods: {
    login() {
      this.$store.dispatch('auth/login', this.user)
    }
  }

}
</script>

<style lang="sass" scoped>

</style>
