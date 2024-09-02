import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Admin/Login.vue';
import Dashboard from '@/components/Admin/Dashboard.vue';

const router_admin = [
  {
    path: '/admin/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  }
];

export default router_admin;