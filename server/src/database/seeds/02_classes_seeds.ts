/* eslint-disable no-multi-spaces, no-use-before-define */
import Knex from 'knex'
import { TABLE_NAME } from '../migrations/02_create_classes_table'

export const seed = async (knex: Knex): Promise<void> => {
  await knex(TABLE_NAME).del()
  const ids = await knex(TABLE_NAME).insert(data, 'id')

  data.forEach((clazz, index) => Object.assign(clazz, { id: Number(ids[index]) }))
}

export const data = [
  { subject: 'Biologia',   price: 79.90, user_id: 1 },
  { subject: 'Física',     price: 79.90, user_id: 1 },
  { subject: 'Geografia',  price: 79.90, user_id: 1 },
  { subject: 'História',   price: 79.90, user_id: 1 },
  { subject: 'Lógica',     price: 79.90, user_id: 1 },
  { subject: 'Matemática', price: 79.90, user_id: 1 },
  { subject: 'Português',  price: 79.90, user_id: 1 },
  { subject: 'Química',    price: 79.90, user_id: 1 },
  { subject: 'Biologia',   price: 85.00, user_id: 2 },
  { subject: 'Física',     price: 85.00, user_id: 2 },
  { subject: 'Geografia',  price: 85.00, user_id: 2 },
  { subject: 'História',   price: 85.00, user_id: 2 },
  { subject: 'Lógica',     price: 85.00, user_id: 2 },
  { subject: 'Matemática', price: 85.00, user_id: 2 },
  { subject: 'Português',  price: 85.00, user_id: 2 },
  { subject: 'Química',    price: 85.00, user_id: 2 },
  { subject: 'Biologia',   price: 80.00, user_id: 3 },
  { subject: 'Física',     price: 80.00, user_id: 3 },
  { subject: 'Geografia',  price: 80.00, user_id: 3 },
  { subject: 'História',   price: 80.00, user_id: 3 },
  { subject: 'Lógica',     price: 80.00, user_id: 3 },
  { subject: 'Matemática', price: 80.00, user_id: 3 },
  { subject: 'Português',  price: 80.00, user_id: 3 },
  { subject: 'Química',    price: 80.00, user_id: 3 },
  { subject: 'Biologia',   price: 75.00, user_id: 4 },
  { subject: 'Física',     price: 75.00, user_id: 4 },
  { subject: 'Geografia',  price: 75.00, user_id: 4 },
  { subject: 'História',   price: 75.00, user_id: 4 },
  { subject: 'Lógica',     price: 75.00, user_id: 4 },
  { subject: 'Matemática', price: 75.00, user_id: 4 },
  { subject: 'Português',  price: 75.00, user_id: 4 },
  { subject: 'Química',    price: 75.00, user_id: 4 },
  { subject: 'Biologia',   price: 84.90, user_id: 5 },
  { subject: 'Física',     price: 84.90, user_id: 5 },
  { subject: 'Geografia',  price: 84.90, user_id: 5 },
  { subject: 'História',   price: 84.90, user_id: 5 },
  { subject: 'Lógica',     price: 84.90, user_id: 5 },
  { subject: 'Matemática', price: 84.90, user_id: 5 },
  { subject: 'Português',  price: 84.90, user_id: 5 },
  { subject: 'Química',    price: 84.90, user_id: 5 },
  { subject: 'Biologia',   price: 70.00, user_id: 6 },
  { subject: 'Física',     price: 70.00, user_id: 6 },
  { subject: 'Geografia',  price: 70.00, user_id: 6 },
  { subject: 'História',   price: 70.00, user_id: 6 },
  { subject: 'Lógica',     price: 70.00, user_id: 6 },
  { subject: 'Matemática', price: 70.00, user_id: 6 },
  { subject: 'Português',  price: 70.00, user_id: 6 },
  { subject: 'Química',    price: 70.00, user_id: 6 },
  { subject: 'Biologia',   price: 75.00, user_id: 7 },
  { subject: 'Física',     price: 75.00, user_id: 7 },
  { subject: 'Geografia',  price: 75.00, user_id: 7 },
  { subject: 'História',   price: 75.00, user_id: 7 },
  { subject: 'Lógica',     price: 75.00, user_id: 7 },
  { subject: 'Matemática', price: 75.00, user_id: 7 },
  { subject: 'Português',  price: 75.00, user_id: 7 },
  { subject: 'Química',    price: 75.00, user_id: 7 },
  { subject: 'Biologia',   price: 89.90, user_id: 8 },
  { subject: 'Física',     price: 89.90, user_id: 8 },
  { subject: 'Geografia',  price: 89.90, user_id: 8 },
  { subject: 'História',   price: 89.90, user_id: 8 },
  { subject: 'Lógica',     price: 89.90, user_id: 8 },
  { subject: 'Matemática', price: 89.90, user_id: 8 },
  { subject: 'Português',  price: 89.90, user_id: 8 },
  { subject: 'Química',    price: 89.90, user_id: 8 },
  { subject: 'Biologia',   price: 79.90, user_id: 9 },
  { subject: 'Física',     price: 79.90, user_id: 9 },
  { subject: 'Geografia',  price: 79.90, user_id: 9 },
  { subject: 'História',   price: 79.90, user_id: 9 },
  { subject: 'Lógica',     price: 79.90, user_id: 9 },
  { subject: 'Matemática', price: 79.90, user_id: 9 },
  { subject: 'Português',  price: 79.90, user_id: 9 },
  { subject: 'Química',    price: 79.90, user_id: 9 },
]
