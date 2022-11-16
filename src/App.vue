<template>
  <router-view/>
  <Toast/>
</template>
<script>
import Toast from 'primevue/toast';
export default {
  components: {
    Toast
  }
}
</script>
<style lang="scss">
body{
  margin: 0px;
  height: 100vh;
  width: 100vw;
  background-color: #17212F;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:aliceblue;
}
::-webkit-scrollbar-track {
    background-color: #1F2D40;
}
::-webkit-scrollbar {
    width: 8px;
    background: #17212F;
}
::-webkit-scrollbar-thumb {
    background: #17212F;
}

</style>
