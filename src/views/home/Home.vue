<template>
  <div class="home">
    <div class="header">
      Olá {{onName()}}!!
    </div>
    <div class="itens">
      <div @click="onRoute('myorgactivity')" class="p-ripple activity" v-ripple>
        <i class="or or-lifestyle"></i>
        Atividades
      </div>
      <div class="p-ripple activity" v-ripple>
        Será desenvolvido?
      </div>
    </div>
  </div>
</template>

<script src="./home.js">
</script>

<style>
@import '../../assets/icons/icons.scss';
@import url("./home.scss");
</style>
