import { FC } from 'react'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import http from '../../services/http'
import './styles.css'

export interface Teacher {
  id: number
  name: string
  avatar: string
  bio: string
  whatsapp: string
  subject: string
  price: number
}

interface TeacherCardProps {
  teacher: Teacher
}

const TeacherCard: FC<TeacherCardProps> = ({ teacher }) => {
  const handleCreateConnection = () => {
    http.post('/connections', { user: teacher.id })
  }

  return (
    <article className="teacher-card">
      <header>
        <img src={teacher.avatar} alt={`Foto de ${teacher.name}`} />
        <div className="teacher-card-title">
          <h3>{teacher.name}</h3>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <div>
        {teacher.bio.split('\n').map((paragraph: string, index) => <p key={index}>{paragraph}</p>)}
      </div>
      <footer>
        <p>
          Preço por hora:
          <span>R$ {teacher.price.toFixed(2)}</span>
        </p>
        <a href={`https://wa.me/${teacher.whatsapp}`} onClick={handleCreateConnection}>
          <img src={whatsAppIcon} alt="Ícone do WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherCard
