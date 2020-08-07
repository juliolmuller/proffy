import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Select from '../../components/Select'
import TeacherCard from '../../components/TeacherCard'
import './styles.css'

const TeachersList = () => (
  <div id="page-teachers-list" className="container">
    <PageHeader title="Estes são os proffys disponíveis:">
      <form id="search-teacher">
        <Select
          name="subject"
          label="Matéria:"
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
        <Input type="time" name="time" label="Horário" />
      </form>
    </PageHeader>
    <main>
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
    </main>
  </div>
)

export default TeachersList
