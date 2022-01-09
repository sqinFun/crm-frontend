import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@pages/MainPage";
import TasksPage from "@pages/TasksPage";
import ClientsPage from "@pages/Clients/ClientsPage";
import ClientPage from "@pages/Clients/ClientPage";
import StaffPage from "@pages/StaffPage";
import LoginPage from "@pages/Auth/LoginPage";
import RegisterPage from "@pages/Auth/RegisterPage";
import SettingsPage from "@pages/Settings/SettingsPage";
import RolesPage from "@pages/Settings/RolesPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage,
  },
  {
    path: '/',
    name: 'Tasks',
    component: TasksPage,
  },
  {
    path: '/clients',
    name: 'Clients',
    component: ClientsPage,
  },
  {
    path: '/clients/:id',
    name: 'Client',
    component: ClientPage,
  },
  {
    path: '/',
    name: 'Staff',
    component: StaffPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsPage,
  },
  {
    path: '/settings/roles',
    name: 'SettingsRoles',
    component: RolesPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
