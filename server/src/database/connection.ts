import knex from 'knex'
import * as config from '../config'

const connection = knex(config)

export default connection
