<template>
  <div class="login d-flex flex-column justify-content-center align-items-center">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <b-card class="login-box">
        <h2>
            Login
        </h2>
        <b-card-text align="left">
            Endereço de email:
        </b-card-text>
        <b-form-input v-model="email" placeholder="Digite o e-mail"></b-form-input>
        <br>
        <b-card-text align="left">
            Senha:
        </b-card-text>
        <b-form-input v-model="senha" type="password"></b-form-input>
        <br>
        <b-button class="login-button" variant="dark">Entrar</b-button>
        <!--<div class="mt-2">Values: <br>
            {{ email }}<br>
            {{ senha }}</div>-->
    </b-card>
  </div>
</template>


<script>
    export default {
        data() {
            return {
                email: '',
                senha: '',
            }
        }
    }
</script>

<style scoped>
.login {
    
    background-color: black;
    min-height: 100vh;
}

.login-box {
    max-width: 90%;
    width: 18rem;
    margin-right: auto;
    margin-left: auto;
}

.login-button {
    width: 100%;
}
</style>