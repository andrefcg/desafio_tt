<template>
    <div class="main">
        <h3 class="ttnav">
            <b-row class="ttnav-row text-center text-middle d-flex" align-v="center">
                <b-col>T.T. Burger</b-col>
                <!--<b-col cols="7" class="text-left">test</b-col>-->
                <b-col>Logout</b-col>
            </b-row>
        </h3>
        
        <div class="sales-main d-flex flex-column justify-content-center align-items-center">
            <img class="TT-logo" src="../assets/logo_TT_black.png">
            <br>
            <h3>
                <strong>Acompanhamento de Vendas</strong>
            </h3>
            <b-table striped bordered responsive hover :items="items" :fields="fields">
                <template #head(loja)>
                    <b-form-datepicker id="example-datepicker" v-model="date_value" class="mb-2"
                    :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric'}"
                    placeholder="--/--/----" size="sm"/>
                </template>
            </b-table>
            <!--{{ items }}-->
        </div>
    </div>
</template>

<script>
    
    import axios from 'axios';
    
    export default {
        data() {
            return {
                fields: [
                    {
                        key: 'loja',
                    },
                    {
                        key: 'venda',
                        label: 'Venda (R$)',
                        sortable: true,
                    },
                    {
                        key: 'meta_valor',
                        label: 'Meta (R$)',
                        sortable: true,
                    },
                    {
                        key: 'atingimento_de_meta',
                        label: 'Atingimento de Meta (%)',
                        sortable: true,
                    },
                    {
                        key: 'qpd',
                        label: 'Quantidade de produtos / cliente',
                        sortable: true,
                    },
                ],
                items: {},/*[
                    { loja: 'Arpoador', venda: 94, meta: 234, atingimento_de_meta: 0.4, qpd: 2.1},
                    { loja: 'Leblon', venda: 95, meta: 233, atingimento_de_meta: 0.4, qpd: 2.1 },
                    { loja: 'Barra', venda: 96, meta: 236, atingimento_de_meta: 0.4, qpd: 2.1 },
                    { loja: 'Total', venda: 97, meta: 235, atingimento_de_meta: 0.4, qpd: 2.1 }
                ],*/
                date_value: '',
            }
        },
        mounted() {
            this.loadData();
        },
        methods: {
            async loadData() {
                try {
                    const { data } = await axios.get('/vendas');
                    this.items= data;
                    //console.log(response);
                } 
                catch (error) {
                    console.error(error);
                }
            }
        }
    }
</script>

<style scoped>
    .ttnav {
        background-color: black;
        min-height: 5rem;
        color: #ffffff;
    }

    .ttnav, .ttnav-row {
        min-height: 5rem;
    }

    .sales-main, .main {
        height: calc(100vh - 5rem);
    }
    .TT-logo {
        width: 20rem;
        max-width: 80vw;
    }
</style>