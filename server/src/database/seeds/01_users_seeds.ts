/* eslint-disable no-multi-spaces, no-use-before-define, object-curly-newline */
import Knex from 'knex'
import { TABLE_NAME } from '../migrations/01_create_users_table'

export const seed = async (knex: Knex): Promise<void> => {
  await knex(TABLE_NAME).del()
  const ids = await knex(TABLE_NAME).insert(data, 'id')

  data.forEach((user, index) => Object.assign(user, { id: Number(ids[index]) }))
}

const whatsapp = '+5541999888777'
const bio = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae consequatur, deserunt quibusdam nesciunt nobis voluptatum. Dicta error, vero, itaque numquam voluptates laudantium quod quasi commodi ea omnis officiis illum eos!'
export const data = [
  { name: 'Alex Kutzke',          avatar: 'https://github.com/alexkutzke.png',       whatsapp, bio },
  { name: 'André K. Antunes',     avatar: 'https://github.com/andrekantunes.png',    whatsapp, bio },
  { name: 'Aurelio S. Matsunaga', avatar: 'https://github.com/aureliomatsunaga.png', whatsapp, bio },
  { name: 'Bruno Fernandes',      avatar: 'https://github.com/bruno1.png',           whatsapp, bio },
  { name: 'Cassiano K. Vidal',    avatar: 'https://github.com/kruchelski.png',       whatsapp, bio },
  { name: 'Diego Fernandes',      avatar: 'https://github.com/diego3g.png',          whatsapp, bio },
  { name: 'Erick Alessi',         avatar: 'https://github.com/erickbralessi.png',    whatsapp, bio },
  { name: 'Julio L. Muller',      avatar: 'https://github.com/juliolmuller.png',     whatsapp, bio },
  { name: 'Wesley Caetano',       avatar: 'https://github.com/vvesleyc.png',         whatsapp, bio },
]
