async function routes(fastify, options) {
    fastify.get('/vendas', async (request, reply) => {
        return {
            data: [
                { loja: 'Arpoador', venda: 94, meta: 234, atingimento_de_meta: 0.4, qpd: 2.1 },
                { loja: 'Leblon', venda: 95, meta: 233, atingimento_de_meta: 0.4, qpd: 2.1 },
                { loja: 'Barra', venda: 96, meta: 236, atingimento_de_meta: 0.4, qpd: 2.1 },
                { loja: 'Total', venda: 97, meta: 235, atingimento_de_meta: 0.4, qpd: 2.1 }
            ]
        }
    })
}

module.exports = routes;