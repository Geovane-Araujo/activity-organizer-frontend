<template>
  <div class="login">
    <div class="card-login ">
      <div class="header-card" >
        MyOrganize
      </div>
      <div class="fields p-fluid grid">
        <div class="col-12 md:col-12">
          <span class="p-float-label">
            <InputText id="username" type="text" v-model="form.email" />
            <label for="username">Email</label>
          </span>
        </div>
        <div style="margin-top: 8px;" class="col-1 md:col-12">
          <span class="p-float-label">
            <Password :feedback="false" id="username" v-model="form.password" />
            <label for="username">Senha</label>
          </span>
        </div>
      </div>
      <div class="forgot-pass">
        Esqueceu a senha?
      </div>
      <div class="fields p-fluid grid">
        <div class="col-12 md:col-12">
          <Button @click="onLogin()" label="Entrar"  class="p-button-info"/>
        </div>
        <div class="col-12 md:col-12">
          <Button @click="onRegister()" label="Registrar" class="p-button-warning" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./login.js">
</script>

<style lang="scss" scoped>
@import url('./login.scss');
</style>
