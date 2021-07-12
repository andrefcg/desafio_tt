<template>
    <div class="main">
        <h2 class="ttnav">
            <b-row class="ttnav-row text-center text-middle d-flex" align-v="center">
                <b-col>T.T. Burger</b-col>
                <!--<b-col cols="7" class="text-left">test</b-col>-->
                <b-col>Logout</b-col>
            </b-row>
        </h2>
        
        <div class="sales-main d-flex flex-column justify-content-center align-items-center">
            <h3>
                Acompanhamento de Vendas
            </h3>
            <b-table striped bordered responsive hover :items="items"/>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { loja: 'Arpoador', venda: 94, meta: 233, atingimento_de_meta: 0.4, qpd: 2.1},
          { loja: 'Leblon', venda: 94, meta: 233, atingimento_de_meta: 0.4, qpd: 2.1 },
          { loja: 'Barra', venda: 94, meta: 233, atingimento_de_meta: 0.4, qpd: 2.1 },
          { loja: 'Total', venda: 94, meta: 233, atingimento_de_meta: 0.4, qpd: 2.1 }
        ]
      }
    }
  }
</script>

<style scoped>
    .ttnav {
        background-color: black;
        min-height: 5rem;
    }

    .ttnav, .ttnav-row {
        min-height: 5rem;
    }

    .sales-main, .main {
        height: 100%;
    }
</style>