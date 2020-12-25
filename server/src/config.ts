import dotenv from 'dotenv-flow'
import path from 'path'
import pg from 'pg'

/**
 * Setup environment variables
 */
if (process.env.NODE_ENV !== 'production') {
  const result = dotenv.config({
    path: path.join(__dirname, '..'),
    purge_dotenv: true,
  })

  if (result.error) {
    throw result.error
  }
}

/**
 * Configure PostgreSQL types parsers used by Knex
 */
const types = pg.types.builtins
const parser = (value: string) => (value === null ? null : Number(value))

pg.types.setTypeParser(types.INT4, parser)
pg.types.setTypeParser(types.INT8, parser)
pg.types.setTypeParser(types.NUMERIC, parser)

/**
 * Configure Knex Query Builder
 */
module.exports = {
  client: process.env.DB_CONNECTION,
  connection: process.env.DATABASE_URL || {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  migrations: {
    directory: path.resolve(__dirname, 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'database', 'seeds'),
  },
  useNullAsDefault: true,
}
