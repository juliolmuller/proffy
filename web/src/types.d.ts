
export interface ClassSchedule {
  weekday: string
  from: string
  to: string
}

export interface Class {
  id: string
  name: string
  avatar: string
  bio: string
  whatsapp: string
  subject: string
  price: number
  user_id: string
  schedule: ClassSchedule[]
}
