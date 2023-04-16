<template>
  <div class="c-item-header">
    {{dia}} - {{ dayWritter }}
  </div>
  <div @dragexit="drop(dia)" @dragover="drop(dia)"  draggable="true"  @click="onEdit(item.id)" v-for="item in itens" :key="item.id" class="p-ripple c-item" v-ripple>
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
</template>

<script src="./item-activity.js">
</script>
