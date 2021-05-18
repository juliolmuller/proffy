/* eslint-disable react/jsx-child-element-spacing */
import { useState } from 'react'
import { useRouter } from 'next/router'
import DocumentHead from 'next/head'
import Header from '@/components/Header'
import Input from '@/components/Input'
import Select from '@/components/Select'
import TextArea from '@/components/TextArea'
import http from '@/services/http'
import { ScheduleItem, Teacher } from '@/types'
import styles from './styles.module.scss'

function TeachersFormPage() {
  const router = useRouter()

  const [bio, setBio] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [avatar, setAvatar] = useState('')
  const [subject, setSubject] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([
    { weekday: '', from: '', to: '' },
  ])

  function addScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { weekday: '', from: '', to: '' },
    ])
  }

  function onScheduleItemChange(position: number, field: keyof ScheduleItem, value: string) {
    setScheduleItems(scheduleItems.map((schItem, index) => {
      if (index === position) {
        return { ...schItem, [field]: value }
      }

      return schItem
    }))
  }

  async function handleFormSubmit() {
    await http.post('/classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      price,
      schedule: scheduleItems,
    } as unknown as Partial<Teacher>)

    alert('Cadastrado com sucesso!')
    router.replace('/')
  }

  return (
    <div className={styles.pageWrapper}>
      <DocumentHead>
        <title>Proffy | Cadastrar Professor e Aulas</title>
      </DocumentHead>

      <Header
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
              onChange={(ev) => setName(ev.target.value)}
            />
            <Input
              type="text"
              name="avatar"
              label="Avatar"
              onChange={(ev) => setAvatar(ev.target.value)}
            />
            <Input
              type="text"
              name="whatsapp"
              label="WhatsApp"
              onChange={(ev) => setWhatsapp(ev.target.value)}
            />
            <TextArea
              name="bio"
              label="Biografia"
              onChange={(ev) => setBio(ev.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
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
            <Input
              type="text"
              name="price"
              label="Valor da sua hora"
              value={price}
              onChange={(ev) => setPrice(ev.target.value)}
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
              <div key={index} className={styles.scheduleItem}>
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
              <img src="/icons/warning.svg" alt="Alerta" />
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

export default TeachersFormPage
