<template>
  <div class="c-buttons">
    <div class="c-add">
      <div><Button @click="onAdd()" icon="pi pi-plus" class="p-button-rounded p-button-success p-button-text" /></div>
    </div>
    <div class="c-filters">
      <div><Button @click="onBefore()" icon="pi pi-chevron-left" class="p-button-rounded p-button-text" /></div>
      <div><Calendar inputId="icon" v-model="form.data" :showIcon="true" dateFormat="dd/mm/yy" @date-select="onGetAll()"/></div>
      <div><Button @click="onAfter()" icon="pi pi-chevron-right" class="p-button-rounded p-button-text" /></div>
    </div>
  </div>
  <div class="c-listactivity">
    <div @click="onEdit(item.id)" v-for="item in listItens" :key="item.id" class="p-ripple c-item" v-ripple>
      <div class="c-priority">
      </div>
      <div class="c-content">
        <div class="c-text">
          <div class="c-text-title">
            {{item.title}}
            <div style="font-size: 14px">{{onFormatDate(item.data)}}</div>
          </div>
          <div class="c-text-description">
            {{item.description}}
          </div>
        </div>
        <div class="c-check">
          <div v-if="item.status == 1"><i class=" pi pi-check" style="color: #4aff56;"></i></div>
          <div v-else-if="item.status == 2"><i class=" pi pi-times" style="color: #db305e;"></i></div>
          <div v-else-if="item.status == 0"><i class=" pi pi-question" style="color: #d5f03e;"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./listactivity.js">
</script>

<style>
@import '../../assets/icons/icons.scss';
@import url("listactivity.scss");
</style>
