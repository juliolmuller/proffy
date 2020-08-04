import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import heroImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import teachIcon from '../../assets/images/icons/teach.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Logo da Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={heroImg}
          alt="Capa do sistema Proffy"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/estudar" className="study">
            <img src={studyIcon} alt="Ícone de estudo" />
            Estudar
          </Link>
          <Link to="/lecionar" className="teach">
            <img src={teachIcon} alt="Ícone de ensino" />
            Lecionar
          </Link>
        </div>
        <span id="total-connections">
          Total de 200 conexões já realizadas.
          <img src={purpleHeartIcon} alt="Ícone de coneções" />
        </span>
      </div>
    </div>
  )
}

export default Landing
