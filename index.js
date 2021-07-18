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

fastify.register(require('./routes/vendas'),{prefix:'vendas'})

fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`server listening on ${address}`);
    fastify.log.info(`server listening on ${address}`)
})