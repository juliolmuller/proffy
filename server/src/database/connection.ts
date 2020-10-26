import knex from 'knex'
import path from 'path'

const database = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  pool: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    afterCreate(connection: any, sql: any) {
      connection.run('PRAGMA foreign_keys = ON', sql)
    },
  },
  useNullAsDefault: true,
})

export default database
