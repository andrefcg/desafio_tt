<template>
  <div class="login d-flex flex-column justify-content-center align-items-center">
    <img class="tt-logo" alt="TT logo" src="../assets/logo_tt.png">
    <br>
    <b-card class="login-box">
        <h2>
            Login
        </h2>
        <b-alert show v-if="error">A conta informada não existe</b-alert>
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
        <b-button class="login-button" variant="dark" @click="clique">Entrar</b-button>
    </b-card>
  </div>
</template>


<script>
    export default {
        data() {
            return {
                email: '',
                senha: '',
                error: false,
            }
        },
        methods: {
            clique() {
                if (this.email != 'adm' || this.senha != 'adm')
                {
                    this.error=true;
                }
                else
                {
                    this.error=false;
                    this.$router.push('/vendas');
                }
            }
        }
    }
</script>

<style scoped>
.login {
    font-family: Brothers,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

.tt-logo {
    width: 12rem;
}
</style>