import dotenv from 'dotenv-flow'
import path from 'path'

/**
 * Setup environment variables
 */
if (process.env.NODE_ENV !== 'production') {
  const result = dotenv.config({
    path: process.cwd(),
    purge_dotenv: true,
  })

  if (result.error) {
    throw result.error
  }
}

/**
 * Configure Knex Query Builder
 */
module.exports = {
  client: process.env.DB_CONNECTION,
  connection: process.env.DB_URL || {
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
