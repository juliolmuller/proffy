
export interface ScheduleItem {
  weekday: string
  from: string
  to: string
}

export interface Teacher {
  id: number
  name: string
  avatar: string
  bio: string
  whatsapp: string
  subject: string
  price: number
  schedule: ScheduleItem[]
}
