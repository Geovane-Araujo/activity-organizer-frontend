<template>
  <div class="form-note">
    <div class="form-header-note">
      Cadastro Anotações
    </div>
    <div class="card-form-note">
      <div class="fields p-fluid grid">
        <div class="col-12 md:col-12">
          <div class="field">
            <label for="username">Titulo</label>
            <InputText id="username" type="text" v-model="form.title" />
          </div>
        </div>
        <div class="col-12 md:col-12">
          <div class="field">
            <label for="username">Descricao</label>
            <Editor v-model="form.description" editorStyle="height: 400px" />
          </div>
        </div>
      </div>
        <div class="btns-form">
          <div class="fields p-fluid grid">
            <div class="col-12 md:col-12">
              <Button @click="onDelete()" label="Excluir" class="p-button-danger" />
            </div>
          </div>
          <div class="fields p-fluid grid">
            <div class="col-6 md:col-6">
              <Button @click="onReturn()" label="Cancelar" class="p-button-warning" />
            </div>
            <div class="col-6 md:col-6">
              <Button @click="onSave()" label="Salvar"  class="p-button-info"/>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script src="./form-note.js">
</script>

<style lang="scss" scoped>
@import url('./form-note.scss');
</style>
