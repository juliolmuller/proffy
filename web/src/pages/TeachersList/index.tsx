import { FC, useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Select from '../../components/Select'
import TeacherCard, { Teacher } from '../../components/TeacherCard'
import http from '../../services/http'
import './styles.css'

const TeachersList: FC = () => {
  const [subject, subjectSetter] = useState('')
  const [weekday, weekdaySetter] = useState('')
  const [time, timeSetter] = useState('')
  const [teachersList, teachersListSetter] = useState([])

  useEffect(() => {
    if (subject && weekday && time) {
      http.get('/classes', {
        params: { subject, weekday, time },
      }).then(({ data }) => teachersListSetter(data))
    }
  }, [subject, weekday, time])

  return (
    <div id="page-teachers-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis:">
        <form id="search-teacher">
          <Select
            name="subject"
            label="Matéria:"
            value={subject}
            onChange={(ev) => subjectSetter(ev.target.value)}
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
            onChange={(ev) => weekdaySetter(ev.target.value)}
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
            onChange={(ev) => timeSetter(ev.target.value)}
          />
        </form>
      </PageHeader>
      <main>
        {teachersList.map((teacher: Teacher) => <TeacherCard key={teacher.id} teacher={teacher} />)}
      </main>
    </div>
  )
}

export default TeachersList
