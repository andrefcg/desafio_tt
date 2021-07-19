<template>
    <div class="main">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand class="f-brother" href="javascript:void(0)">T.T. Burger</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="javascript:void(0)"><strong>Início</strong></b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/"><strong>Logout</strong></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <div class="sales-main d-flex flex-column justify-content-center align-items-center">
            <img class="tt-logo" src="../assets/logo_TT_black.png">
            <br>
            <h3>
                <strong class="f-brother">Acompanhamento de Vendas</strong>
            </h3>
            <b-table class='table d-none d-lg-block' striped bordered responsive sticky-header hover 
            head-variant="dark" :items="items" :fields="fields">
                <template #head(loja)>
                    <b-form-datepicker id="example-datepicker" v-model="date_value" class="mb-2 datepick"
                    :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric'}"
                    placeholder="--/--/----" size="sm"/>
                </template>
                <template #cell(loja)="data">
                    <strong class='cell-loja'>{{ data.value }}</strong>
                </template>
                <template #cell()="data">
                    <strong><div v-html=data.value></div></strong>
                </template>
            </b-table>
            <b-table class='table d-lg-none' striped bordered responsive sticky-header hover 
            head-variant="dark" :items="items" :fields="fields_small">
                <template #head(loja)>
                    <b-form-datepicker id="example-datepicker" v-model="date_value" class="mb-2 datepick"
                    :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric'}"
                    placeholder="--/--/----" size="sm"/>
                </template>
                <template #cell(loja)="data">
                    <strong class='cell-loja'>{{ data.value }}</strong>
                </template>
                <template #cell()="data">
                    <strong><div v-html="data.value"></div></strong>
                </template>
            </b-table>
            <font-awesome-icon icon="arrow-down" :style="{ color: 'red', display:'none'}"/>
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
                        formatter: (v) => {
                            return this.number_format(v);
                        },
                    },
                    {
                        key: 'meta_valor',
                        label: 'Meta (R$)',
                        formatter: (v) => {
                            return this.number_format(v);
                        },
                    },
                    {
                        key: 'atingimento_meta',
                        label: 'Atingimento de Meta (%)',
                        formatter: (v) => {
                            return this.number_format(v) + '%';
                        },
                    },
                    {
                        key: 'produtos_por_cliente',
                        label: 'Quantidade de produtos / cliente',
                        formatter: (v) => {
                            return this.arrow_add(v);
                        },
                    },
                    {
                        key: 'tckt_medio',
                        label: 'Ticket Médio / cliente',
                        formatter: (v) => {
                            return this.number_format(v);
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
                        formatter: (v) => {
                            return this.number_format(v);
                        },
                    },
                    {
                        key: 'meta_valor',
                        label: 'Meta',
                        formatter: (v) => {
                            return this.number_format(v);
                        },
                    },
                    {
                        key: 'atingimento_meta',
                        label: 'Ating. Meta',
                        formatter: (v) => {
                            return this.number_format(v) + '%';
                        },
                    },
                    {
                        key: 'produtos_por_cliente',
                        label: 'Qntd. prod/cliente',
                        formatter: (v) => {
                            return this.arrow_add(v);
                        },
                    },
                    {
                        key: 'tckt_medio',
                        label: 'Ticket Médio/cliente',
                        formatter: (v) => {
                            return this.number_format(v);
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
                    this.items[this.items.length-1]._rowVariant= 'secondary';
                    for (let i = 0; i < this.items.length-1; i++)
                    {
                        if (this.items[i].produtos_por_cliente > this.items[i].meta_prod_clt)
                           this.items[i].produtos_por_cliente+='^'; 
                        else if (this.items[i].produtos_por_cliente < this.items[i].meta_prod_clt)
                           this.items[i].produtos_por_cliente+='v'; 
                    }
                } 
                catch (error) {
                    console.error(error);
                }
            },
            arrow_add(v) {
                let sub=v.substr(v.length - 1);
                let add='', value=v;
                if (sub=='^' || sub=='v')
                {
                    if (sub=='^')
                        add=` <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-up fa-w-14" style="color: green;"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z" class=""></path></svg>`;
                    else
                        add=` <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-down fa-w-14" style="color: red;"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" class=""></path></svg>`;
                    value=value.substring(0,value.length-1);
                    
                }
                return this.number_format(value)+add;
            },
            number_format(v) {
                let text=(Math.round((v*100))).toString();
                let sub={}, i=text.length-2,j=1;
                sub[0]=text.substring(text.length-2);
                sub[1]='0';
                while (i>0)
                {
                    sub[j]=text.substring(i-3,i);
                    j+=1;
                    i-=3;
                }
                text='';
                j-=1;
                while (j>=1)
                {
                    let add='.';
                    if (j==1)
                        add='';
                    text+=sub[j]+add;
                    j-=1;
                }
                text+=','+sub[0];
                if (sub[1]=='0')
                    text='0'+text;
                return text;
            }
        }
    }
</script>

<style>
    .f-brother {
        font-family: Brothers,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .sales-main, .main {
        height: calc(100vh - 56px);
    }
    
    .tt-logo {
        width: 15rem;
        max-width: 70vw;
        margin-top: 1rem;
    }
    .table {
        max-width: 63rem;
        margin: 0;
    }
    .datepick {
        width: 8rem;
        margin: 0 !important;
    }
    .table .thead-dark th {
        background-color: #212529!important;
        font-size: 15px;
    }
    .bg-dark {
        background-color: #000000!important;
    }
    .cell-loja {
        color: #3c59ff;
    }
    .cell-foot {
        background-color: #c0c0c0!important;
    }
    .main{
        height: 100%;
    }

    @media (min-width: 992px) {
        .tt-logo {
            width: 20rem;
            max-width: 80vw;
            margin-top: 0;
        }
    }
</style>