<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
::-webkit-scrollbar{
  display: none;
}
#app {
  overflow: hidden;
}

</style>
