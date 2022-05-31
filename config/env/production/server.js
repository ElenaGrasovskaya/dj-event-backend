module.exports = ({ env }) => ({
    proxy: true,
    url: env('MY_HEROKU_URL'),
    app: { 
      keys: env.array({keys: ['myKeyA', 'myKeyB']})
    },
  })