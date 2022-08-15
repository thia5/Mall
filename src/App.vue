<template>
  <div id="app">
    <h2>hhhhhhhhhhh</h2>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar.vue'

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
