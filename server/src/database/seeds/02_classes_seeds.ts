/* eslint-disable no-multi-spaces, no-magic-numbers */
import { Knex } from 'knex'
import { TABLE_NAME as USERS_TABLE } from '../migrations/01_create_users_table'
import { TABLE_NAME as CLASSES_TABLE } from '../migrations/02_create_classes_table'
import { UserRecord } from './01_users_seeds'

export type ClassRecord = {
  id: number
  subject: string
  price: number
  user_id: number
}

export async function seed(knex: Knex) {
  const users: UserRecord[] = await knex.from(USERS_TABLE)
  const classes: Partial<ClassRecord>[] = [
    { subject: 'Biologia',   price: 79.90, user_id: users[0].id },
    { subject: 'Física',     price: 79.90, user_id: users[0].id },
    { subject: 'Geografia',  price: 79.90, user_id: users[0].id },
    { subject: 'História',   price: 79.90, user_id: users[0].id },
    { subject: 'Lógica',     price: 79.90, user_id: users[0].id },
    { subject: 'Matemática', price: 79.90, user_id: users[0].id },
    { subject: 'Português',  price: 79.90, user_id: users[0].id },
    { subject: 'Química',    price: 79.90, user_id: users[0].id },
    { subject: 'Biologia',   price: 85.00, user_id: users[1].id },
    { subject: 'Física',     price: 85.00, user_id: users[1].id },
    { subject: 'Geografia',  price: 85.00, user_id: users[1].id },
    { subject: 'História',   price: 85.00, user_id: users[1].id },
    { subject: 'Lógica',     price: 85.00, user_id: users[1].id },
    { subject: 'Matemática', price: 85.00, user_id: users[1].id },
    { subject: 'Português',  price: 85.00, user_id: users[1].id },
    { subject: 'Química',    price: 85.00, user_id: users[1].id },
    { subject: 'Biologia',   price: 80.00, user_id: users[2].id },
    { subject: 'Física',     price: 80.00, user_id: users[2].id },
    { subject: 'Geografia',  price: 80.00, user_id: users[2].id },
    { subject: 'História',   price: 80.00, user_id: users[2].id },
    { subject: 'Lógica',     price: 80.00, user_id: users[2].id },
    { subject: 'Matemática', price: 80.00, user_id: users[2].id },
    { subject: 'Português',  price: 80.00, user_id: users[2].id },
    { subject: 'Química',    price: 80.00, user_id: users[2].id },
    { subject: 'Biologia',   price: 75.00, user_id: users[3].id },
    { subject: 'Física',     price: 75.00, user_id: users[3].id },
    { subject: 'Geografia',  price: 75.00, user_id: users[3].id },
    { subject: 'História',   price: 75.00, user_id: users[3].id },
    { subject: 'Lógica',     price: 75.00, user_id: users[3].id },
    { subject: 'Matemática', price: 75.00, user_id: users[3].id },
    { subject: 'Português',  price: 75.00, user_id: users[3].id },
    { subject: 'Química',    price: 75.00, user_id: users[3].id },
    { subject: 'Biologia',   price: 84.90, user_id: users[4].id },
    { subject: 'Física',     price: 84.90, user_id: users[4].id },
    { subject: 'Geografia',  price: 84.90, user_id: users[4].id },
    { subject: 'História',   price: 84.90, user_id: users[4].id },
    { subject: 'Lógica',     price: 84.90, user_id: users[4].id },
    { subject: 'Matemática', price: 84.90, user_id: users[4].id },
    { subject: 'Português',  price: 84.90, user_id: users[4].id },
    { subject: 'Química',    price: 84.90, user_id: users[4].id },
    { subject: 'Biologia',   price: 70.00, user_id: users[5].id },
    { subject: 'Física',     price: 70.00, user_id: users[5].id },
    { subject: 'Geografia',  price: 70.00, user_id: users[5].id },
    { subject: 'História',   price: 70.00, user_id: users[5].id },
    { subject: 'Lógica',     price: 70.00, user_id: users[5].id },
    { subject: 'Matemática', price: 70.00, user_id: users[5].id },
    { subject: 'Português',  price: 70.00, user_id: users[5].id },
    { subject: 'Química',    price: 70.00, user_id: users[5].id },
    { subject: 'Biologia',   price: 75.00, user_id: users[6].id },
    { subject: 'Física',     price: 75.00, user_id: users[6].id },
    { subject: 'Geografia',  price: 75.00, user_id: users[6].id },
    { subject: 'História',   price: 75.00, user_id: users[6].id },
    { subject: 'Lógica',     price: 75.00, user_id: users[6].id },
    { subject: 'Matemática', price: 75.00, user_id: users[6].id },
    { subject: 'Português',  price: 75.00, user_id: users[6].id },
    { subject: 'Química',    price: 75.00, user_id: users[6].id },
    { subject: 'Biologia',   price: 89.90, user_id: users[7].id },
    { subject: 'Física',     price: 89.90, user_id: users[7].id },
    { subject: 'Geografia',  price: 89.90, user_id: users[7].id },
    { subject: 'História',   price: 89.90, user_id: users[7].id },
    { subject: 'Lógica',     price: 89.90, user_id: users[7].id },
    { subject: 'Matemática', price: 89.90, user_id: users[7].id },
    { subject: 'Português',  price: 89.90, user_id: users[7].id },
    { subject: 'Química',    price: 89.90, user_id: users[7].id },
    { subject: 'Biologia',   price: 79.90, user_id: users[8].id },
    { subject: 'Física',     price: 79.90, user_id: users[8].id },
    { subject: 'Geografia',  price: 79.90, user_id: users[8].id },
    { subject: 'História',   price: 79.90, user_id: users[8].id },
    { subject: 'Lógica',     price: 79.90, user_id: users[8].id },
    { subject: 'Matemática', price: 79.90, user_id: users[8].id },
    { subject: 'Português',  price: 79.90, user_id: users[8].id },
    { subject: 'Química',    price: 79.90, user_id: users[8].id },
  ]

  await knex(CLASSES_TABLE).del()
  await knex(CLASSES_TABLE).insert(classes)
}
