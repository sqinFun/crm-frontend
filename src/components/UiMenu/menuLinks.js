export const links = [
  {
    title: 'Задачи',
    href: '/tasks',
    icon: 'mdi-file-tree ',
  },
  {
    title: 'Сотрудники',
    href: '/staff',
    icon: 'mdi-briefcase-account ',
  },
  {
    title: 'Клиенты',
    href: '/clients',
    icon: 'mdi-account-multiple ',
  },
  {
    title: 'Вход',
    href: '/login',
    icon: 'mdi-account-multiple ',
  },
  {
    title: 'Настройки',
    icon: 'mdi-cog-outline',
    children: [
      {
        title: 'права',
        href: '/settings/roles',
      }
    ]
  },
]
