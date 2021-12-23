const redis = require('redis')

module.exports = {
  checkConnect: async (ctx, next) => {
    const client = redis.createClient({ socket: { port: 6379, host: 'redis' } })
    await client.connect();
    await client.set('msg', 'success')
    ctx.body = await client.get('msg');
  }
}