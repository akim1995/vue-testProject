<template>
  <div id="app" class="container">
    <app-header />
    <router-view />
  </div>
</template>

<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppHeader from "@/components/header/Header.vue";
@Component({
  components: {
    AppHeader
  }
})
export default class App extends Vue {

}
</script>
<style lang="scss">
  body {
    padding: 30px;
  }
</style>

