const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development'

export const logstarts = (message) => console.info(message, "++++")

export default {
    port: env.PORT || 8080
}