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
      <v-container fluid fill-height>
        <v-layout column justify-center align-center v-if="isLoading">
          <v-progress-circular :size="150" color="primary" indeterminate></v-progress-circular>
          <label
            style="font-size:18px;color: #6C6E6F;text-align:center;margin-top:20px"
          >Aguarde carregando módulos</label>
        </v-layout>

        <v-layout column v-if="!isLoading">
          <v-flex sm1>
            <v-breadcrumbs :items="breadcrumbsItems" divider=">"></v-breadcrumbs>
          </v-flex>

          <v-layout row align-start>
            <v-flex xs3 pa-3>
              <v-card hover>
                <v-img
                  src="https://static.vecteezy.com/system/resources/previews/000/144/801/non_2x/free-flat-workspace-vector-background.jpg"
                  height="200px"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <div class="headline">PRODUTOS
                      <v-chip small outline dark>
                        <strong>3</strong>
                      </v-chip>
                    </div>
                    <v-badge v-model="show" color="dark" left>
                      <span slot="badge">6</span>
                    </v-badge>
                    <span class="grey--text">Crie e administe seus próprios produtos</span>
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
                  src="https://images.all-free-download.com/images/graphicthumb/workspace_concept_with_tidy_arrangement_of_tools_6825245.jpg"
                  height="200px"
                ></v-img>

                <v-card-title primary-title class="text-truncate">
                  <div>
                    <div class="headline">APPLICATION</div>
                    <div
                      class="grey--text"
                    >Crie e administe seus próprios módulos Relacione a aplicações e área de negócios</div>
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

                <v-card-title primary-title class="text-truncate">
                  <div>
                    <div class="headline">SETTINGS</div>
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

    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-btn fab bottom right color="#1565C0" dark fixed slot="activator">
        <v-icon>add</v-icon>
      </v-btn>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>User Controls</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Content filtering</v-list-tile-title>
              <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Password</v-list-tile-title>
              <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Notifications</v-list-tile-title>
              <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Sound</v-list-tile-title>
              <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Auto-add widgets</v-list-tile-title>
              <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-dialog>
    <v-footer color="#FAFAFA" style="color:#C1C1C1" app>
      <v-layout justify-center>
        <span>Broker Consultoria e Soluções de TI &nbsp; &copy; 2018</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class HomeDetailsComponent extends Vue {
  isLoading: boolean = true;

  dialog: boolean = false;

  drawer: any = false;

  show: boolean = false;

  @Prop()
  source!: String;

  breadcrumbsItems: any = [
    {
      text: "Broker Admin",
      disabled: true,
      href: "/broker-admin"
    },
    {
      text: "Account",
      disabled: false,
      href: "/broker-admin"
    },
    {
      text: "Businnes Market",
      disabled: true,
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

