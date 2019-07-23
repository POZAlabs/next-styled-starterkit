const prod = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    CAN_USE_ENV: 'TRUE',
    ENVIRONMENT: prod ? 'production' : 'development'
  }
}