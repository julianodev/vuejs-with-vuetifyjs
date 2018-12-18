<template >
  <router-view/>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component({
  name: "app"
})
export default class AppComponent extends Vue {}
</script>

<style lang="scss">
</style>