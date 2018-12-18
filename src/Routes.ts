import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "@/components/home/home.component.vue";
import AccountComponent from "@/components/account/account.component.vue";

import VueRouter from 'vue-router';

Vue.use(Router);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/broker-admin'
    },
    {
      path: "/broker-admin",
      component: HomeComponent
    },
    {
      path: '/broker-admin/account',
      component: AccountComponent
    }
  ]
});
