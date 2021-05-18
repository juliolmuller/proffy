import { GetStaticProps } from 'next'
import DocumentHead from 'next/head'
import Link from 'next/link'
import http from '@/services/http'
import styles from './styles.module.scss'

interface LandingPageProps {
  totalConnections: number
}

function LandingPage({ totalConnections = 0 }: LandingPageProps) {
  return (
    <div className={styles.pageWrapper}>
      <DocumentHead>
        <title>Proffy | Home</title>
      </DocumentHead>

      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/img/logo.svg" alt="logo da Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src="/img/landing.svg"
          alt="Capa do sistema Proffy"
          className={styles.heroImage}
        />

        <div className={styles.buttonsGroup}>
          <Link href="/study">
            <a className={styles.studyRoute}>
              <img src="/icons/study.svg" alt="ícone de estudo" /> Estudar
            </a>
          </Link>
          <Link href="/teach">
            <a className={styles.teachRoute}>
              <img src="/icons/teach.svg" alt="ícone de ensino" /> Lecionar
            </a>
          </Link>
        </div>

        <span className={styles.connectionsCount}>
          Total de {totalConnections} conexões já realizadas.
          <img src="/icons/purple-heart.svg" alt="ícone de conexões" />
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
      totalConnections: Number(data.total) || 0,
    },
  }
}

export {
  LandingPage as default,
  getStaticProps,
}
