<template>
  <v-app>
    <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app>
      <v-list dense>
        <template v-for="item in items">
          <v-layout v-if="item.heading" :key="item.heading" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ child.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-3" dark app fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Sura</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <label for>
        <strong>Olá,</strong> Lucas Juliano
      </label>
      <v-btn icon>
        <v-badge color="red" small>
          <span slot="badge">4</span>

          <v-icon>notifications</v-icon>
        </v-badge>
      </v-btn>

      <!-- <v-btn icon large>
        <v-avatar size="32px" tile>
          <img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify">
        </v-avatar>
      </v-btn>-->
      <router-link to="/broker-admin/account">
        <v-tooltip bottom>
          <v-btn icon slot="activator">
            <v-icon>compare_arrows</v-icon>
          </v-btn>
          <span>Alterar conta</span>
        </v-tooltip>
      </router-link>
    </v-toolbar>
    <v-content>
      <v-container grid-list-md fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-card-text class="px-0">Cobertura</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 6" :key="`6${i}`" xs2>
            <v-card>
              <v-card-text class="px-0">2</v-card-text>
            </v-card>
          </v-flex>

          <v-flex>
            <v-layout row wrap>
              <v-flex xs4>
                <v-layout column>
                  <v-flex>
                    <v-card>
                      <v-card-text>L1</v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex>
                    <v-card>
                      <v-card-text>L2</v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex>
                <v-layout column>
                  <v-flex>
                    <v-card>
                      <v-card-text>L1</v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex>
                    <v-card>
                      <v-card-text>L2</v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
            <!-- <v-card>
              <v-card-text>Lucas Juliano</v-card-text>
            </v-card>-->
          </v-flex>
          <!-- <v-flex v-for="i in 3" :key="`4${i}`" xs4>
            <v-card dark color="primary">
              <v-card-text class="px-0">4</v-card-text>
            </v-card>
          </v-flex>-->
          <!-- <v-flex v-for="i in 4" :key="`3${i}`" xs3>
            <v-card dark color="secondary">
              <v-card-text class="px-0">3</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 6" :key="`2${i}`" xs2>
            <v-card dark color="primary">
              <v-card-text class="px-0">2</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 12" :key="`1${i}`" xs1>
            <v-card dark color="secondary">
              <v-card-text class="px-0">1</v-card-text>
            </v-card>
          </v-flex>-->
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class ManagerTablesComponent extends Vue {
  isLoading: boolean = true;

  dialog: boolean = false;

  radioGroup: any;

  showFilters: boolean = false;

  drawer: any = true;

  show: boolean = false;

  e6: number = 1;

  finished: boolean = true;

  @Prop()
  source!: String;

  breadcrumbsItems: any = [
    {
      text: "Broker Admin",
      disabled: true,
      href: "/broker-admin"
    },
    {
      text: "Sura",
      disabled: false,
      href: "/broker-admin"
    },
    {
      text: "Tabelas de dominio",
      disabled: false,
      href: "/broker-admin"
    },
    {
      text: "Cobertura",
      disabled: false,
      href: "/broker-admin"
    }
  ];

  items: any[] = [
    { icon: "contacts", text: "Contacts" },
    { icon: "history", text: "Frequently contacted" },
    { icon: "content_copy", text: "Duplicates" },
    {
      icon: "keyboard_arrow_up",
      "icon-alt": "keyboard_arrow_down",
      text: "Labels",
      model: true,
      children: [{ icon: "add", text: "Create label" }]
    },
    {
      icon: "keyboard_arrow_up",
      "icon-alt": "keyboard_arrow_down",
      text: "More",
      model: false,
      children: [
        { text: "Import" },
        { text: "Export" },
        { text: "Print" },
        { text: "Undo changes" },
        { text: "Other contacts" }
      ]
    },
    { icon: "settings", text: "Settings" },
    { icon: "chat_bubble", text: "Send feedback" },
    { icon: "help", text: "Help" },
    { icon: "phonelink", text: "App downloads" },
    { icon: "keyboard", text: "Go to the old version" }
  ];

  headers: any = [
    {
      text: "Dessert (100g serving)",
      align: "left",
      sortable: false,
      value: "name"
    },
    { text: "Calories", value: "calories" },
    { text: "Fat (g)", value: "fat" },
    { text: "Carbs (g)", value: "carbs" },
    { text: "Protein (g)", value: "protein" },
    { text: "Iron (%)", value: "iron" }
  ];

  desserts: any = [
    {
      value: false,
      name: "Frozen Yogurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: "1%"
    },
    {
      value: false,
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: "1%"
    },
    {
      value: false,
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: "7%"
    },
    {
      value: false,
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: "8%"
    },
    {
      value: false,
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      iron: "16%"
    },
    {
      value: false,
      name: "Jelly bean",
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: "0%"
    },
    {
      value: false,
      name: "Lollipop",
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      iron: "2%"
    },
    {
      value: false,
      name: "Honeycomb",
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      iron: "45%"
    },
    {
      value: false,
      name: "Donut",
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      iron: "22%"
    },
    {
      value: false,
      name: "KitKat",
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      iron: "6%"
    }
  ];
  constructor(props: any) {
    super();
  }

  // @Watch("$route", { deep: true, immediate: true })
  // onRouterChanged($event: any) {
  //   console.log("router", $event);
  // }

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
</script>


<style lang="scss" scoped>
.icon-white {
  color: gainsboro !important;
}
</style>

