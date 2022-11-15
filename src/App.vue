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

</style>
