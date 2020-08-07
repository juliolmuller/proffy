import React from 'react'
import PageHeader from '../../components/PageHeader'
import InputField from '../../components/InputField'
import warningIcon from '../../assets/images/icons/warning.svg'
import './styles.css'

const TeacherForm = () => (
  <div id="page-teacher-form" className="container">
    <PageHeader
      title="Que incrível que você quer dar aulas!"
      description="O primeiro passo é preencher este formulário de inscrição"
    />
    <main>
      <fieldset>
        <legend>Seus dados</legend>
        <InputField type="text" name="name" label="Nome completo:" />
        <InputField type="text" name="avatar" label="Avatar:" />
        <InputField type="text" name="whatsapp" label="WhatsApp:" />
      </fieldset>
      <fieldset>
        <legend>Sobre a aula</legend>
        <InputField type="text" name="subject" label="Matéria:" />
        <InputField type="text" name="price" label="Valor da sua hora:" />
      </fieldset>

      <footer>
        <p>
          <img src={warningIcon} alt="Alerta" />
          Importante! <br/>
          Preencha todos os dados.
        </p>
        <button type="button">
          Cadastrar
        </button>
      </footer>
    </main>
  </div>
)

export default TeacherForm
