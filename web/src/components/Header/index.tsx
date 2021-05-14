import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import styles from './styles.module.scss'

interface PageHeaderProps {
  title: string
  children?: ReactNode
  description?: string
}

function Header({ title, description, children }: PageHeaderProps) {
  const router = useRouter()

  return (
    <header className={styles.pageHeader}>
      <nav className={styles.topBar}>
        <button type="button" onClick={() => router.back()}>
          <img src="/img/icons/back.svg" alt="Ícone de retornar" />
        </button>

        <img src="/img/logo.svg" alt="Logo da Proffy" />
      </nav>

      <div className={styles.content}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <div>
          {children}
        </div>
      </div>
    </header>
  )
}

export default Header
