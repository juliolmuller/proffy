import React from 'react'
import PageHeader from '../../components/PageHeader'
import './styles.css'

function TeachersList() {
  return (
    <div id="page-teachers-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis:">
        <form id="search-teacher">
          <div className="input-group">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-group">
            <label htmlFor="weekday">Dia da semana</label>
            <input type="text" id="weekday" />
          </div>
          <div className="input-group">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
    </div>
  )
}

export default TeachersList
