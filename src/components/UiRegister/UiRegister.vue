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
    VTextField.user-card__input(
      label="Фамилия"
      v-model="user.lastName"
    )
    VTextField.user-card__input(
      label="Имя"
      v-model="user.firstName"
    )
    VTextField.user-card__input(
      label="Отчество"
      v-model="user.middleName"
    )
    VTextField.user-card__input(
      label="Телефон"
      v-model="user.phone"
    )
    VBtn(
      color="primary"
      @click="register"
    ) зарегистрироваться
</template>

<script>
export default {
  data: () => ({
    user: {
      email: '',
      password: '',
      firstName: '',
      middleName: '',
      lastName: '',
      phone: '',
    }
  }),
  methods: {
    register() {
      this.$store.dispatch('auth/register', this.user)
    }
  }

}
</script>

<style lang="sass" scoped>

</style>
