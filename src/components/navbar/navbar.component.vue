<template>
  <v-toolbar app fixed clipped-left color="#1867C0">
    <v-toolbar-side-icon style="color:#ffffff" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title style="color:#ffffff">Demo vuejs</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn icon class="icon-white">
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon class="icon-white">apps</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon class="icon-white">refresh</v-icon>
    </v-btn>

    <v-avatar color="green" size="40">
      <span class="white--text headline">L</span>
    </v-avatar>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class NavbarComponent extends Vue {
  @Prop()
  drawer: boolean = false;
}
</script>


<style lang="scss" scoped>
.icon-white {
  color: gainsboro !important;
}
</style>

