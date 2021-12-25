<template lang="pug">
.user-card
  UiUserCardBlock(title="Общее")
    .user-card__field-list
      UiUserCardField.user-card__field(title="Имя")
        VTextField.user-card__input(
          v-model="user.firstName"
          hide-details
          placeholder="—"
          readonly
        )
      UiUserCardField.user-card__field(title="Фамилия")
        VTextField.user-card__input(
          v-model="user.lastName"
          hide-details
          placeholder="—"
          readonly
        )
      UiUserCardField.user-card__field(title="Отчество")
        VTextField.user-card__input(
          v-model="user.middleName"
          hide-details
          placeholder="—"
          readonly
        )
  UiUserCardBlock
    UiUserAvatar(
      :src="user.avatar"
    )
  UiUserCardBlock(title="Личное")
    UiUserCardField.user-card__field(title="Телефон")
      VTextField.user-card__input(
        v-model="user.phone"
        hide-details
        placeholder="—"
        readonly
      )
    UiUserCardField.user-card__field(title="E-mail")
      VTextField.user-card__input(
        v-model="user.email"
        hide-details
        placeholder="—"
        readonly
      )
  UiUserCardBlock(title="Скрытое")
    UiUserCardField.user-card__field(title="Роль")
      VSelect.user-card__input(
        v-model="user.roleId"
        item-text="name"
        item-value="id"
        :items="roles"
        hide-details
        placeholder="—"
        readonly
      )



</template>

<script>
import UiUserAvatar from "@components/UiUserCard/UiUserAvatar";
import UiUserCardBlock from "@components/UiUserCard/UiUserCardBlock";
import UiUserCardField from "@components/UiUserCard/UiUserCardField";
import {mapState} from "vuex";
export default {
  components: {
    UiUserAvatar,
    UiUserCardBlock,
    UiUserCardField,
  },
  props: {
    userId: Number,
  },
  data: () => ({
    user: {
    },

    loading: false
  }),
  computed: {
    ...mapState('roles', {
      roles: s => s.roles,
    })
  },
  created() {
    this.getUser()
  },
  methods: {
    async getUser() {
      try {
        this.loading = true
        this.user = await this.$store.dispatch('users/getUser', {id: this.userId})
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.user-card
  display: grid
  grid-template-columns: 2fr 1fr
  grid-template-rows: auto auto
  grid-gap: 25px

  &__field-list
    display: grid
    grid-gap: 10px

  &__input
    padding: 0
    margin: 0


</style>
