import { GetStaticProps } from 'next'
import DocumentHead from 'next/head'
import Link from 'next/link'
import http from '@/services/http'
import './styles.module.scss'

interface LandingPageProps {
  totalConnections: number
}

function LandingPage({ totalConnections = 0 }: LandingPageProps) {
  return (
    <div id="page-landing">
      <DocumentHead>
        <title>Proffy | Home</title>
      </DocumentHead>

      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src="/img/logo.svg" alt="Logo da Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src="/img/landing.svg"
          alt="Capa do sistema Proffy"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link href="/study">
            <a className="study">
              <img src="/img/icons/study.svg" alt="ícone de estudo" /> Estudar
            </a>
          </Link>
          <Link href="/teach">
            <a className="teach">
              <img src="/img/icons/teach.svg" alt="ícone de ensino" /> Lecionar
            </a>
          </Link>
        </div>

        <span id="total-connections">
          Total de {totalConnections} conexões já realizadas.
          <img src="/img/icons/purple-heart.svg" alt="Ícone de coneções" />
        </span>
      </div>
    </div>
  )
}

const getStaticProps: GetStaticProps<LandingPageProps> = async () => {
  const { data } = await http.get('/connections')

  return {
    revalidate: 300, // revalidate every 300 seconds (5 minutes)
    props: {
      totalConnections: Number(data.data) || 0,
    },
  }
}

export {
  LandingPage as default,
  getStaticProps,
}
