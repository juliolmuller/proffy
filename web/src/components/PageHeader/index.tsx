import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
import './styles.css'

interface PageHeaderProps {
  title: string
  description?: string
}

const PageHeader: FC<PageHeaderProps> = (props) => (
  <header className="page-header">
    <div className="top-bar-container">
      <Link to="/">
        <img src={backIcon} alt="Ícone de retornar" />
      </Link>
      <img src={logoImg} alt="Logo da Proffy" />
    </div>
    <div className="header-content">
      <h2>{props.title}</h2>
      {props.description && <p>{props.description}</p>}
      <div>
        {props.children}
      </div>
    </div>
  </header>
)

export default PageHeader
