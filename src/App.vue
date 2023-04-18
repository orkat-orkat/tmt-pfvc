<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, computed } from 'vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import Main from './components/Main.vue';
import Home from './components/Home.vue';
import NotFound from './components/NotFound.vue';
//パスとコンポーネント名からなるルーティング情報のオブジェクトを定義
const routes = {
  '/': Home,
  '/about': About
};
 
//URL のフラグメント（# 記号からの部分）を取得してリアクティブに
const currentPath = ref(window.location.hash);
 
//hashchange のイベントリスナー
window.addEventListener('hashchange', () => {
  //hashchange イベントでフラグメントを取得して currentPath の value プロパティを更新
  currentPath.value = window.location.hash;
  //console.log(currentPath.value); //About のリンクをクリックすると #/about と出力
});
 
//currentPath.value と routes からコンポーネント名を生成
const currentView = computed(() => {
  //currentPath.value.slice(1) は「#」を除いた値（該当しなければ NotFound）
  return routes[currentPath.value.slice(1) || '/'] || NotFound;
});
</script>

<template>
  <TheHeader />
  <a href="/">Home</a> |
  <a href="/About">About</a>
  <a href="/non-existent-path">Broken Link</a>

  <a href="../non-existent-path">damek</a>
  <component :is="currentView" />

  <router-link to="/">Home</router-link> |
    <router-link to="/About">About</router-link> |
    <router-link to="/Home">Home</router-link>

    
  <TheFooter />
</template>

<style>
@import 'assets/css/destyle.css';
@import 'assets/css/base.css';
.wrap{
  display: flex;
  flex-direction:column;
  align-items: center;
  min-height: 100vh;
  widows: 480px;
  margin: 0 auto;
  font-family: sans-serif;
}

.main{
  flex:1;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
