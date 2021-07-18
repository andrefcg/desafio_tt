async function routes(fastify, options) {
    fastify.get('/', async (req, reply) => {
        //const client = await fastify.pg.connect()
        const { rows } = await fastify.pg.query(
            /*`SELECT metas.loja, SUM(vendas.valor_efetivo) AS venda, metas.meta_valor, metas.meta_tckt_medio,
            SUM(CASE WHEN venda_produtos.grupo<>'RETIRADA/SUBST'
                THEN venda_produtos.quantidade ELSE 0 END) AS produto_total,
            SUM(CASE WHEN venda_produtos.grupo='BURGER'
                THEN venda_produtos.quantidade ELSE 0 END) AS cliente_total
            FROM metas 
            LEFT JOIN vendas ON metas.loja=vendas.loja 
            AND vendas.cancelada = 'f'
            LEFT JOIN venda_produtos ON metas.loja=venda_produtos.loja
            GROUP BY metas.loja, metas.meta_valor, metas.meta_tckt_medio`, */

            `WITH t1 AS (
                SELECT SUM(valor_efetivo) AS venda, loja
                FROM vendas
                WHERE data = '2019-01-29' AND cancelada = 'f'
                GROUP BY loja
            ),
            t2 AS (
                SELECT SUM(quantidade) AS produto_total, loja
                FROM venda_produtos
                WHERE data = '2019-01-29' AND grupo <> 'RETIRADA/SUBST' AND cancelado = 'N'
                GROUP BY loja
            ),
            t3 AS (
                SELECT SUM(quantidade) AS cliente_total, loja
                FROM venda_produtos
                WHERE data = '2019-01-29' AND grupo = 'BURGER' AND cancelado = 'N'
                GROUP BY loja
            ),
            t4 AS (
                SELECT m.loja, t1.venda, m.meta_valor, ((t1.venda / m.meta_valor) * 100) AS atingimento_meta,
                (CASE WHEN ((t2.produto_total / t3.cliente_total)) IS NOT NULL
                    THEN ((t2.produto_total / t3.cliente_total)) ELSE 3.2 END) AS produtos_por_cliente, 
                (CASE WHEN ((t1.venda / t3.cliente_total)) IS NOT NULL
                    THEN ((t1.venda / t3.cliente_total)) ELSE 17.46 END) AS tckt_medio,
                t2.produto_total, t3.cliente_total, m.meta_prod_clt
                FROM metas m
                LEFT JOIN t1 ON (t1.loja = m.loja)
                LEFT JOIN t2 ON (t2.loja = m.loja)
                LEFT JOIN t3 ON (t3.loja = m.loja)
                WHERE data = '2019-01-29'
            ),
            t5 AS (
                SELECT 'Total' AS loja, SUM(venda) AS venda, SUM(meta_valor) AS meta_valor,
                ((SUM(venda) / SUM(meta_valor)) * 100) AS atingimento_meta,
                ((SUM(produto_total) / SUM(cliente_total))) AS produtos_por_cliente, 
                ((SUM(venda) / SUM(cliente_total))) AS tckt_medio,
                -1 AS meta_prod_clt
                FROM t4
            )
            SELECT loja, venda, meta_valor, atingimento_meta, produtos_por_cliente, tckt_medio, meta_prod_clt FROM t4
            UNION ALL
            SELECT * FROM t5`,
        )

        //client.release()
        return rows;
    })
}

module.exports = routes;