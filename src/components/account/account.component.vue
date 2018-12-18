<template>
  <v-container grid-list-md text-md-center fill-height>
    <v-layout row wrap align-center fill-height>
      <v-toolbar color="#FFFFFF" class="elevation-0 toolbar-logo-company" fixed app>
        <img src="@/assets/logo-broker-small.png" alt="Logo broker" height="50">
      </v-toolbar>

      <v-flex xs12>
        <h1 style="color:#2C518F">Por favor, selecione uma conta</h1>
      </v-flex>

      <v-layout align-center justify-center row>
        <v-flex xs2>
          <router-link to="/" tag="card">
            <v-card hover>
              <v-card class="elevation-0">
                <v-img
                  src="https://static.wixstatic.com/media/3fbea1_e0817615dcb5479696d1a8b2b7d55df3~mv2.png/v1/fill/w_226,h_72,al_c,q_80,usm_0.66_1.00_0.01/3fbea1_e0817615dcb5479696d1a8b2b7d55df3~mv2.webp"
                  aspect-ratio="1.5"
                ></v-img>
              </v-card>

              <v-card-title primary-title class="text-md-center" style="justify-content:center">
                <h3 class="headline" style="text-align:center !important;font-weight:bold">Broker</h3>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs2>
          <v-card hover>
            <v-card class="elevation-0">
              <v-img
                src="https://ccssp2013.files.wordpress.com/2016/04/logo-sura-alta-2.jpg"
                aspect-ratio="1.5"
              ></v-img>
            </v-card>

            <v-card-title primary-title class="text-md-center" style="justify-content:center">
              <h3 class="headline" style="text-align:center !important;font-weight:bold">Sura</h3>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card hover>
            <v-card class="elevation-0">
              <v-img
                src="https://scontent.fcgh11-1.fna.fbcdn.net/v/t1.0-9/564855_327937817260112_213860434_n.jpg?_nc_cat=1&_nc_ht=scontent.fcgh11-1.fna&oh=185afa15275c000de368c9c5193906fe&oe=5C93DE02"
                aspect-ratio="1.5"
              ></v-img>
            </v-card>

            <v-card-title primary-title class="text-md-center" style="justify-content:center">
              <h3 class="headline" style="text-align:center !important;font-weight:bold">Icatu</h3>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card hover>
            <v-card class="elevation-0">
              <v-img
                src="https://www.mongeralaegon.com.br/image/cms/partnership/1313/williams-seguro-about.png"
                aspect-ratio="1.5"
              ></v-img>
            </v-card>

            <v-card-title primary-title class="text-md-center" style="justify-content:center">
              <h3 class="headline" style="text-align:center !important;">Williams</h3>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>

      <v-flex xs12>
        <v-btn large outline color="#2C518F">GERENCIAR PERFIS</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class AccountComponent extends Vue {}
</script>


<style lang="scss" scoped>
.toolbar-logo-company {
  margin-top: 20px !important;
}
</style>

