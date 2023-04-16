<template>
  <div class="c-buttons">
    <div class="c-add p-fluid">
      <div style="margin-right: 10px"><Button @click="onAdd()" icon="pi pi-plus" class="p-button-rounded p-button-success p-button-text" /></div>
      <div style="margin-right: 10px"><Button @click="onAdd()" icon="pi pi-filter" class="p-button-rounded p-button-success p-button-text" /></div>
      <div v-show="true" style="margin-right: 10px"><Button @click="onBefore()" icon="pi pi-chevron-left" class="p-button-rounded p-button-text" /></div>
      <div v-show="true" style="margin-right: 10px"><Button @click="onAfter()" icon="pi pi-chevron-right" class="p-button-rounded p-button-text" /></div>
      <div style="margin-right: 10px"><Calendar  inputId="icon" v-model="dataStart" :showIcon="true" dateFormat="dd/mm/yy" @date-select="onGetAll()"/></div>
    </div>
  </div>
  <div class="c-kanban">
    <div v-for="it in itens" :key="it" class="c-listactivity">
      <ItemActivity :onEditDate="onEditDate" :dia="it.dia" :dayWritter="it.dayWritter" :itens="it.listItens" :onEdit="onEdit" :onFormatDate="onFormatDate"/>
    </div>
  </div>
</template>

<script src="./listactivity.js">
</script>

<style>
@import '../../assets/icons/icons.scss';
@import url("listactivity.scss");
</style>
