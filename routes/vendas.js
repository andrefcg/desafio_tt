async function routes(fastify, options) {
    fastify.get('/', async (req, reply) => {
        //const client = await fastify.pg.connect()
        const { rows } = await client.pg.query(
            'SELECT * FROM metas', 
        )
        //client.release()
        return rows;
    })
}

module.exports = routes;