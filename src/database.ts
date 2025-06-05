import configKnex, { Knex } from 'knex'
import { env } from './env/index.js'

if (!process.env.DATABASE_URL) {
  throw new Error('database url not found')
}

const connection =
  env.DATABASE_CLIENT === 'sqlite'
    ? {
        filename: env.DATABASE_URL,
      }
    : env.DATABASE_URL

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = configKnex(config)
