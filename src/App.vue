<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Todo Management.</h1>
    <hr />
    <router-view/>
        <!-- vue-router.Router を読み込んだ src/router/index.js に定義されている 
              vue-router はルーティングと、それに対応して出力するコンポーネントを決めている

              -->
  </div>
</template>
<!-- vue-loader というモジュールでブラウザで読み込める形へコンパイルされる
    ここでは、 App コンポーネントを定義している -->
<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
