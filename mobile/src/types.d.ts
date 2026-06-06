declare module '*.png';

declare interface ScheduleItem {
  from: string;
  to: string;
  weekday: string;
}

declare interface Teacher {
  avatar: string;
  bio: string;
  id: number;
  name: string;
  price: number;
  schedule: ScheduleItem[];
  subject: string;
  whatsapp: string;
}
