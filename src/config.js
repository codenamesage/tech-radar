const config = () => {
  const env = {
    production: {
      featureToggles: {
        UIRefresh2022: true,
      },
      apiKey: process.env.API_KEY,
    },
    development: {
      featureToggles: {
        UIRefresh2022: true,
      },
      apiKey: process.env.API_KEY,
    },
  }
  return process.env.ENVIRONMENT ? env[process.env.ENVIRONMENT] : env
}
module.exports = config
