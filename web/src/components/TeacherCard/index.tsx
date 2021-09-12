import http from '~/services/http'
import { Teacher } from '~/types'
import styles from './styles.module.scss'

interface TeacherCardProps {
  teacher: Teacher
}

function TeacherCard({ teacher }: TeacherCardProps) {
  const handleCreateConnection = () => {
    http.post('/connections', { user: teacher.id })
  }

  return (
    <article className={styles.card}>
      <header>
        <img src={teacher.avatar} alt={`Foto de ${teacher.name}`} />
        <div>
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
          <img src="/icons/whatsapp.svg" alt="Ícone do WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherCard
