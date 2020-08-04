import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
import './styles.css'

interface PageHeaderProps {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Ícone de retornar" />
        </Link>
        <img src={logoImg} alt="Logo da Proffy" />
      </div>
      <div className="header-content">
        <h2>{props.title}</h2>
      </div>
    </header>
  )
}

export default PageHeader
