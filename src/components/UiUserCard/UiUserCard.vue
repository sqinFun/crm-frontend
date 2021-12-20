<template lang="pug">
.user-card
  UiUserCardBlock(title="Общее")
    .user-card__field-list
      UiUserCardField.user-card__field(title="Имя")
        VTextField.user-card__input(
          v-model="user.firstName"
          hide-details
          readonly
        )
      UiUserCardField.user-card__field(title="Фамилия")
        VTextField.user-card__input(
          v-model="user.lastName"
          hide-details
          readonly
        )
      UiUserCardField.user-card__field(title="Отчество")
        VTextField.user-card__input(
          v-model="user.middleName"
          hide-details
          readonly
        )


  UiUserCardBlock
    UiUserAvatar(
      :src="user.avatar"
    )

  UiUserCardBlock(title="Личное")



</template>

<script>
import UiUserAvatar from "@components/UiUserCard/UiUserAvatar";
import UiUserCardBlock from "@components/UiUserCard/UiUserCardBlock";
import UiUserCardField from "@components/UiUserCard/UiUserCardField";
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
      id: 1,
      firstName: 'Иван',
      middleName: 'Иванович',
      lastName: 'Иванов',
      phone: "+7(123)456-78-90",
      email: 'ivan.i.i@gmail.com',
      avatar: '/mock-avatar.jpg'
    }
  }),
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

  &__field


  &__input
    padding: 0
    maring: 0


</style>
