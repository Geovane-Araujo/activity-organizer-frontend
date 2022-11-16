<template>
  <div class="form-activity">
    <div class="form-header-activity">
      Cadastro Atividades
    </div>
    <div class="card-form-activity">
      <div class="fields p-fluid grid">
        <div style="margin-top: 8px;" class="col-12 md:col-4">
          <span class="p-float-label">
            <Calendar inputId="icon" v-model="form.data" :showIcon="true" :showTime="true" dateFormat="dd/mm/yy"/>
            <label for="username">Data</label>
          </span>
        </div>
        <div style="margin-top: 8px;" class="col-1 md:col-8">
          <span class="p-float-label">
            <Dropdown v-model="form.status" :options="status" optionLabel="name" optionValue="code" />
            <label for="username">Status</label>
          </span>
        </div>
        <div class="col-12 md:col-12">
          <span class="p-float-label">
            <InputText id="username" type="text" v-model="form.title" />
            <label for="username">Titulo</label>
          </span>
        </div>
        <div class="col-12 md:col-12">
          <span class="p-float-label">
            <Textarea id="username" rows="15"  :autoResize="true"   v-model="form.description" />
            <label for="username">Descricao</label>
          </span>
        </div>
      </div>
        <div class="btns-form">
          <div class="fields p-fluid grid">
            <div class="col-12 md:col-12">
              <Button @click="onDelete()" label="Excluir" class="p-button-danger" />
            </div>
          </div>
          <div class="fields p-fluid grid">
            <div class="col-12 md:col-6">
              <Button @click="onReturn()" label="Cancelar" class="p-button-warning" />
            </div>
            <div class="col-12 md:col-6">
              <Button @click="onSave()" label="Salvar"  class="p-button-info"/>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script src="./form-activity.js">
</script>

<style lang="scss" scoped>
@import url('./form-activity.scss');
</style>
