<template>
  <div class="notes">
    <div class="header-notes">
      {{ translation.onTranslate('note') }}
    </div>
    <div class="c-list">
      <DataTable 
      selectionMode="single" 
      paginator 
      :rows="5" 
      :rowsPerPageOptions="[5, 10, 20, 50]" 
      :globalFilterFields="['description', 'created_date']" 
      stripedRows 
      :value="itens"
      @rowSelect="onRowSelect"
      tableStyle="min-width: 100%; max-height: 100%">
        <template #header>
          <div class="flex justify-content-between">
            <div style="margin-right: 10px"><Button @click="onAdd()" icon="pi pi-plus" class="p-button-rounded p-button-success p-button-text" /></div>
              <span class="p-input-icon-left">
                  <i class="pi pi-search" />
                  <InputText v-model="fieldFilter" @keypress.enter="onFilter()"  placeholder="Filter" />
              </span>
          </div>
        </template>
        <Column sortable field="title" header="Descrição" style="min-width: 250px"></Column>
        <Column sortable field="created_date" header="Data Criação" style="max-width: 150px"></Column>
    </DataTable>
    </div>
  </div>
</template>

<script src="./note.js">
</script>

<style>
@import '../../../assets/icons/icons.scss';
@import url("note.scss");
</style>
