import knex from 'knex';

import * as config from '../app/config';

const connection = knex(config);

export default connection;
