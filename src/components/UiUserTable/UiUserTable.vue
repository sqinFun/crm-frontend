<template lang="pug">
  .user-table
    .user-table__header
      UiUserFilter
    .user-table__body
      VDataTable(
        :headers="headers"
        :items="users"
        hide-default-footer
        disable-sort
        @click:row="$emit('click:row', $event)"
      )
</template>

<script>
import UiPageContent from "@components/UiPageContent";
import UiUserFilter from "@components/UiUserFilter";
import {mapState} from 'vuex'
export default {
  components: {
    UiPageContent,
    UiUserFilter,
  },
  computed: {
    ...mapState('users', {
      users: s => s.users,
    }),
    headers() {
      return [
        {
          text: '#',
          value: 'id',

        },
        {
          text: 'Имя',
          value: 'firstName'
        },
        {
          text: 'Фамилия',
          value: 'secondName'
        },
        {
          text: 'Отчество',
          value: 'middleName'
        },
        {
          text: 'Телефон',
          value: 'phone'
        },
        {
          text: 'Почта',
          value: 'email'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.user-table

</style>
