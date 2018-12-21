import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "@/components/home/home.component.vue";
import HomeDetailsComponent from "@/components/home-details/home-details.component.vue";
import ManagerTablesComponent from "@/components/manager-tables/manager-tables.component.vue";
import DetailsTableComponent from "@/components/details-table/details-table.component.vue";


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
    }, {
      path: '/broker-admin/home/sura',
      component: HomeDetailsComponent
    }, {
      path: '/broker-admin/sura/manager-tables',
      component: ManagerTablesComponent
    }, {
      path: '/broker-admin-sura/manager-tables/:id',
      component: DetailsTableComponent
    }
  ]
});
