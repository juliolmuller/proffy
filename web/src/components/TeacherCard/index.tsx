import http from '~/services/http';
import { type Class } from '~/types';

import styles from './styles.module.scss';

interface TeacherCardProps {
  clazz: Class;
}

function TeacherCard({ clazz }: TeacherCardProps) {
  const handleCreateConnection = () => {
    http.post('/connections', { user: clazz.user_id });
  };

  return (
    <article className={styles.card}>
      <header>
        <img src={clazz.avatar} alt={`Foto de ${clazz.name}`} />
        <div>
          <h3>{clazz.name}</h3>
          <span>{clazz.subject}</span>
        </div>
      </header>
      <div>
        {clazz.bio.split('\n').map((paragraph: string, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <footer>
        <p>
          Preço por hora:
          <span>R$ {clazz.price.toFixed(2)}</span>
        </p>
        <a
          href={`https://wa.me/${clazz.whatsapp}`}
          onClick={handleCreateConnection}
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/whatsapp.svg" alt="Ícone do WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherCard;
