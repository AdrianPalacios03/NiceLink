import { registerAs } from '@nestjs/config'

export default registerAs('config', () => {
    return {
        TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL,
        TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
    }
})