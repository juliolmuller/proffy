import { PrismaClient } from '@prisma/client';
import knex from 'knex';

import * as config from '../app/config';

export const knexClient = knex(config);

export const prismaClient = new PrismaClient();
