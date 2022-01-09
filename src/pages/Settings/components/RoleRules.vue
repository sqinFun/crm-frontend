<template lang="pug">
.rule-settings
  v-container.rule-settings__list
    v-row.rule-settings__item(
      v-for="rule in ruleNames"
      :key="rule.name"
      align="center"
    )
      v-col.rule-settings__title.col-4
        | {{rule.title}}
      v-col
        v-btn-toggle(
          v-model="innerRule[rule.name]"
          color="blue accent-3"
        )
          v-btn(:value="1" outlined)
            | Просмотр
          v-btn(:value="2" outlined)
            | Редактирование
          v-btn(:value="3" outlined)
            | Изменение
  .rule-settings__footer
    v-btn(
      color="success"
      @click="save"
    ) Сохранить
</template>

<script>

import _ from "lodash"

const ruleNames = [
  {
    name: 'client',
    title: 'Клиенты'
  },
  {
    name: 'deal',
    title: 'Сделки'
  },
  {
    name: 'settings',
    title: 'Настройки'
  },
  {
    name: 'task',
    title: 'Задачи'
  },
  {
    name: 'user',
    title: 'Пользователи'
  },
]

export default {
  props: {
    rule: Object,
  },
  data: () => ({
    innerRule: [],
  }),
  computed: {
    ruleNames: () => ruleNames,
  },
  watch: {
    rule: {
      handler(value) {
        this.innerRule = _.cloneDeep(value)
      },
      immediate: true,
    }
  },
  methods: {
    save() {
      this.$store.dispatch('roles/setRules', {rule: this.innerRule})
    }
  }
}
</script>

<style lang="sass" scoped>
.rule-settings

  &__footer
    display: flex
    justify-content: flex-end
</style>
