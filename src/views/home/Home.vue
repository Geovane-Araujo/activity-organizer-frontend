<template>
  <div class="header">
    <div class="logo">
      <i class="or or-logo"></i>
    </div>
    <div class="options fields p-fluid grid" >
      <div class="col-12 md:col-12">
        <div class="field">
          <Dropdown @change="onSelect"  v-model="language" inputId="icon" :options="status" optionLabel="name" optionValue="code" placeholder="Idioma" />
        </div>
      </div>
    </div>
  </div>
  <div class="home">
    <div class="itens">
      <div @click="onRoute('myorgactivity')" class="p-ripple activity" v-ripple>
        <i class="or or-lifestyle"></i>
        {{ translation.onTranslate('activity') }}
      </div>
      <div @click="onRoute('myorgnote')" class="p-ripple activity" v-ripple>
        <i class="or or-note"></i>
        {{ translation.onTranslate('note') }}
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
