<template lang="pug">
  v-card
    v-card-title
      | Создать роль
    v-card-text
      v-text-field(
        label="Имя роли"
        v-model="name"
      )
    v-card-actions
      v-btn(
        color="success"
        @click="createRole"
      )
        | Создать
      v-btn(
        v-if="showClose"
        color="error"
        @click="close"
      )
        | Отмена

</template>

<script>
export default {
  props: {
    value: Boolean,
    showClose: {
      type: Boolean,
      default: true,
    }
  },
  data: () => ({
    name: ''
  }),
  methods: {
    async createRole() {
      if(!this.name) return
      await this.$store.dispatch('roles/createRole', {name: this.name})
      this.close()
    },
    close () {
      this.name = ''
      this.$emit('close')
    }
  }
}
</script>
