import React from 'react'
import PageHeader from '../../components/PageHeader'
import TeacherCard from '../../components/TeacherCard'
import InputField from '../../components/InputField'
import './styles.css'

const TeachersList = () => (
  <div id="page-teachers-list" className="container">
    <PageHeader title="Estes são os proffys disponíveis:">
      <form id="search-teacher">
        <InputField type="text" name="subject" label="Matéria" />
        <InputField type="text" name="weekday" label="Dia da semana" />
        <InputField type="time" name="time" label="Horário" />
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
