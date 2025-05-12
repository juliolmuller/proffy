export interface ClassSchedule {
  from: string;
  to: string;
  weekday: string;
}

export interface Class {
  avatar: string;
  bio: string;
  id: string;
  name: string;
  price: number;
  schedule: ClassSchedule[];
  subject: string;
  user_id: string;
  whatsapp: string;
}
