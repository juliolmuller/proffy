import React from 'react'
import PageHeader from '../../components/PageHeader'
import TeacherCard from '../../components/TeacherCard'
import Input from '../../components/Input'
import './styles.css'

const TeachersList = () => (
  <div id="page-teachers-list" className="container">
    <PageHeader title="Estes são os proffys disponíveis:">
      <form id="search-teacher">
        <Input type="text" name="subject" label="Matéria" />
        <Input type="text" name="weekday" label="Dia da semana" />
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
