import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import './styles.module.scss'

interface PageHeaderProps {
  title: string
  children?: ReactNode
  description?: string
}

function Header({ title, description, children }: PageHeaderProps) {
  const router = useRouter()

  return (
    <header className="page-header">
      <div className="top-bar-container">
        <button type="button" onClick={() => router.back()}>
          <img src="/img/icons/back.svg" alt="Ícone de retornar" />
        </button>

        <img src="/img/logo.svg" alt="Logo da Proffy" />
      </div>
      <div className="header-content">
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
