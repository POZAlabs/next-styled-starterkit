const prod = process.env.NODE_ENV === 'production';

module.exports = {
  env: { // provide configuration values in build time
    CAN_USE_ENV: 'TRUE',
    ENVIRONMENT: prod ? 'production' : 'development'
  }
}