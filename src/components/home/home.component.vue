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
      <label for>Olá, Lucas Juliano</label>
      <v-btn icon>
        <v-badge color="red" small>
          <span slot="badge">4</span>

          <v-icon>notifications</v-icon>
        </v-badge>
      </v-btn>

      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify">
        </v-avatar>
      </v-btn>

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
      <v-container fluid>
        <v-layout column justify-center align-center v-if="isLoading">
          <v-progress-circular :size="150" color="primary" indeterminate></v-progress-circular>
          <label
            style="font-size:18px;color: #6C6E6F;text-align:center;margin-top:20px"
          >Aguarde carregando módulos</label>
        </v-layout>

        <v-layout row wrap justify-center pa-5 v-if="!isLoading">
          <v-layout align-start pa-3>
            <label style="font-size:18px;color: #6C6E6F ">Escolha um módulo para prosseguir</label>
          </v-layout>

          <v-layout row>
            <v-flex xs3 pa-3>
              <v-card hover>
                <v-img
                  src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Cloud-Computing-Architecture.jpg"
                  height="200px"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <div class="headline">MÓDULOS
                      <v-chip small outline dark>
                        <strong>3</strong>
                      </v-chip>
                    </div>
                    <v-badge v-model="show" color="dark" left>
                      <span slot="badge">6</span>
                    </v-badge>
                    <span
                      class="grey--text"
                    >Crie e administe seus próprios módulos Relacione a aplicações e área de negócios</span>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <!-- <v-btn flat>Share</v-btn> -->
                  <v-btn flat outline color="#1565C0">VISUALIZAR</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-slide-y-transition>
                  <v-card-text
                    v-show="show"
                  >I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                </v-slide-y-transition>
              </v-card>
            </v-flex>
            <v-flex xs3 pa-3>
              <v-card hover>
                <v-img
                  src="https://previews.123rf.com/images/floralset/floralset1610/floralset161000094/63416031-vector-illustration-workplace-table-with-documents-computer-flat-cloud-computing-background-media-da.jpg"
                  height="200px"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <div class="headline">TABELAS DE DOMÍNIO</div>
                    <span
                      class="grey--text"
                    >Crie e administe seus próprios módulos Relacione a aplicações e área de negócios</span>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <!-- <v-btn flat>Share</v-btn> -->
                  <v-btn flat outline color="#1565C0">VISUALIZAR</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-slide-y-transition>
                  <v-card-text
                    v-show="show"
                  >I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                </v-slide-y-transition>
              </v-card>
            </v-flex>
            <v-flex xs3 pa-3>
              <v-card hover>
                <v-img
                  src="https://png.pngtree.com/element_origin_min_pic/16/09/10/1057d3755347a02.jpg"
                  height="200px"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <div class="headline">BUSINESS MARKET</div>
                    <span
                      class="grey--text"
                    >Crie e administe seus próprios módulos Relacione a aplicações e área de negócios</span>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <!-- <v-btn flat>Share</v-btn> -->
                  <v-btn flat outline color="#1565C0">VISUALIZAR</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-slide-y-transition>
                  <v-card-text
                    v-show="show"
                  >I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                </v-slide-y-transition>
              </v-card>
            </v-flex>
            <v-flex xs3 pa-3>
              <v-card hover>
                <v-img
                  src="https://cdn.lynda.com/course/574702/574702-636281191819584994-16x9.jpg"
                  height="200px"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <div class="headline">CONFIGURAÇÕES</div>
                    <span
                      class="grey--text"
                    >Crie e administe seus próprios módulos Relacione a aplicações e área de negócios</span>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <!-- <v-btn flat>Share</v-btn> -->
                  <v-btn flat outline color="#1565C0">VISUALIZAR</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-slide-y-transition>
                  <v-card-text
                    v-show="show"
                  >I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                </v-slide-y-transition>
              </v-card>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </v-content>
    <v-btn fab bottom right color="#1565C0" dark fixed @click="dialog = !dialog">
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="grey lighten-4 py-4 title">Create contact</v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                  <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt>
                </v-avatar>
                <v-text-field placeholder="Name"></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field prepend-icon="business" placeholder="Company"></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field placeholder="Job title"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field prepend-icon="mail" placeholder="Email"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field prepend-icon="notes" placeholder="Notes"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script lang="ts">
import "./home.component.scss";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class HomeComponent extends Vue {
  isLoading: boolean = true;

  dialog: boolean = false;

  drawer: any = false;

  show: boolean = false;

  @Prop()
  source!: String;

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

  constructor(props: any) {
    super();
  }

  @Watch("$route", { deep: true, immediate: true })
  onRouterChanged($event: any) {
    console.log("router", $event);
  }

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

