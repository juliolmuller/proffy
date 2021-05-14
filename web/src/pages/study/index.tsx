import { useEffect, useState } from 'react'
import DocumentHead from 'next/head'
import Header from '@/components/Header'
import Input from '@/components/Input'
import Select from '@/components/Select'
import TeacherCard from '@/components/TeacherCard'
import http from '@/services/http'
import { Teacher } from '@/types'
import styles from './styles.module.scss'

function TeachersSearchPage() {
  const [time, setTime] = useState('')
  const [weekday, setWeekday] = useState('')
  const [subject, setSubject] = useState('')
  const [teachersList, setTeachersList] = useState<Teacher[]>([])

  useEffect(() => {
    if (subject && weekday && time) {
      http.get('/classes', {
        params: { subject, weekday, time },
      }).then(({ data }) => setTeachersList(data))
    }
  }, [subject, weekday, time])

  return (
    <div className={styles.pageWrapper}>
      <DocumentHead>
        <title>Proffy | Buscar Professores e Instrutores</title>
      </DocumentHead>

      <Header title="Estes são os proffys disponíveis:">
        <form className={styles.searchForm}>
          <Select
            name="subject"
            label="Matéria:"
            value={subject}
            onChange={(ev) => setSubject(ev.target.value)}
            options={[
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Lógica', label: 'Lógica' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />
          <Select
            name="weekday"
            label="Dia da Semana"
            value={weekday}
            onChange={(ev) => setWeekday(ev.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Horário"
            onChange={(ev) => setTime(ev.target.value)}
          />
        </form>
      </Header>

      <main>
        {teachersList.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            teacher={teacher}
          />
        ))}
      </main>
    </div>
  )
}

export default TeachersSearchPage
