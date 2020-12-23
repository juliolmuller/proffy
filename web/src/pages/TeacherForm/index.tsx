import { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Select from '../../components/Select'
import TextArea from '../../components/TextArea'
import warningIcon from '../../assets/images/icons/warning.svg'
import http from '../../services/http'
import './styles.css'

const TeacherForm: FC = () => {
  const history = useHistory()

  const [bio, bioSetter] = useState('')
  const [name, nameSetter] = useState('')
  const [price, priceSetter] = useState('')
  const [avatar, avatarSetter] = useState('')
  const [subject, subjectSetter] = useState('')
  const [whatsapp, whatsappSetter] = useState('')
  const [scheduleItems, scheduleItemsSetter] = useState([
    { weekday: 0, from: '', to: '' },
  ])

  const addScheduleItem = () => {
    scheduleItemsSetter([
      ...scheduleItems,
      { weekday: 0, from: '', to: '' },
    ])
  }

  const onScheduleItemChange = (position: number, field: string, value: string) => {
    scheduleItemsSetter(scheduleItems.map((schItem, index) => {
      if (index === position) {
        return { ...schItem, [field]: value }
      }

      return schItem
    }))
  }

  const handleFormSubmit = () => {
    http.post('/classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      price,
      schedule: scheduleItems,
    }).then(() => {
      alert('Cadastrado com sucesso!')
      history.push('/')
    })
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher este formulário de inscrição"
      />

      <main>
        <form>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              type="text"
              name="name"
              label="Nome completo"
              onChange={(ev) => nameSetter(ev.target.value)}
            />
            <Input
              type="text"
              name="avatar"
              label="Avatar"
              onChange={(ev) => avatarSetter(ev.target.value)}
            />
            <Input
              type="text"
              name="whatsapp"
              label="WhatsApp"
              onChange={(ev) => whatsappSetter(ev.target.value)}
            />
            <TextArea
              name="bio"
              label="Biografia"
              onChange={(ev) => bioSetter(ev.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
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
            <Input
              type="text"
              name="price"
              label="Valor da sua hora"
              value={price}
              onChange={(ev) => priceSetter(ev.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map((schItem, index) => (
              <div key={index} className="schedule-item">
                <Select
                  name="weekday"
                  label="Dia da Semana"
                  value={schItem.weekday}
                  onChange={(ev) => onScheduleItemChange(index, 'weekday', ev.target.value)}
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
                  name={`from${index}`}
                  label="Das"
                  type="time"
                  onChange={(ev) => onScheduleItemChange(index, 'from', ev.target.value)}
                />
                <Input
                  name={`to${index}`}
                  label="Até"
                  type="time"
                  onChange={(ev) => onScheduleItemChange(index, 'to', ev.target.value)}
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Alerta" />
              Importante! <br/>
              Preencha todos os dados.
            </p>
            <button type="button" onClick={handleFormSubmit}>
              Cadastrar
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm
