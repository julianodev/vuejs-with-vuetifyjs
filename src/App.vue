<template>
  <HomeComponent :name="name"/>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import HomeComponent from "./components/home/home.component.vue";

@Component({
  name: "app",
  components: {
    HomeComponent
  }
})
export default class AppComponent extends Vue {
  @Prop()
  name: string = "Lucas Juliano";
}
</script>
