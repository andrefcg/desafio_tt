const fastify = require('fastify')({
    logger: false
})

fastify.register(require('fastify-postgres'), {
    user: process.env.USUARIO_POSTGRES,
    host: process.env.HOST_POSTGRES,
    database: process.env.DATABASE_POSTGRES,
    password: process.env.SENHA_POSTGRES,
    port: 5432,
})

//fastify.register(require('./route-1'))
fastify.get('/vendas', async (req, reply) => {
    const client = await fastify.pg.connect()
    const { rows } = await client.query(
        'SELECT * FROM metas', 
    )
    client.release()
    return rows
})

fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})