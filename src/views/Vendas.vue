<template>
    <div class="main">
        <!--<h3 class="ttnav">
            <b-row class="ttnav-row text-center text-middle d-flex" align-v="center">
                <b-col>T.T. Burger</b-col>
                <! --<b-col cols="7" class="text-left">test</b-col>-- >
                <b-col>Logout</b-col>
            </b-row>
        </h3>-->
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">T.T. Burger</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#" disabled>Início</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">Logout</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <div class="sales-main d-flex flex-column justify-content-center align-items-center">
            <img class="tt-logo" src="../assets/logo_TT_black.png">
            <br>
            <h3>
                <strong>Acompanhamento de Vendas</strong>
            </h3>
            <b-table class='table d-none d-lg-block' striped bordered responsive hover :items="items" :fields="fields">
                <template #head(loja)>
                    <b-form-datepicker id="example-datepicker" v-model="date_value" class="mb-2 datepick"
                    :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric'}"
                    placeholder="--/--/----" size="sm"/>
                </template>
            </b-table>
            <b-table class='table d-lg-none' striped bordered responsive hover :items="items" :fields="fields_small">
                <template #head(loja)>
                    <b-form-datepicker id="example-datepicker" v-model="date_value" class="mb-2 datepick"
                    :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric'}"
                    placeholder="--/--/----" size="sm"/>
                </template>
            </b-table>
            
            <!--{{ date_value }} -->
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
                        //sortable: true,
                        formatter(v){
                            return (Math.round((v*10)))/100;
                        },
                    },
                    {
                        key: 'meta_valor',
                        label: 'Meta (R$)',
                        //sortable: true,
                        formatter(v){
                            return (Math.round((v*10)))/100;
                        },
                    },
                    {
                        key: 'atingimento_meta',
                        label: 'Atingimento de Meta (%)',
                        //sortable: true,
                        formatter(v){
                            return ((Math.round((v * 10))) / 10) + '%';
                        },
                    },
                    {
                        key: 'produtos_por_cliente',
                        label: 'Quantidade de produtos / cliente',
                        //sortable: true,
                        formatter(v){
                            return (Math.round((v*10)))/10;
                        },
                    },
                    {
                        key: 'tckt_medio',
                        label: 'Ticket Médio / cliente',
                        //sortable: true,
                        formatter(v){
                            return (Math.round((v*10)))/10;
                        },
                    },
                ],
                fields_small: [
                    {
                        key: 'loja',
                    },
                    {
                        key: 'venda',
                        label: 'Venda',
                        //sortable: true,
                        formatter(v){
                            return (Math.round((v*10)))/100;
                        },
                    },
                    {
                        key: 'meta_valor',
                        label: 'Meta',
                        //sortable: true,
                        formatter(v){
                            return (Math.round((v*10)))/100;
                        },
                    },
                    {
                        key: 'atingimento_meta',
                        label: 'Ating. Meta',
                        //sortable: true,
                        formatter(v){
                            return ((Math.round((v * 10))) / 10) + '%';
                        },
                    },
                    {
                        key: 'produtos_por_cliente',
                        label: 'Qntd. prod/cliente',
                        //sortable: true,
                        formatter(v){
                            return (Math.round((v*10)))/10;
                        },
                    },
                    {
                        key: 'tckt_medio',
                        label: 'Ticket Médio/cliente',
                        //sortable: true,
                        formatter(v){
                            return (Math.round((v*10)))/10;
                        },
                    },
                ],
                items: {},
                date_value: '2019-01-29',
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
    
    .tt-logo {
        width: 15rem;
        max-width: 70vw;
        margin-top: 1rem;
    }
    .table {
        max-width: 65rem;
    }
    .datepick {
        width: 8rem;
        margin: 0 !important;
    }
    .bg-dark {
        background-color: #000000!important;
    }
    @media (min-width: 992px) {
        .tt-logo {
            width: 20rem;
            max-width: 80vw;
            margin-top: 0;
        }
    }
</style>